import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleViewProjects = () => {
    toast({
      title: "Projects Coming Soon!",
      description: "My portfolio projects will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
          Messoudi
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide">
          Frontend Developer & UI Enthusiast
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="lg"
          onClick={handleViewProjects}
          className="text-lg px-8 py-6 font-semibold"
        >
          View My Projects
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;