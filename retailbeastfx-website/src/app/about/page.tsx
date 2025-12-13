import Image from 'next/image';
import { GlowButton } from '@/components/Marketing';

// All mascot poses for the gallery
const mascotPoses = [
    { src: '/mascot/beast-pose-1-card.png', label: 'Ready' },
    { src: '/mascot/beast-pose-2-card.png', label: 'Hunting' },
    { src: '/mascot/beast-pose-3-card.png', label: 'Locked' },
    { src: '/mascot/beast-pose-4-card.png', label: 'Victory' },
];

export default function AboutPage() {
    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-glow" />

                <div className="container-wide mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-white">From Indicator to</span>
                                <br />
                                <span className="gradient-text">Journal</span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-6">
                                Building mechanical traders, one disciplined trade at a time.
                            </p>

                            <p className="text-gray-400 mb-8">
                                RetailBeastFX started as a simple ICT/SMC indicator. But we quickly realized
                                that having the best signals means nothing without the discipline to execute them.
                                That&apos;s when the journal was born – the missing link between knowing and doing.
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-beast-green">2024</p>
                                    <p className="text-sm text-gray-500">Founded</p>
                                </div>
                                <div className="w-px h-12 bg-cyber-border" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-beast-green">2,500+</p>
                                    <p className="text-sm text-gray-500">Traders</p>
                                </div>
                                <div className="w-px h-12 bg-cyber-border" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-beast-green">50K+</p>
                                    <p className="text-sm text-gray-500">Trades Logged</p>
                                </div>
                            </div>
                        </div>

                        {/* Mascot Gallery */}
                        <div className="relative">
                            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-beast-green/10 via-transparent to-beast-green/5" />

                                {/* Mascot Grid */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {mascotPoses.map((pose, index) => (
                                        <div
                                            key={pose.label}
                                            className="group relative aspect-square bg-cyber-surface rounded-xl border border-cyber-border hover:border-beast-green/50 transition-all duration-300 overflow-hidden"
                                        >
                                            <Image
                                                src={pose.src}
                                                alt={`RetailBeastFX Mascot - ${pose.label}`}
                                                fill
                                                className="object-contain p-2 drop-shadow-[0_0_20px_rgba(0,230,118,0.3)] group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="px-2 py-1 bg-beast-green/20 text-beast-green text-xs font-medium rounded-full">
                                                    {pose.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Gallery Label */}
                                <div className="text-center mt-4 relative z-10">
                                    <p className="text-beast-green font-semibold heading-cyber">The Beast Modes</p>
                                    <p className="text-gray-400 text-sm">4 poses. 1 mission. Profits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto text-center">
                    <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-8">
                        Our <span className="text-beast-green">Mission</span>
                    </h2>

                    <div className="glass-card rounded-2xl p-8 md:p-12">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            &ldquo;To transform emotional retail traders into <span className="text-beast-green font-semibold">mechanical execution machines</span> through
                            world-class tools, data-driven journaling, and a community that holds each other accountable.&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="container-wide mx-auto">
                    <h2 className="heading-cyber text-3xl md:text-4xl text-white text-center mb-12">
                        What We <span className="text-beast-green">Believe</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '📊',
                                title: 'Data Over Emotion',
                                description: 'Feelings lie. Numbers don\'t. Every decision should be backed by your trading data.',
                            },
                            {
                                icon: '🎯',
                                title: 'Mechanical Execution',
                                description: 'The best traders are robots with rules. Build your system, trust your process.',
                            },
                            {
                                icon: '📈',
                                title: 'Continuous Improvement',
                                description: 'Trading is a craft. Review, refine, repeat. Your journal is your coach.',
                            },
                            {
                                icon: '🤝',
                                title: 'Community Accountability',
                                description: 'We rise together. Share your wins, own your losses, learn from each other.',
                            },
                            {
                                icon: '🔒',
                                title: 'Your Data, Your Control',
                                description: 'Privacy first. Your trading data is encrypted and never shared. Period.',
                            },
                            {
                                icon: '⚡',
                                title: '2025-Proof Innovation',
                                description: 'Markets evolve, so do we. Continuous updates based on what actually works.',
                            },
                        ].map((value, i) => (
                            <div key={i} className="glass-card rounded-xl p-6 text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="heading-cyber text-lg text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto">
                    <h2 className="heading-cyber text-3xl md:text-4xl text-white text-center mb-12">
                        The <span className="text-beast-green">Story</span>
                    </h2>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="w-1 bg-beast-green/30 rounded-full relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-beast-green rounded-full" />
                            </div>
                            <div>
                                <p className="text-beast-green font-semibold mb-2">Early 2024</p>
                                <h3 className="text-xl text-white mb-2">The Problem</h3>
                                <p className="text-gray-400">
                                    Like most traders, we had all the knowledge – ICT, SMC, order flow. But we kept
                                    blowing accounts. The pattern was clear: we knew what to do, but we couldn&apos;t execute consistently.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1 bg-beast-green/30 rounded-full relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-beast-green rounded-full" />
                            </div>
                            <div>
                                <p className="text-beast-green font-semibold mb-2">Mid 2024</p>
                                <h3 className="text-xl text-white mb-2">The Indicator</h3>
                                <p className="text-gray-400">
                                    We built RetailBeastFX to automate signal detection. Fresh Order Blocks, Killzones,
                                    Quantum Lock™ – all the concepts we were manually tracking, now visual and alert-ready.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1 bg-beast-green/30 rounded-full relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-beast-green rounded-full" />
                            </div>
                            <div>
                                <p className="text-beast-green font-semibold mb-2">Late 2024</p>
                                <h3 className="text-xl text-white mb-2">The Journal</h3>
                                <p className="text-gray-400">
                                    But signals weren&apos;t enough. We needed accountability. The journal was born –
                                    track every trade, see your real stats, and let the data guide improvements.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1 bg-beast-green/30 rounded-full relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-beast-green rounded-full" />
                            </div>
                            <div>
                                <p className="text-beast-green font-semibold mb-2">Now</p>
                                <h3 className="text-xl text-white mb-2">The Ecosystem</h3>
                                <p className="text-gray-400">
                                    Today, RetailBeastFX is a complete trading ecosystem. Indicator for signals,
                                    journal for execution, community for accountability. We&apos;re here to make you profitable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-narrow mx-auto text-center">
                    <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-4">
                        Ready to Join the <span className="text-beast-green">Beast Pack?</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Start your journey to consistent profitability today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GlowButton href="/pricing" size="lg">
                            Get Started
                        </GlowButton>
                        <GlowButton href="/community" variant="outline" size="lg">
                            Join Community
                        </GlowButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
