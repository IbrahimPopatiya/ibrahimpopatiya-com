'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  BookOpen, 
  User, 
  Mail,
  Sparkles 
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className={cn(
          'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
          scrolled && 'top-4'
        )}
      >
        <div className={cn(
          'relative rounded-3xl overflow-hidden transition-all duration-500',
          'border border-[var(--glass-border)]',
          scrolled ? 'shadow-[var(--shadow-strong)]' : 'shadow-[var(--shadow-medium)]'
        )}>
          {/* Animated gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--neon-blue)]/5 via-[var(--neon-purple)]/5 to-[var(--neon-pink)]/5 opacity-50" />
          <div className="absolute inset-0 rounded-3xl glass-strong" />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '50%',
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative flex items-center gap-2 px-6 py-3">
            {/* Logo/Brand */}
            <Link href="/" className="hidden md:flex items-center gap-2 mr-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--neon-purple)] rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--neon-purple)] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-bold text-sm bg-gradient-to-r from-[var(--accent)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                FP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => { 
                const Icon = link.icon;
                const isActive = pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative"
                  >
                    <motion.div
                      className={cn(
                        'relative flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300',
                        'font-medium text-sm',
                        isActive
                          ? 'text-[var(--accent)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active/Hover background */}
                      {(isActive || hoveredIndex === index) && (
                        <motion.div
                          layoutId={isActive ? "navbar-active-bg" : "navbar-hover-bg"}
                          className={cn(
                            'absolute inset-0 rounded-2xl',
                            isActive 
                              ? 'bg-gradient-to-r from-[var(--accent)]/10 via-[var(--neon-purple)]/10 to-[var(--accent)]/10 border border-[var(--accent)]/20' 
                              : 'bg-[var(--bg-secondary)]/50'
                          )}
                          transition={{ 
                            type: "spring", 
                            bounce: 0.2, 
                            duration: 0.6 
                          }}
                        />
                      )}
                      
                      {/* Icon with animation */}
                      <motion.div
                        animate={{
                          rotate: isActive ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className={cn(
                          'w-4 h-4 relative z-10 transition-colors duration-300',
                          isActive && 'text-[var(--accent)]'
                        )} />
                      </motion.div>
                      
                      {/* Label */}
                      <span className="relative z-10">{link.label}</span>

                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)]"
                          transition={{ 
                            type: "spring", 
                            bounce: 0.2, 
                            duration: 0.6 
                          }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-[var(--border)] mx-2" />

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'relative p-2.5 rounded-xl overflow-hidden',
                'transition-all duration-300 group'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 rounded-xl bg-[var(--bg-secondary)]/50 group-hover:bg-gradient-to-br group-hover:from-[var(--accent)]/10 group-hover:to-[var(--neon-purple)]/10 transition-all duration-300" />
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                className="relative"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[var(--accent)]" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--accent)]" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-xl bg-[var(--bg-secondary)]/50" />
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-[var(--accent)]" />
                ) : (
                  <Menu className="w-4 h-4 text-[var(--accent)]" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[var(--glass-border)] shadow-[var(--shadow-strong)]">
            {/* Background */}
            <div className="absolute inset-0 rounded-3xl glass-strong" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--neon-blue)]/5 via-[var(--neon-purple)]/5 to-[var(--neon-pink)]/5" />
            
            <div className="relative p-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'relative flex items-center gap-3 p-4 rounded-2xl transition-all duration-300',
                          'font-medium',
                          isActive
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--text-secondary)]'
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="mobile-menu-active"
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--accent)]/10 via-[var(--neon-purple)]/10 to-[var(--accent)]/10 border border-[var(--accent)]/20"
                            transition={{ 
                              type: "spring", 
                              bounce: 0.2, 
                              duration: 0.6 
                            }}
                          />
                        )}
                        <Icon className={cn(
                          'w-5 h-5 relative z-10',
                          isActive && 'text-[var(--accent)]'
                        )} />
                        <span className="relative z-10">{link.label}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-[var(--accent)] relative z-10"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
