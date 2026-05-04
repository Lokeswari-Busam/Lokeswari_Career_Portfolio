import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, ShieldAlert, Zap, Layers, RefreshCw } from 'lucide-react'

const challenges = [
  {
    title: 'API Integration Complexity',
    problem:'Handling inconsistent APIs and authentication issues.',
    resolution: 'Built reusable services with error handling and token management.',
    iconP: AlertCircle,
    iconR: ShieldAlert,
    color: 'amber'
  },
  {
    title: 'Data Consistency Issues',
    problem: 'Keeping data consistent across services and UI',
    resolution: 'Used transactions and validations to maintain data accuracy',
    iconP: Layers,
    iconR: CheckCircle2,
    color: 'rose'
  },
  {
    title: 'Complex UI State Handling',
    problem: 'Managing complex form state and dynamic UI behavior.',
    resolution: 'Used React context and hooks for better state control.',
    iconP: RefreshCw,
    iconR: Zap,
    color: 'cyan'
  }
]

export default function Challenges() {
  return (
    <section id="challenges" className="py-24 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 inline-block">
            From Blocker to Breakthrough
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Challenges <span className="text-purple-400">Overcome</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Strategic resolutions to the technical hurdles faced during enterprise application development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {challenges.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">{item.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Visual Connector on desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-950 border border-slate-800 text-slate-500 z-10">
                   ➔
                </div>

                {/* Blocker (Problem) */}
                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg">
                         <item.iconP size={20} />
                      </div>
                      <h4 className="font-semibold text-rose-300">The Challenge</h4>
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed">{item.problem}</p>
                </div>

                {/* Breakthrough (Resolution) */}
                <div className={`bg-gradient-to-br from-${item.color}-500/5 to-transparent rounded-2xl p-6 border border-${item.color}-500/20`}>
                   <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-${item.color}-500/10 text-${item.color}-400 rounded-lg`}>
                         <item.iconR size={20} />
                      </div>
                      <h4 className={`font-semibold text-${item.color}-300`}>The Resolution</h4>
                   </div>
                   <p className="text-slate-300 text-sm leading-relaxed">{item.resolution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
