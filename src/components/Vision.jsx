import { motion } from 'framer-motion'
import { Rocket, Layers, Globe } from 'lucide-react'

const visions = [
  { icon: Layers, title: 'Deepening Full-Stack Expertise', desc: 'Mastering advanced architectures and optimizing full-stack flow.' },
  { icon: Rocket, title: 'Advancing into AI', desc: 'Integrating intelligent AI-driven solutions into practical business tools.' },
  { icon: Globe, title: 'Enterprise-Scale Projects', desc: 'Taking on larger, more complex systems with high impact.' }
]

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-slate-950 relative border-t border-slate-800/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6 inline-block">
            Looking Forward
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Future <span className="text-brand-400">Vision</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            This year, I successfully transitioned into a production-ready engineer. I am excited to continue growing and adding greater value to Paves Technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {visions.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-brand-500/30 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                <v.icon className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-slate-900/50 backdrop-blur border border-slate-800 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Thank You</h3>
        </motion.div>
      </div>
    </section>
  )
}
