import { Metadata } from 'next';
import Image from 'next/image';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Brain, Cpu, Database, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `About - ${siteConfig.personal.title}`,
  description: siteConfig.personal.longBio,
};

const timeline = siteConfig.experience;

const values = [
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Pushing boundaries with cutting-edge LLMs and GenAI technologies',
  },
  {
    icon: Cpu,
    title: 'Production ML',
    description: 'Building scalable, reliable ML systems that deliver real business value',
  },
  {
    icon: Database,
    title: 'Data Quality',
    description: 'Ensuring high-quality training data and robust evaluation frameworks',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing ML models for speed, cost, and accuracy in production',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--bg-tertiary)]">
                <Image
                  src={siteConfig.personal.avatar}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Intro */}
              <div>
                <h1 className="mb-6">About Me</h1>
                <p className="text-xl text-[var(--text-secondary)] mb-6">
                  {siteConfig.personal.longBio}
                </p>
                <p className="text-lg text-[var(--text-secondary)]">
                  {siteConfig.personal.extendedBio}
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="secondary">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="mb-4">What I Value</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Principles that guide my work and decision-making
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <FadeInUp key={value.title} delay={index * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)]">{value.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="mb-4">My Journey</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Professional experience and education
            </p>
          </div>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="relative pl-8 pb-12 border-l-2 border-[var(--border)] last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-primary)]" />
                <div className="mb-1 text-sm font-medium text-[var(--accent)]">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                <div className="text-[var(--text-muted)] mb-2">{item.company}</div>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
