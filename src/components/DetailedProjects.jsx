import { motion } from 'framer-motion'
import { BookOpen, Layers, Globe, Leaf, Server, Code, Cpu, Database, Brain, Clock, Users, Shield, CheckCircle } from 'lucide-react'

export default function DetailedProjects() {
  return (
    <section id="detailed-projects" className="py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 -translate-y-1/2 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6 inline-block">
            Project Highlights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Detailed <span className="text-brand-400">Contributions</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A deeper dive into the specific training modules, full-stack developments, and enterprise platforms I built.
          </p>
        </motion.div>

        {/* 1. Training Phase */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">1. Training Phase Foundation</h3>
                        <p className="text-slate-400 font-medium">May – July 2025 · Building the Base</p>
                    </div>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Code className="text-brand-400" size={20} />
                        <h4 className="text-lg font-bold text-white">Python Programming</h4>
                    </div>
                    {/* <p className="text-slate-400 text-sm mb-4 leading-relaxed">Core Python fundamentals, OOP concepts, data structures, file I/O, and scripting for real-world automation tasks.</p> */}
                    <div className="flex flex-wrap gap-2">
                        {['OOP', 'Functions', 'Data Structures', 'Scripting'].map(t => <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">{t}</span>)}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Brain className="text-purple-400" size={20} />
                        <h4 className="text-lg font-bold text-white">Artifial Intelligence </h4>
                    </div>
                    {/* <p className="text-slate-400 text-sm mb-4 leading-relaxed">Introduction to artificial intelligence, supervised and unsupervised learning, model evaluation, and real-world AI applications.</p> */}
                    <div className="flex flex-wrap gap-2">
                        {['Supervised', 'Unsupervised', 'Model Eval'].map(t => <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">{t}</span>)}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Database className="text-blue-400" size={20} />
                        <h4 className="text-lg font-bold text-white">Exploratory Data Analysis</h4>
                    </div>
                    {/* <p className="text-slate-400 text-sm mb-4 leading-relaxed">Data cleaning, visualization, pattern discovery, and statistical analysis using Pandas, Matplotlib, and Seaborn.</p> */}
                    <div className="flex flex-wrap gap-2">
                        {['Pandas', 'Matplotlib', 'Seaborn'].map(t => <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">{t}</span>)}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Cpu className="text-cyan-400" size={20} />
                        <h4 className="text-lg font-bold text-white">Machine Learning </h4>
                    </div>
                    {/* <p className="text-slate-400 text-sm mb-4 leading-relaxed">Linear regression, classification algorithms, decision trees, and hands-on model training with Scikit-learn.</p> */}
                    <div className="flex flex-wrap gap-2">
                        {['Scikit-learn', 'Regression', 'Classification'].map(t => <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">{t}</span>)}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* 2. Full Stack Modules */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16 bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Layers size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">2. Full Stack Development Modules</h3>
                   <p className="text-slate-400 font-medium">Executive Project Showcase • Core Business Applications</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
                           <Clock size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-white leading-tight">Timesheet Management System</h4>
                    </div>
                   
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-amber-400">▹</span> Developed employee time-log entry UI with React
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-amber-400">▹</span> Built manager approval & rejection workflows
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-amber-400">▹</span> Created weekly/monthly report generation
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-amber-400">▹</span> Integrated role-based access control (RBAC)
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['React.js', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST API'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-pink-500/10 text-pink-400 rounded-lg">
                           <Users size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-white leading-tight">Employee Onboarding System</h4>
                    </div>
                
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-pink-400">▹</span> Built multi-step onboarding form wizard UI
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-pink-400">▹</span> Developed document upload & verification module
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-pink-400">▹</span> Implemented automated email notification system
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-pink-400">▹</span> Created admin dashboard for HR management
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['React.js', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Email Automation'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* 3. Website & Platform Applications */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Globe size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">3. Website & Platform Applications</h3>
                   <p className="text-slate-400 font-medium">Enterprise Web Applications • Public & Internal Web Platforms</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Project 1 */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                           <Leaf size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white leading-tight">Global Enviro Website</h4>
                            <span className="text-brand-400 text-sm font-medium">Industrial sustainability platform</span>
                        </div>
                    </div>
                   
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-emerald-400">▹</span> Designed responsive multi-page layout with animations
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-emerald-400">▹</span> Built service showcase with interactive cards
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-emerald-400">▹</span> Implemented Framer-motion to the cards and pages
                        </li>
                        {/* <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-emerald-400">▹</span> Optimized 
                        </li> */}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['React.js', 'Node.js', 'CSS Animations', 'Responsive'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                           <Server size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white leading-tight">Paves Enterprise Platform</h4>
                            <span className="text-brand-400 text-sm font-medium">Large-scale internal business system</span>
                        </div>
                    </div>
                   
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-blue-400">▹</span> Developed core module UI components using react
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-blue-400">▹</span> Built RESTful APIs for data management in careers 
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-blue-400">▹</span> Implemented the animations and responsive design
                        </li>
                        {/* <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-blue-400">▹</span> Collaborated on cloud deployment pipeline
                        </li> */}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['React.js', 'Spring Boot', 'MySQL', 'AWS', 'Docker'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>

        {/* 4. Enterprise Testing & Migration Contributions */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Shield size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">4. Enterprise Testing & Migration Contributions</h3>
                   <p className="text-slate-400 font-medium">System Analysis • Rigorous Quality Assurance</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Project 1 */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="p-3 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg">
                           <Database size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white leading-tight">All Care & All Trans Projects</h4>
                            <span className="text-brand-400 text-sm font-medium">Data migration & schema analysis</span>
                        </div>
                    </div>
                  
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-fuchsia-400">▹</span> Analyzed complex database schemas
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-fuchsia-400">▹</span> Validated legacy data structure integrity
                        </li>
                        {/* <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-fuchsia-400">▹</span> Optimized queries for system performance
                        </li> */}
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-fuchsia-400">▹</span> Analyzed the AllTrans Web API source code provided by the client
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['.NET', 'SQL Server', 'Data Flow', 'Schema Analysis'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                    <div className="flex gap-4 items-start mb-4">
                        <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg">
                           <CheckCircle size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white leading-tight">PMS Module Testing</h4>
                            <span className="text-brand-400 text-sm font-medium">Quality assurance workflows</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-violet-400">▹</span> Executed manual testing based on test cases
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-violet-400">▹</span> Identified, tracked, and reported bugs
                        </li>
                        {/* <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-violet-400">▹</span> Validated complex application workflows
                        </li> */}
                        <li className="flex gap-3 text-sm text-slate-300">
                            <span className="text-violet-400">▹</span> Performed comprehensive fixes retesting
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['Manual Testing', 'SQL Validation', 'PMS Modules', 'Bug Tracking'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </section>
  )
}
