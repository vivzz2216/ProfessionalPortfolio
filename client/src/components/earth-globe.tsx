import earthImage from '@assets/TERRE_baseColor_1752098060612.jpeg';

export default function EarthGlobe() {
  return (
    <div className="relative w-96 h-96 mx-auto">
      <div className="relative w-full h-full">
        {/* Hero-style atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 via-portfolio-accent/10 to-portfolio-primary/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Earth image with enhanced styling */}
        <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl animate-spin" style={{ animationDuration: '60s' }}>
          <img 
            src={earthImage} 
            alt="Earth" 
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-transparent to-portfolio-accent/10 rounded-full"></div>
        </div>
        
        {/* Simplified orbital rings - no circles beside earth */}
        
        {/* Clean atmosphere glow - no extra elements */}
        <div className="absolute inset-0 rounded-full bg-portfolio-primary/10 blur-xl animate-pulse"></div>
      </div>
    </div>
  );
}