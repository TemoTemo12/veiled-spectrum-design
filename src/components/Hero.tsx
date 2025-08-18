import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
          
          <FloatingGeometry position={[-3, 2, -2]} color="#00d4ff" type="octahedron" speed={0.8} />
          <FloatingGeometry position={[3, -1, -1]} color="#8b5cf6" type="torus" speed={0.6} />
          <FloatingGeometry position={[-2, -2, -3]} color="#00d4ff" type="sphere" scale={0.8} speed={1.2} />
          <FloatingGeometry position={[2, 2, -2]} color="#8b5cf6" type="box" scale={0.6} speed={0.9} />
          <FloatingGeometry position={[0, -3, -4]} color="#00d4ff" type="octahedron" scale={1.2} speed={0.7} />
          
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-text text-gradient mb-8">
            Beyond
            <br />
            <span className="text-foreground">Boundaries</span>
          </h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Crafting digital experiences that transcend the ordinary.
            Where innovation meets artistry.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="mystery-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-electric"
              onClick={scrollToNext}
            >
              Explore Our Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-lg backdrop-mystery"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <ChevronDown 
            className="w-8 h-8 text-muted-foreground animate-bounce cursor-pointer hover:text-primary transition-colors"
            onClick={scrollToNext}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;