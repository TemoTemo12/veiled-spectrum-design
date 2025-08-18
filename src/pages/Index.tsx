import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 backdrop-mystery">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gradient text-2xl font-bold"
            >
              SPECTRUM
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center md:text-right"
            >
              <p className="mb-2">Crafting the future, one pixel at a time.</p>
              <p className="text-sm opacity-70">© 2024. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;