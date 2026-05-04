import { motion } from 'framer-motion'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'
import { Server, Database, Code, Cpu, Layout, Workflow } from 'lucide-react'
import { FaGitAlt, FaBrain } from "react-icons/fa";

const skillData = [
  { subject: 'Frontend (React/Next)', A: 85, fullMark: 100 },
  { subject: 'Backend (Java/Python)', A: 80, fullMark: 100 },
  { subject: 'APIs (FastAPI/Spring)', A: 85, fullMark: 100 },
  { subject: 'Databases (MySQL)', A: 75, fullMark: 100 },
  { subject: 'AI / Data', A: 70, fullMark: 100 },
  { subject: 'Workflow Automation', A: 80, fullMark: 100 },
  { subject: 'Docker', A: 45, fullMark: 100 },
  { subject: 'CI/CD', A: 65, fullMark: 100 },
  { subject: 'Git & GitHub', A: 75, fullMark: 100 },
]

const techStack = [
  { name: 'Java', icon: Code },
  { name: 'Python', icon: Cpu },
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Layout },
  { name: 'FastAPI', icon: Server },
  { name: 'Spring Boot', icon: Server },
  { name: 'MySQL', icon: Database },
  { name: 'AWS', icon: Workflow },
  { name: 'Git & GitHub', icon: FaGitAlt },
  { name: 'AI/ML', icon: FaBrain },
  { name: 'CI/CD', icon: Workflow },
  { name: 'Docker', icon: Workflow },
  
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-brand-400">Proficiencies</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Strengthened technical foundations and adapted quickly to new challenges to build practical business solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {techStack.map((tech, i) => (
              <div 
                key={tech.name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-brand-500/50 hover:bg-slate-800/50 transition-colors group cursor-default"
              >
                <div className="p-3 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                  <tech.icon className="w-6 h-6 text-brand-400" />
                </div>
                <span className="text-sm font-medium text-slate-300">{tech.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Radar Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[400px] flex flex-col relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-cyan-500/5 pointer-events-none"></div>
            <h3 className="text-lg font-semibold text-white mb-6 text-center z-10">Skill Proficiency Evolution</h3>
            <div className="flex-1 min-h-0 w-full z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                  <Radar name="Proficiency" dataKey="A" stroke="#0ea5e9" fill="#38bdf8" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
