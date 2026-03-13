"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, PlayCircle, FileText, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '@/lib/translations';

export default function TestimonialsSection() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const isRtl = dir === "rtl";
  const testimonialsData = t.testimonials.data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'video' | 'website'>('video');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const openModal = (mode: 'video' | 'website') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="relative py-32 bg-[#292931] text-white overflow-hidden" dir={dir}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#308C8C]/[0.08] via-[#308C8C]/[0.05] to-[#292931]/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />

        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#308C8C]/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#308C8C]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${25 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-[#308C8C]" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              {t.testimonials.badge}
            </span>
            <div className="w-2 h-2 bg-[#308C8C] rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {t.testimonials.title}
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#308C8C] via-[#308C8C]/60 to-[#308C8C]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              {t.testimonials.titleAccent}
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {t.testimonials.description}
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16 perspective-[2000px]">
          <div className="relative h-[550px] md:h-[450px]" style={{ transformStyle: 'preserve-3d' }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotateY: { type: "spring", stiffness: 100, damping: 20 }
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
              >
                <div className="relative h-full premium-card rounded-3xl p-10 md:p-16 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {/* Glowing orbital edge */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,rgba(48,140,140,0.3),transparent_50%)] pointer-events-none" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#308C8C]/[0.15] via-transparent to-[#292931]/[0.1] rounded-3xl"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '300% 300%'
                    }}
                  />

                  <div className="relative z-10 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex-shrink-0 text-center lg:text-start mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                          {testimonialsData[currentIndex].name}
                        </h3>
                        <p className="text-[#308C8C] text-lg md:text-xl font-semibold opacity-90">
                          {testimonialsData[currentIndex].role}
                        </p>
                      </div>

                      <div className="relative">
                        {/* Decorative quote mark */}
                        <div className={`absolute -top-6 ${isRtl ? '-right-4' : '-left-4'} text-7xl text-[#308C8C]/10 font-serif leading-none select-none`}>
                          {isRtl ? '”' : '“'}
                        </div>
                        <motion.blockquote
                          className={`text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-light italic ${isRtl ? 'pr-8' : 'pl-8'}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        >
                          {testimonialsData[currentIndex].text}
                        </motion.blockquote>

                        {/* Results */}
                        <div className="grid grid-cols-1 gap-4 mb-10">
                          {testimonialsData[currentIndex].results.map((result: string, i: number) => (
                            <motion.div
                              key={i}
                              className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.08] backdrop-blur-sm flex items-center gap-4 transition-colors hover:bg-white/[0.06]"
                              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#308C8C] shadow-[0_0_10px_rgba(48,140,140,0.5)]" />
                              <span className="text-sm md:text-base text-white/70 font-medium">
                                {result}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                          className="flex flex-wrap items-center gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        >
                          <motion.button
                            onClick={() => openModal('website')}
                            className="flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[#308C8C] text-white font-bold transition-all shadow-lg shadow-[#308C8C]/20 w-full sm:w-auto hover:bg-[#409a9a] hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <Sparkles className="w-5 h-5 text-cyan-200" />
                            <span className="whitespace-nowrap">{t.testimonials.learnMore}</span>
                          </motion.button>
                          <motion.button
                            onClick={() => openModal('website')}
                            className="flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] text-white font-semibold transition-all border border-white/10 w-full sm:w-auto hover:bg-white/[0.1] hover:border-white/20 active:scale-[0.98]"
                          >
                            <FileText className="w-5 h-5 text-white/60" />
                            <span className="whitespace-nowrap">{t.testimonials.viewCaseStudy}</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Video Column */}
                    <div className="flex-1 w-full lg:w-1/2 aspect-video lg:aspect-square xl:aspect-video">
                      <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/video bg-black/40">
                        <iframe
                          src={testimonialsData[currentIndex].iframe}
                          title={`${testimonialsData[currentIndex].name} Video`}
                          className="absolute inset-0 w-full h-full z-10"
                          allowFullScreen
                          frameBorder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              {isRtl ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </motion.button>

            {/* Progress Bar Indicator */}
            <div className="flex gap-2 flex-1 max-w-xs">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden relative cursor-pointer"
                >
                  {index === currentIndex && (
                    <motion.div
                      className={`absolute inset-y-0 ${isRtl ? 'right-0' : 'left-0'} bg-[#308C8C] rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                      key={`progress-${currentIndex}`}
                    />
                  )}
                  {index < currentIndex && (
                    <div className="absolute inset-0 bg-[#308C8C]/50 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

      </motion.div>

      {/* Enhanced Modal (Video & Website Support) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full h-full max-w-6xl bg-[#292931] rounded-3xl shadow-2xl overflow-hidden border border-white/10 ${modalMode === 'video' ? 'aspect-video max-h-[80vh]' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {modalMode === 'video' ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={testimonialsData[currentIndex].iframe || "https://www.youtube.com/embed/YOUR_VIDEO_ID"}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col">
                  {/* Iframe Header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-background/50 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="text-sm font-medium text-white/40 truncate max-w-[200px] md:max-w-md bg-white/5 px-4 py-1 rounded-full border border-white/5">
                        exefai.sa{testimonialsData[currentIndex].url}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setModalMode('video')}
                        className="text-xs font-bold text-primary hover:underline"
                      >
                        {isRtl ? 'شاهد الفيديو بدلاً من ذلك' : 'Watch video instead'}
                      </button>
                    </div>
                  </div>
                  {/* The actual product page iframe */}
                  <iframe
                    src={testimonialsData[currentIndex].url}
                    className="flex-1 w-full border-none bg-background"
                    title="Product Preview"
                  />
                </div>
              )}

              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[60]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
