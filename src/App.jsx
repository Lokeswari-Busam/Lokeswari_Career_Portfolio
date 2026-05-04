import Hero from './components/Hero'
import Identity from './components/Identity'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Growth from './components/Growth'
import DetailedProjects from './components/DetailedProjects'
import BeforeAfter from './components/BeforeAfter'
import Stats from './components/Stats'
import Challenges from './components/Challenges'
import Reflections from './components/Reflections'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30">
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between border-slate-800">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-brand-400">Lokeswari.Busam</h1>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest hidden sm:block">Paves Technologies</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#journey" className="hover:text-brand-400 transition-colors">Journey</a>
            <a href="#identity" className="hover:text-brand-400 transition-colors">Identity</a>
            <a href="#timeline" className="hover:text-brand-400 transition-colors">Timeline</a>
            <a href="#detailed-projects" className="hover:text-brand-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a>
            <a href="#stats" className="hover:text-brand-400 transition-colors">Progress</a>
            <a href="#challenges" className="hover:text-brand-400 transition-colors">Challenges</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Identity />
        <Timeline />
        <DetailedProjects />
        <BeforeAfter />
        <Skills />
        <Growth />
        <Stats />
        <Challenges />
        <Reflections />
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© 2026 Lokeswari Busam. Custom Annual Appraisal.</p>
      </footer>
    </div>
  )
}
