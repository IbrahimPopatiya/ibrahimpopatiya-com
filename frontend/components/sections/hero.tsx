'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code2, 
  Brain,
  Rocket,
  Star 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]"
      />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-50">
        <motion.div 
          className="absolute top-0 -left-4 w-96 h-96 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-0 -right-4 w-96 h-96 bg-[var(--neon-purple)] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-96 h-96 bg-[var(--neon-pink)] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[
          { Icon: Brain, delay: 0, duration: 20, x: '10%', y: '20%' },
          { Icon: Code2, delay: 2, duration: 25, x: '80%', y: '30%' },
          { Icon: Zap, delay: 1, duration: 18, x: '70%', y: '70%' },
          { Icon: Rocket, delay: 3, duration: 22, x: '20%', y: '80%' },
          { Icon: Star, delay: 1.5, duration: 24, x: '90%', y: '60%' },
          { Icon: Sparkles, delay: 0.5, duration: 19, x: '15%', y: '50%' },
        ].map(({ Icon, delay, duration, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 text-[var(--accent)]" />
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
        className="relative container mx-auto px-4 md:px-6 max-w-[var(--max-width)] z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)]/10 via-[var(--neon-purple)]/10 to-[var(--neon-pink)]/10 border border-[var(--accent)]/20" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)]/5 via-[var(--neon-purple)]/5 to-[var(--neon-pink)]/5 backdrop-blur-xl" />
              
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-5 h-5 text-[var(--accent)] relative z-10" />
              </motion.div>
              
              <span className="text-sm font-medium text-[var(--text-primary)] relative z-10">
                Available for new AI/ML projects
              </span>
              
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500 relative z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="relative">
              <motion.span 
                className="block text-[var(--text-primary)] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building Intelligent
              </motion.span>
              
              <motion.span 
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="relative z-10 block bg-gradient-to-r from-[var(--accent)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent font-bold">
                  AI Solutions
                </span>
                
                {/* 3D Shadow Effect */}
                <span 
                  className="absolute top-1 left-1 block bg-gradient-to-r from-[var(--accent)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-pink)]/20 bg-clip-text text-transparent font-bold blur-sm"
                  aria-hidden="true"
                >
                  AI Solutions
                </span>
              </motion.span>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Zap className="w-full h-full text-[var(--accent)] opacity-20" />
              </motion.div>
            </h1>
          </motion.div>

          {/* Description with Enhanced Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-[var(--text-primary)]">AI/ML Engineer</span> with{' '}
            <span className="text-[var(--accent)]">3+ years</span> of experience in Python development, 
            specializing in{' '}
            <span className="relative inline-block">
              <span className="relative z-10">GenAI, LLMs,</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--neon-purple)] opacity-30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            {' '}and building production-grade machine learning systems
          </motion.p>

          {/* CTAs with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="lg" className="gap-2 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    View AI Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="lg" className="gap-2 relative group">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats with Enhanced Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: 'Years in AI/ML', value: '3+', icon: Brain, color: 'neon-blue' },
              { label: 'LLM Projects', value: '20+', icon: Sparkles, color: 'neon-purple' },
              { label: 'Models Deployed', value: '15+', icon: Rocket, color: 'neon-pink' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] opacity-50" />
                    <div className="absolute inset-0 backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl" />
                    
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-[var(--${stat.color})]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--accent)]/10 to-transparent">
                          <Icon className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                      </div>
                      
                      <motion.div 
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--neon-purple)] bg-clip-text text-transparent mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      
                      <div className="text-xs md:text-sm text-[var(--text-muted)] font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative group cursor-pointer"
        >
          <div className="w-8 h-12 rounded-full border-2 border-[var(--accent)]/30 flex items-start justify-center p-2 backdrop-blur-sm">
            <motion.div
              animate={{ 
                y: [0, 16, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
            />
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-[var(--text-muted)] mt-3 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
}
