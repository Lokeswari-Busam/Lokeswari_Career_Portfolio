import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Before and After <span className="text-brand-400">Paves</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A reflection of the technical and professional transformation over the past year.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
           
           {/* Visual connection line between the two boxes on desktop */}
           <div className="hidden md:block absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-slate-700 z-0"></div>

           {/* BEFORE PAVES */}
           <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 p-10 rounded-3xl relative z-10"
           >
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 text-slate-400">
                  <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Before Joining Paves</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                My knowledge was mostly theoretical, rooted in academic settings. I had a foundational understanding of programming concepts and algorithms but lacked exposure to real-time enterprise systems, large-scale architectures, and agile methodologies. 
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full font-medium">Academic Theory</span>
                 <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full font-medium">Basic Coding</span>
                 <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full font-medium">Limited Production Exp</span>
              </div>
           </motion.div>

           {/* AFTER PAVES */}
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-900/40 to-slate-900 border border-brand-500/30 p-10 rounded-3xl relative z-10 shadow-2xl shadow-brand-500/5 glow"
           >
              <div className="w-14 h-14 bg-brand-500 text-white shadow-lg shadow-brand-500/30 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Today, After One Year</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                 I am a confident, production-ready full-stack engineer. I am capable of designing, building, and deploying enterprise-grade applications. I work seamlessly across frontend, backend, databases, and DevOps tools to deliver robust software solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-brand-500/20 border border-brand-500/20 text-brand-300 text-xs rounded-full font-medium hover:bg-brand-500/30 transition-colors">Production-Ready</span>
                 <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 text-cyan-300 text-xs rounded-full font-medium hover:bg-cyan-500/30 transition-colors">Full-Stack Delivery</span>
                 <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/20 text-blue-300 text-xs rounded-full font-medium hover:bg-blue-500/30 transition-colors">Agile Workflows</span>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  )
}
