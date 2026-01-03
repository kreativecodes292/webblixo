import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }

    resizeCanvas();

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    // 🔥 MOBILE OPTIMIZED PARTICLES COUNT
    const particleCount = window.innerWidth < 768 ? 20 : 80;

    const colors = ["#00ff7f", "#00eaff"];
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 2.3;
        this.speedY = (Math.random() - 0.5) * 2.3;
      }

      draw() {
        // ✨ GLOW EFFECT
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // glow reset after draw
        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceX = dx / distance;
          const forceY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;

          this.x += forceX * force * 9;
          this.y += forceY * force * 9;
        }
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    init();

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.strokeStyle = "rgba(255,255,255,0.12)";
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    ></canvas>
  );
}
