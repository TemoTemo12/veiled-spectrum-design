import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Globe, Layers, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Cutting-edge web applications built with the latest technologies and best practices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Intuitive interfaces that blend aesthetics with functionality for optimal user experience.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lightning-fast solutions optimized for speed, scalability, and seamless performance.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Architecture",
      description: "Robust system architecture designed for growth, security, and maintainability.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Innovation",
      description: "Pioneering solutions leveraging AI, machine learning, and emerging technologies.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="mystery-glow group bg-card/50 backdrop-mystery border-mystery hover:bg-card/70 transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;