import { motion } from 'framer-motion'
import { Server, TrendingUp, Lightbulb } from 'lucide-react'

export default function Identity() {
  return (
    <section id="identity" className="py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-6 inline-block tracking-widest uppercase">
            Graduate Software Engineer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Professional <span className="text-brand-400">Identity</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Strengthened technical expertise to become a capable full-stack engineer at Paves Technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-brand-500/30 transition-colors"
          >
            <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Technical Foundation</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-blue-400">▹</span>
                Worked with Java, Python, JavaScript, React, FastAPI, and Spring Boot.
              </li>
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-blue-400">▹</span>
                Built reliable software for real-world enterprise use cases.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors"
          >
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Growth Areas</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-emerald-400">▹</span>
                Improved skills in full-stack development, APIs, and databases.
              </li>
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-emerald-400">▹</span>
                Gained practical knowledge in Data & AI through active project work.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/30 transition-colors"
          >
            <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Professional Approach</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-amber-400">▹</span>
                Show initiative and adapt rapidly to new frameworks and challenges.
              </li>
              <li className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-amber-400">▹</span>
                Solve problems effectively and consistently deliver practical results.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
