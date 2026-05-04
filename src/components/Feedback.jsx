import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="feedback" className="py-24 bg-slate-900 relative border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-4">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Panel <span className="text-brand-400">Feedback</span></h2>
          <p className="text-slate-400">
            Please provide your custom inputs or appraisal feedback below.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Panel Member Name</label>
              <input required type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Rating</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors">
                <option>Exceeds Expectations</option>
                <option>Meets Expectations</option>
                <option>Needs Improvement</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Appraisal Notes (Custom Inputs)</label>
            <textarea required rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Enter comments here..."></textarea>
          </div>

          {submitted ? (
            <div className="flex items-center gap-3 text-green-400 bg-green-500/10 p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Feedback submitted successfully. Thank you!</span>
            </div>
          ) : (
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-medium px-6 py-3.5 rounded-lg transition-colors">
              <Send className="w-4 h-4" />
              Submit Feedback
            </button>
          )}
        </motion.form>
      </div>
    </section>
  )
}
