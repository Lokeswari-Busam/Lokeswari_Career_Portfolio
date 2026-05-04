import { motion } from 'framer-motion'
import { Bug, CheckCircle, Lightbulb, Users, Focus, Zap, Handshake } from 'lucide-react'

const roles = [
  {
    title: 'Developer',
    icon: CodeIcon, // Custom or reused
    description: 'Built frontend screens, backend APIs, and integrated databases.',
    color: 'from-blue-500/20 to-blue-500/5',
    text: 'text-blue-400'
  },
  {
    title: 'Debugger',
    icon: Bug,
    description: 'Resolved API and UI issues across live projects seamlessly.',
    color: 'from-red-500/20 to-red-500/5',
    text: 'text-red-400'
  },
  {
    title: 'Tester',
    icon: CheckCircle,
    description: 'Supported validation workflows ensuring high-quality delivery.',
    color: 'from-green-500/20 to-green-500/5',
    text: 'text-green-400'
  },
  {
    title: 'Problem Solver',
    icon: Lightbulb,
    description: 'Improved system performance & resolved production issues.',
    color: 'from-amber-500/20 to-amber-500/5',
    text: 'text-amber-400'
  }
]

const behaviors = [
  { title: "Ownership", desc: "Taking independent responsibility for end-to-end task delivery.", icon: Focus },
  { title: "Adaptability", desc: "Learning new tools rapidly and applying them effectively.", icon: Zap },
  { title: "Communication", desc: "Cross-team collaboration with minimal supervision.", icon: Handshake },
]

function CodeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  )
}

export default function Growth() {
  return (
    <section id="growth" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Roles & <span className="text-brand-400">Growth</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A look into the hats I wore and my professional behavioral evolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-b ${role.color} border border-slate-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <role.icon className={`w-8 h-8 ${role.text} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-slate-300 text-sm">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Behavioral Growth */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>
           <h3 className="text-2xl font-bold text-white mb-8">Professional Evolution</h3>
           <div className="grid md:grid-cols-3 gap-8">
              {behaviors.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
