import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Neural Interface",
      category: "AI • Machine Learning",
      description: "Advanced neural network interface for real-time data processing and pattern recognition.",
      image: "bg-gradient-to-br from-primary/20 to-accent/20",
      tech: ["TensorFlow", "React", "Python", "WebGL"],
    },
    {
      title: "Quantum Dashboard",
      category: "Data Visualization",
      description: "Real-time quantum computing dashboard with interactive 3D visualizations.",
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
      tech: ["Three.js", "D3.js", "TypeScript", "WebAssembly"],
    },
    {
      title: "Cipher Protocol",
      category: "Blockchain • Security",
      description: "Decentralized encryption protocol with advanced cryptographic algorithms.",
      image: "bg-gradient-to-br from-primary/30 to-void",
      tech: ["Solidity", "Web3", "Rust", "IPFS"],
    },
    {
      title: "Nexus Platform",
      category: "Enterprise • SaaS",
      description: "Unified enterprise platform connecting distributed teams and workflows.",
      image: "bg-gradient-to-br from-accent/30 to-secondary",
      tech: ["Node.js", "GraphQL", "Kubernetes", "MongoDB"],
    },
    {
      title: "Void Engine",
      category: "Game Development",
      description: "High-performance 3D game engine with advanced rendering capabilities.",
      image: "bg-gradient-to-br from-primary/25 to-accent/25",
      tech: ["C++", "Vulkan", "OpenGL", "HLSL"],
    },
    {
      title: "Echo System",
      category: "IoT • Automation",
      description: "Intelligent IoT ecosystem for smart home and industrial automation.",
      image: "bg-gradient-to-br from-accent/20 to-primary/30",
      tech: ["Embedded C", "MQTT", "Edge AI", "5G"],
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that push the boundaries of technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="mystery-glow group bg-card/30 backdrop-mystery border-mystery overflow-hidden hover:bg-card/50 transition-all duration-500">
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="text-primary/80 text-sm font-medium tracking-wide mb-2">
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;