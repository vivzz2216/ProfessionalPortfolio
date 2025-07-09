import earthImage from '@assets/11371425_1752099046446.png';

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
        
        {/* Hero-style orbital rings */}
        <div className="absolute inset-0 rounded-full border-2 border-portfolio-primary/30 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full border border-portfolio-accent/20 animate-pulse delay-500"></div>
        <div className="absolute inset-8 rounded-full border border-portfolio-primary/15 animate-pulse delay-1000"></div>
        
        {/* Enhanced satellite orbits */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute -top-4 left-1/2 w-4 h-4 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-sm transform -translate-x-1/2 shadow-lg shadow-portfolio-accent/50"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
          <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-sm transform -translate-x-1/2 shadow-lg shadow-portfolio-primary/50"></div>
        </div>
        
        {/* Hero-style outer atmosphere */}
        <div className="absolute inset-0 rounded-full bg-portfolio-primary/10 blur-xl animate-pulse"></div>
        <div className="absolute inset-4 rounded-full bg-portfolio-accent/5 blur-lg animate-pulse delay-700"></div>
        
        {/* Communication lines */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-portfolio-accent/60 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-portfolio-primary/60 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
}