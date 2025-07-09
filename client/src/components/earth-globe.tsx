import { useEffect, useRef } from 'react';

export default function EarthGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    // Create earth texture images
    const earthImg = new Image();
    const cloudsImg = new Image();
    let imagesLoaded = 0;

    const startAnimation = () => {
      if (imagesLoaded < 2) return;
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw outer glow
        const gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 220);
        gradient.addColorStop(0, 'rgba(100, 200, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw orbital rings
        ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(200, 200, 180, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(0, 255, 170, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(200, 200, 160, 0, Math.PI * 2);
        ctx.stroke();

        // Save context for globe rotation
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(rotationRef.current);

        // Draw earth sphere with gradient
        const earthGradient = ctx.createRadialGradient(-50, -50, 0, 0, 0, 140);
        earthGradient.addColorStop(0, 'rgba(100, 150, 255, 0.8)');
        earthGradient.addColorStop(0.7, 'rgba(50, 100, 200, 0.6)');
        earthGradient.addColorStop(1, 'rgba(20, 50, 100, 0.4)');
        
        ctx.fillStyle = earthGradient;
        ctx.beginPath();
        ctx.arc(0, 0, 140, 0, Math.PI * 2);
        ctx.fill();

        // Draw continents using simplified shapes
        ctx.fillStyle = 'rgba(50, 150, 50, 0.8)';
        
        // North America
        ctx.beginPath();
        ctx.ellipse(-60, -40, 40, 30, 0.3, 0, Math.PI * 2);
        ctx.fill();

        // South America
        ctx.beginPath();
        ctx.ellipse(-30, 30, 20, 50, 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Africa
        ctx.beginPath();
        ctx.ellipse(0, -10, 25, 45, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Europe
        ctx.beginPath();
        ctx.ellipse(10, -50, 15, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Asia
        ctx.beginPath();
        ctx.ellipse(50, -20, 35, 25, 0, 0, Math.PI * 2);
        ctx.fill();

        // Australia
        ctx.beginPath();
        ctx.ellipse(60, 40, 15, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw polar ice caps
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.ellipse(0, -120, 50, 20, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(0, 120, 60, 25, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        
        // Longitude lines
        for (let i = 0; i < 8; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, 140, (i * Math.PI) / 4, (i * Math.PI) / 4 + 0.01);
          ctx.stroke();
        }

        // Latitude lines
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath();
          ctx.ellipse(0, i * 35, 140, 10, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        // City lights
        ctx.fillStyle = 'rgba(255, 255, 100, 0.9)';
        const cities = [
          { x: -40, y: -20 }, // New York
          { x: 10, y: -30 }, // London
          { x: 60, y: -10 }, // Tokyo
          { x: -20, y: 20 }, // São Paulo
          { x: 30, y: 10 }, // Mumbai
        ];

        cities.forEach(city => {
          ctx.beginPath();
          ctx.arc(city.x, city.y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = 'rgba(255, 255, 100, 0.8)';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(city.x, city.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        ctx.restore();

        // Draw satellites
        const satelliteAngle = rotationRef.current * 2;
        const satellite1X = 200 + Math.cos(satelliteAngle) * 190;
        const satellite1Y = 200 + Math.sin(satelliteAngle) * 190;
        const satellite2X = 200 + Math.cos(satelliteAngle + Math.PI) * 190;
        const satellite2Y = 200 + Math.sin(satelliteAngle + Math.PI) * 190;

        // Satellite 1
        ctx.fillStyle = 'rgba(200, 200, 200, 0.9)';
        ctx.fillRect(satellite1X - 4, satellite1Y - 4, 8, 8);
        
        // Satellite trail
        ctx.strokeStyle = 'rgba(100, 200, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(satellite1X, satellite1Y);
        ctx.lineTo(200, 200);
        ctx.stroke();

        // Satellite 2
        ctx.fillStyle = 'rgba(200, 200, 200, 0.9)';
        ctx.fillRect(satellite2X - 4, satellite2Y - 4, 8, 8);
        
        // Satellite trail
        ctx.strokeStyle = 'rgba(0, 255, 170, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(satellite2X, satellite2Y);
        ctx.lineTo(200, 200);
        ctx.stroke();

        // Update rotation
        rotationRef.current += 0.005;

        requestAnimationFrame(animate);
      };

      animate();
    };

    const handleImageLoad = () => {
      imagesLoaded++;
      startAnimation();
    };

    earthImg.onload = handleImageLoad;
    cloudsImg.onload = handleImageLoad;
    
    // Fallback to start animation without images
    setTimeout(startAnimation, 500);

    // earthImg.src = earthTexture;
    // cloudsImg.src = earthClouds;

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(100, 200, 255, 0.3))' }}
      />
      
      {/* Atmospheric glow overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      
      {/* Space particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}