import { motion } from 'framer-motion'

const timeline = [
  {
    phase: 'Phase 1: Foundation   [May 2025 – July 2025]',
    title: 'Training & Upskilling',
    desc: '3 months building strong foundations in Python programming, AI/ML concepts, EDA, and structured problem solving.',
    tags: ['Python', 'AI/ML', 'Data Analysis']
  },
  {
    phase: 'Phase 2: First Execution   [July 2025 – October 2025]',
    title: 'Timesheet Management System',
    desc: 'Developed screens, APIs, and workflow validations for internal resource tracking.',
    tags: ['React', 'Spring Boot', 'MySQL']
  },
  {
    phase: 'Phase 3: Web Presence   [October 2025 – November 2025]',
    title: 'Global Enviro Website',
    desc: 'Developed responsive layouts, integrated APIs, and improved accessibility for enterprise web apps.',
    tags: ['Frontend', 'Responsive', 'API']
  },
  {
    phase: 'Phase 4: Expanding Scope   [November 2025 – December 2025]',
    title: 'Paves Enterprise Platform',
    desc: 'Built reusable UI components, enhanced frontend speed, and improved overall usability.',
    tags: ['UI Optimization', 'Components']
  },
  {
    phase: 'Phase 5: Current Focus   [December 2025 - Present]',
    title: 'Employee Onboarding System',
    desc: 'Building frontend modules, backend integrations, and complex workflow logic.',
    tags: ['Next.js', 'React', 'FastAPI', 'MySQL']
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Project <span className="text-brand-400">Timeline</span></h2>
          <p className="text-slate-400 text-lg">
            Structured milestones expanding both my technical expertise and business understanding.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-1/2">
          {timeline.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-brand-500 border-4 border-slate-950"></div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-brand-500/30 transition-colors">
                <span className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-1 block">
                  {item.phase}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
