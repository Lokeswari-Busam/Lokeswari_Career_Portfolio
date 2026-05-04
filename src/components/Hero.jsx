import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="journey" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-950 to-slate-950"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-4"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-5 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-8 inline-block backdrop-blur-sm"
        >
          Graduate Software Engineer • Annual Appraisal
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
        >
          My One-Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Journey</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          From theoretical knowledge to a confident full-stack engineer. This year has been a transformative experience contributing to real-time enterprise projects at Paves Technologies.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.8 }}
        >
           <a 
            href="#skills" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-950 bg-gradient-to-r from-brand-400 to-cyan-400 rounded-full hover:from-brand-300 hover:to-cyan-300 transition-all shadow-lg shadow-brand-500/25"
          >
            Explore My Growth
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
