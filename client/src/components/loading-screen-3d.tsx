import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8;
        if (newProgress >= 100) {
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Custom Element Implementation
    class AHole extends HTMLElement {
      constructor() {
        super();
        this.discs = [];
        this.lines = [];
        this.particles = [];
      }

      connectedCallback() {
        this.canvas = this.querySelector('.js-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.setSize();
        this.setDiscs();
        this.setLines();
        this.setParticles();
        this.bindEvents();
        this.tick();
      }

      bindEvents() {
        window.addEventListener('resize', this.onResize.bind(this));
      }

      onResize() {
        this.setSize();
        this.setDiscs();
        this.setLines();
        this.setParticles();
      }

      setSize() {
        this.rect = this.getBoundingClientRect();
        this.render = {
          width: this.rect.width,
          height: this.rect.height,
          dpi: window.devicePixelRatio
        };
        this.canvas.width = this.render.width * this.render.dpi;
        this.canvas.height = this.render.height * this.render.dpi;
      }

      setDiscs() {
        const { width, height } = this.rect;
        this.discs = [];
        
        this.startDisc = {
          x: width * 0.5,
          y: height * 0.45,
          w: width * 0.75,
          h: height * 0.7
        };

        this.endDisc = {
          x: width * 0.5,
          y: height * 0.95,
          w: 0,
          h: 0
        };

        const totalDiscs = 100;
        let prevBottom = height;
        this.clip = {};

        for (let i = 0; i < totalDiscs; i++) {
          const p = i / totalDiscs;
          const disc = this.tweenDisc({ p });
          const bottom = disc.y + disc.h;

          if (bottom <= prevBottom) {
            this.clip = { disc: { ...disc }, i };
          }

          prevBottom = bottom;
          this.discs.push(disc);
        }

        this.clip.path = new Path2D();
        this.clip.path.ellipse(
          this.clip.disc.x,
          this.clip.disc.y,
          this.clip.disc.w,
          this.clip.disc.h,
          0,
          0,
          Math.PI * 2
        );
        this.clip.path.rect(
          this.clip.disc.x - this.clip.disc.w,
          0,
          this.clip.disc.w * 2,
          this.clip.disc.y
        );
      }

      setLines() {
        const { width, height } = this.rect;
        this.lines = [];
        
        const totalLines = 100;
        const linesAngle = (Math.PI * 2) / totalLines;

        for (let i = 0; i < totalLines; i++) {
          this.lines.push([]);
        }

        this.discs.forEach((disc) => {
          for (let i = 0; i < totalLines; i++) {
            const angle = i * linesAngle;
            const p = {
              x: disc.x + Math.cos(angle) * disc.w,
              y: disc.y + Math.sin(angle) * disc.h
            };
            this.lines[i].push(p);
          }
        });

        this.linesCanvas = new OffscreenCanvas(width, height);
        const ctx = this.linesCanvas.getContext('2d');

        this.lines.forEach((line) => {
          ctx.save();
          let lineIsIn = false;
          
          line.forEach((p1, j) => {
            if (j === 0) return;
            
            const p0 = line[j - 1];
            if (!lineIsIn && (ctx.isPointInPath(this.clip.path, p1.x, p1.y) ||
                ctx.isPointInStroke(this.clip.path, p1.x, p1.y))) {
              lineIsIn = true;
            } else if (lineIsIn) {
              ctx.clip(this.clip.path);
            }

            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
          });
          
          ctx.restore();
        });
      }

      setParticles() {
        const { width, height } = this.rect;
        this.particles = [];
        
        this.particleArea = {
          sw: this.clip.disc.w * 0.5,
          ew: this.clip.disc.w * 2,
          h: height * 0.85
        };
        this.particleArea.sx = (width - this.particleArea.sw) / 2;
        this.particleArea.ex = (width - this.particleArea.ew) / 2;

        const totalParticles = 100;
        for (let i = 0; i < totalParticles; i++) {
          this.particles.push(this.initParticle(true));
        }
      }

      initParticle(start = false) {
        const sx = this.particleArea.sx + this.particleArea.sw * Math.random();
        const ex = this.particleArea.ex + this.particleArea.ew * Math.random();
        const dx = ex - sx;
        const vx = 0.1 + Math.random() * 0.5;
        const y = start ? this.particleArea.h * Math.random() : this.particleArea.h;
        const r = 0.5 + Math.random() * 4;
        const vy = 0.5 + Math.random();

        return {
          x: sx, sx, dx, y, vy, p: 0, r,
          c: `rgba(59, 130, 246, ${Math.random()})`
        };
      }

      tweenValue(start, end, p, ease = false) {
        const delta = end - start;
        const easeFn = ease ? this.easeInExpo : (t) => t;
        return start + delta * easeFn(p);
      }

      easeInExpo(t) {
        return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
      }

      drawDiscs() {
        const { ctx } = this;
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;

        const outerDisc = this.startDisc;
        ctx.beginPath();
        ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        this.discs.forEach((disc, i) => {
          if (i % 5 !== 0) return;
          
          if (disc.w < this.clip.disc.w - 5) {
            ctx.save();
            ctx.clip(this.clip.path);
          }

          ctx.beginPath();
          ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.closePath();

          if (disc.w < this.clip.disc.w - 5) {
            ctx.restore();
          }
        });
      }

      drawLines() {
        const { ctx, linesCanvas } = this;
        ctx.drawImage(linesCanvas, 0, 0);
      }

      drawParticles() {
        const { ctx } = this;
        ctx.save();
        ctx.clip(this.clip.path);

        this.particles.forEach((particle) => {
          ctx.fillStyle = particle.c;
          ctx.beginPath();
          ctx.rect(particle.x, particle.y, particle.r, particle.r);
          ctx.closePath();
          ctx.fill();
        });

        ctx.restore();
      }

      moveDiscs() {
        this.discs.forEach((disc) => {
          disc.p = (disc.p + 0.001) % 1;
          this.tweenDisc(disc);
        });
      }

      moveParticles() {
        this.particles.forEach((particle) => {
          particle.p = 1 - particle.y / this.particleArea.h;
          particle.x = particle.sx + particle.dx * particle.p;
          particle.y -= particle.vy;

          if (particle.y < 0) {
            particle.y = this.initParticle().y;
          }
        });
      }

      tweenDisc(disc) {
        disc.x = this.tweenValue(this.startDisc.x, this.endDisc.x, disc.p);
        disc.y = this.tweenValue(this.startDisc.y, this.endDisc.y, disc.p, 'inExpo');
        disc.w = this.tweenValue(this.startDisc.w, this.endDisc.w, disc.p);
        disc.h = this.tweenValue(this.startDisc.h, this.endDisc.h, disc.p);
        return disc;
      }

      tick() {
        if (!this.ctx) return;
        
        const { ctx } = this;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.save();
        ctx.scale(this.render.dpi, this.render.dpi);

        this.moveDiscs();
        this.moveParticles();
        this.drawDiscs();
        this.drawLines();
        this.drawParticles();

        ctx.restore();
        requestAnimationFrame(this.tick.bind(this));
      }
    }

    // Register custom element
    if (!customElements.get('a-hole')) {
      customElements.define('a-hole', AHole);
    }

    // Create and append the custom element
    const aHole = document.createElement('a-hole');
    aHole.innerHTML = '<canvas class="js-canvas"></canvas>';
    containerRef.current.appendChild(aHole);

    return () => {
      if (containerRef.current && aHole) {
        containerRef.current.removeChild(aHole);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* 3D Stars Background */}
      <div className="absolute inset-0">
        {/* Large Stars */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`large-${i}`}
            className="absolute rounded-full bg-blue-300 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateZ(${Math.random() * 200 + 100}px)`,
              boxShadow: `0 0 ${Math.random() * 15 + 10}px rgba(147, 197, 253, 0.9)`,
              animation: `float3d ${4 + Math.random() * 4}s ease-in-out infinite`,
            }}
          />
        ))}
        
        {/* Medium Stars */}
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateZ(${Math.random() * 150 + 50}px)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8)`,
              animation: `float3d ${3 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
        
        {/* Small Stars */}
        {Array.from({ length: 150 }, (_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full bg-gray-300 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateZ(${Math.random() * 100}px)`,
              boxShadow: `0 0 ${Math.random() * 5 + 3}px rgba(209, 213, 219, 0.6)`,
              animation: `float3d ${2 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          background: '#141414',
        }}
      />

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, transparent 10%, black 50%)',
          zIndex: 2,
        }}
      />
      
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background: 'radial-gradient(ellipse at 50% 75%, #3b82f6 20%, transparent 75%)',
          zIndex: 5,
        }}
      />

      {/* Loading Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 font-['Cinzel'] tracking-widest"
            style={{
              background: 'linear-gradient(white, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
            }}
          >
            VIVEK PILLAI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl text-blue-300 mb-8 font-['Cormorant_Garamond'] tracking-wider"
          >
            Entering the Digital Universe
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-80 mx-auto"
          >
            <div className="relative">
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
              
              <div className="flex justify-between mt-2 text-sm text-blue-300">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        a-hole {
          position: absolute;
          top: 0;
          left: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .js-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        @keyframes float3d {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-20px) rotateX(180deg) rotateY(180deg);
          }
        }
      `}</style>
    </div>
  );
}