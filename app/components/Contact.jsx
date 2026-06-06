'use client'
 
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import right_arrow_white from '../../assets/right-arrow-white.png'
 
const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+93 787 484 323',
    href: 'tel:+93787484323',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.849L.057 23.5l5.793-1.521A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.371-.22-3.839 1.007 1.025-3.742-.241-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+93 787 484 323',
    href: 'https://wa.me/93787484323',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'an20kx@gmail.com',
    href: 'mailto:an20kx@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Kabul, Afghanistan',
    href: 'https://maps.google.com/?q=Kabul,Afghanistan',
  },

]
 
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}
 
const Contact = () => {
  const [result, setResult] = useState('')
  const [sending, setSending] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
 
  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setResult('')
 
    try {
      const formData = new FormData(e.target)
      formData.append('access_key', '255547fb-584a-4b27-9fea-ae20b331fdef')
 
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
 
      const data = await response.json()
 
      if (data.success) {
        setResult('success')
        e.target.reset()
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setResult('Network error. Please check your connection.')
    } finally {
      setSending(false)
    }
  }
 
  return (
    <section
      id="contact"
      ref={ref}
      className="w-full px-[6%] lg:px-[8%] py-20 scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-sky-500 mb-3">
          Contact
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Get in touch
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
          Have a project in mind or just want to say hello? I'm always open to
          new opportunities and collaborations.
        </p>
      </motion.div>
 
      {/* 2-Column Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
 
        {/* ── Left: Form ── */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={1}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Send a message
          </h3>
 
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=" "
                  className="peer w-full pt-5 pb-2 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-colors placeholder-transparent"
                />
                <label className="absolute left-4 top-2 text-xs text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500 transition-all duration-200 pointer-events-none">
                  Your name
                </label>
              </div>
 
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer w-full pt-5 pb-2 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-colors placeholder-transparent"
                />
                <label className="absolute left-4 top-2 text-xs text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500 transition-all duration-200 pointer-events-none">
                  Email address
                </label>
              </div>
            </div>
 
            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder=" "
                className="peer w-full pt-5 pb-2 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-colors placeholder-transparent"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500 transition-all duration-200 pointer-events-none">
                Subject
              </label>
            </div>
 
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                required
                placeholder=" "
                className="peer w-full pt-5 pb-2 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-colors resize-none placeholder-transparent"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500 transition-all duration-200 pointer-events-none">
                Your message
              </label>
            </div>
 
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-sky-600 dark:hover:bg-sky-500 dark:hover:text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {sending ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit Now
                  <Image src={right_arrow_white} alt="" className="w-4 dark:invert" />
                </>
              )}
            </motion.button>
 
            {/* Result feedback */}
            {result === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {result && result !== 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {result}
              </motion.div>
            )}
          </form>
        </motion.div>
 
        {/* ── Right: Contact Info ── */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={2}
          className="flex flex-col gap-5"
        >
          {/* Intro card */}
          <div className="bg-linear-to-br from-sky-500 to-indigo-600 rounded-2xl p-7 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Let's build something great</h3>
            <p className="text-sky-100 text-sm leading-relaxed">
              I'm available for freelance projects, full-time remote roles, or just a
              friendly chat about tech. Reach out through any channel below.
            </p>
 
            {/* Availability badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for new projects
            </div>
          </div>
 
          {/* Contact items */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-1">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                custom={3 + i * 0.5}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 py-3 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.value}
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-sky-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
 
      </div>
    </section>
  )
}
 
export default Contact