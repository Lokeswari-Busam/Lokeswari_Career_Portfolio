import { motion } from 'framer-motion'
import { Target, Heart, Award, Users, Rocket, Lightbulb, ShieldCheck, RefreshCw } from 'lucide-react'

const impact = [
  {
    title: 'Full-Stack Competence',
    desc: 'Grew from zero real-world experience to delivering complete enterprise applications independently.',
    icon: CodeIcon
  },
  {
    title: 'Team Contribution',
    desc: 'Became a reliable team member who delivers quality code, meets deadlines and communicates proactively.',
    icon: Users
  },
  {
    title: 'Problem-Solving Mindset',
    desc: 'Developed engineering instincts to debug, design, and deliver solutions with growing independence.',
    icon: Target
  }
]

const roadmap = [
  'Deep Dive into System Design and Architecture patterns',
  'Expand expertise in Microservices and Docker/Kubernetes',
  'Contribute to Larger Projects',
  'Build deeper AI/ML integration skills for enterprise apps',
  'Achieve AWS Cloud Practitioner certification'
]

const nonTechImpact = [

  {
    title: 'Responsibility & Reliability',
    icon: ShieldCheck
  },
  {
    title: 'Adaptability',
    icon: RefreshCw
  },
  {
    title: 'Team Collaboration',
    icon: Users
  },
]

const nonTechRoadmap = [
  'Take more initiative in team discussions and decision-making',
  'Strengthen leadership qualities and ownership in tasks',
  'Contribute towards mentoring or supporting new team members'
]

function CodeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  )
}

export default function Reflections() {
  return (
    <section id="reflections" className="py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-6 inline-block">
            Impact of Year One · What's Next
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Reflections & <span className="text-brand-400">Future Goals</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* IMPACT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-brand-400" />
              This Year's Impact
            </h3>
            <div className="space-y-6">
              {impact.map((item, i) => (
                <div key={item.title} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex gap-4 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-brand-500/10 text-brand-400 rounded-xl h-fit w-fit flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ROADMAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold font-mono text-lg"><Rocket className="text-brand-400" /></span>
              What's Next · Roadmap
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800/50"></div>
              <div className="space-y-8">
                {roadmap.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center font-mono font-bold text-slate-300">
                      {i + 1}
                    </div>
                    <div className="pt-3">
                      <p className="text-slate-200 font-medium leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* NON-TECHNICAL GROWTH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6 inline-block">
            Beyond the Code
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Reflections & <span className="text-emerald-400">Future Goals</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* NON-TECH IMPACT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              This Year's Impact
            </h3>
            <div className="space-y-6">
              {nonTechImpact.map((item, i) => (
                <div key={item.title} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NON-TECH ROADMAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              What's Next · Roadmap
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800/50"></div>
              <div className="space-y-8">
                {nonTechRoadmap.map((step, i) => (
                  <div key={i} className="group relative flex items-start gap-6">
                    <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-2xl bg-slate-950 border border-slate-800 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/40 flex items-center justify-center font-mono font-bold text-slate-400 group-hover:text-emerald-400 group-hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] transition-all duration-300">
                      {i + 1}
                    </div>
                    <div className="pt-3 pb-2 w-full border-b border-transparent group-hover:border-slate-800 transition-colors duration-300">
                      <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* YEAR OF GRATITUDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">A Year of Gratitude</h3>
            <p className="text-slate-400">To the People Who Made This Year Meaningful</p>
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-slate-950/50 border border-slate-800 rounded-2xl">
              <p className="text-xl text-slate-300 font-medium italic">
                "The best investment you can make is in yourself — and this year, Paves gave me that opportunity."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-rose-500/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3 text-rose-400">Paves Technologies</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                For trusting a fresher with real enterprise projects and giving me a platform to grow and prove myself.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3 text-amber-400">Mentors & Team Leads</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                For patient guidance, constructive feedback, and always making time to unblock me when I needed direction.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3 text-cyan-400">My Colleagues</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                For the collaborative spirit, knowledge sharing, and making every working day an opportunity to learn something new.
              </p>
            </div>
          </div>
        </motion.div>

        {/* THANK YOU */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 drop-shadow-2xl">THANK YOU</h1>
        </motion.div>

      </div>
    </section>
  )
}
