import { useEffect, useState, useRef } from "react";
import { Zap, Clock, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: 50,
    suffix: "+",
    label: "Automations Built",
    description: "Custom workflows deployed"
  },
  {
    icon: Clock,
    value: 10000,
    suffix: "+",
    label: "Hours Saved",
    description: "For clients worldwide"
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Efficiency Boost",
    description: "Average improvement"
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star reviews"
  },
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);
  
  return count;
}

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div
      className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 text-center"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <stat.icon className="w-8 h-8 text-primary" />
      </div>

      {/* Value */}
      <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm">
        {stat.description}
      </p>

      {/* Decorative corner */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Results That <span className="text-gradient">Speak</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real numbers from real automation projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
