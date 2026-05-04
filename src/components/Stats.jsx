import { motion } from 'framer-motion'
import { FolderCheck, Cpu, Calendar, Target } from 'lucide-react'

const stats = [
  { label: 'Major Projects', value: '4+', icon: FolderCheck },
  { label: 'Technologies', value: '10+', icon: Cpu },
  { label: 'Months Training', value: '3', icon: Calendar },
  { label: 'Core Domains', value: '5', icon: Target },
]

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-slate-900 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Measuring <span className="text-brand-400">Progress</span></h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              In one year, my progress has been measurable and impactful. These numbers reflect an 
              accelerated growth journey from theoretical exposure to production-ready enterprise systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-500/10 rounded-xl">
                    <stat.icon className="w-6 h-6 text-brand-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
