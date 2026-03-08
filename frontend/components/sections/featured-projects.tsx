import { FadeInUp } from '@/components/animations/reveal';
import { ProjectCard } from '@/components/cards/project-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <SectionWrapper id="projects" variant="secondary">
      <FadeInUp>
        <div className="text-center mb-16">
          <h2 className="mb-4">{siteConfig.sections.featuredProjects.title}</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            {siteConfig.sections.featuredProjects.description}
          </p>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <FadeInUp key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </FadeInUp>
        ))}
      </div>

      <FadeInUp delay={0.4}>
        <div className="text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="gap-2 group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </FadeInUp>
    </SectionWrapper>
  );
}
