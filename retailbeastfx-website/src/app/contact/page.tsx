'use client';

import { useState } from 'react';
import { GlowButton } from '@/components/Marketing';

const faqItems = [
    {
        q: 'How do I reset my password?',
        a: 'Click "Forgot Password" on the login page. You\'ll receive an email with a reset link.',
    },
    {
        q: 'My journal data isn\'t syncing. What should I do?',
        a: 'Try refreshing the page or clearing your browser cache. If the issue persists, contact support.',
    },
    {
        q: 'How do I cancel my subscription?',
        a: 'Go to Settings > Billing > Cancel Subscription. You\'ll retain access until the end of your billing period.',
    },
    {
        q: 'Can I get a refund?',
        a: 'Yes, we offer a 30-day money-back guarantee. Contact us within 30 days of purchase for a full refund.',
    },
    {
        q: 'Is my trading data secure?',
        a: 'Absolutely. All data is encrypted at rest and in transit. We never share your trading data with third parties.',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: '',
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Message sent! We\'ll get back to you within 24 hours.');
    };

    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden pb-12">
                <div className="absolute inset-0 bg-grid opacity-30" />

                <div className="container-narrow mx-auto relative z-10 text-center">
                    <h1 className="heading-cyber text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Get in</span>
                        <span className="text-beast-green"> Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a question? Need help? We&apos;re here for you.
                        Reach out and we&apos;ll respond within 24 hours.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="px-4 pb-20">
                <div className="container-wide mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="glass-card rounded-2xl p-8">
                            <h2 className="heading-cyber text-2xl text-white mb-6">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-border rounded-lg text-white placeholder-gray-500 focus:border-beast-green focus:outline-none"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-border rounded-lg text-white placeholder-gray-500 focus:border-beast-green focus:outline-none"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Subject</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-border rounded-lg text-white focus:border-beast-green focus:outline-none"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="feedback">Feedback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-border rounded-lg text-white placeholder-gray-500 focus:border-beast-green focus:outline-none resize-none"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <GlowButton className="w-full justify-center">
                                    Send Message
                                </GlowButton>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="glass-card rounded-xl p-6">
                                <h3 className="heading-cyber text-lg text-white mb-4">Other Ways to Reach Us</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-beast-green/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-beast-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <a href="mailto:support@retailbeastfx.com" className="text-beast-green hover:underline">
                                                support@retailbeastfx.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Discord</p>
                                            <a href="https://discord.gg/retailbeastfx" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">
                                                Join our server for live support
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Twitter/X</p>
                                            <a href="https://twitter.com/retailbeastfx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-beast-green transition-colors">
                                                @retailbeastfx
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card rounded-xl p-6">
                                <h3 className="heading-cyber text-lg text-white mb-4">Support Hours</h3>
                                <p className="text-gray-400 mb-4">
                                    Our team typically responds within 24 hours. For faster help, join our Discord!
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse" />
                                    <span className="text-beast-green">Discord support available 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto">
                    <h2 className="heading-cyber text-3xl text-white text-center mb-12">
                        Common <span className="text-beast-green">Questions</span>
                    </h2>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        {faqItems.map((item, i) => (
                            <div
                                key={i}
                                className="glass-card rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-6 text-left flex items-center justify-between"
                                >
                                    <span className="font-medium text-white">{item.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-beast-green transition-transform ${openFaq === i ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-gray-400 animate-fade-in">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
