'use client';

import { useState } from 'react';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Cpu, 
  Code2, 
  Sparkles, 
  Network,
  ArrowUpRight 
} from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Large Language Models',
    description: 'Fine-tuning, prompt engineering, and deploying GPT, Claude, Llama models',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'neon-blue',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Building RAG systems, chatbots, and AI-powered applications',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'neon-purple',
  },
  {
    icon: Code2,
    title: 'Python Development',
    description: 'Expert in Python, FastAPI, Django, and ML frameworks like PyTorch & TensorFlow',
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'accent',
  },
  {
    icon: Database,
    title: 'Vector Databases',
    description: 'Working with Pinecone, Weaviate, ChromaDB for semantic search & embeddings',
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'neon-pink',
  },
  {
    icon: Cpu,
    title: 'ML Engineering',
    description: 'Model training, optimization, deployment, and MLOps best practices',
    gradient: 'from-indigo-500 to-purple-500',
    glowColor: 'neon-purple',
  },
  {
    icon: Network,
    title: 'AI Infrastructure',
    description: 'Building scalable AI systems with AWS, Azure, and containerization',
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'neon-blue',
  },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="skills">
      <FadeInUp>
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--accent)]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">Skills & Expertise</span>
          </motion.div>
          
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
              AI & ML Expertise
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Specialized in cutting-edge AI technologies, from LLMs to production ML systems
          </p>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <FadeInUp key={skill.title} delay={index * 0.1}>
            <motion.div
              className="relative group h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Container */}
              <div className="relative p-8 rounded-3xl h-full backdrop-blur-xl overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--glass-border)] to-transparent" />
                <div className="absolute inset-[1px] rounded-3xl glass" />
                
                {/* Hover Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--${skill.glowColor})/20, transparent)`,
                    filter: 'blur(20px)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <motion.div
                      className="inline-flex p-4 rounded-2xl relative"
                      animate={hoveredIndex === index ? {
                        rotate: [0, -5, 5, -5, 0],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon Background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] opacity-50" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      
                      {/* Icon Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                      />
                      
                      <skill.icon className={`w-8 h-8 text-[var(--accent)] relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    </motion.div>

                    {/* Decorative Dot */}
                    <motion.div
                      className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[var(--accent)]"
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                        opacity: hoveredIndex === index ? [0.5, 1, 0.5] : 0.5,
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredIndex === index ? Infinity : 0,
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2">
                    {skill.title}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Floating Particles on Hover */}
              {hoveredIndex === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 20}%`,
                      }}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [-20, -40, -60],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </FadeInUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
