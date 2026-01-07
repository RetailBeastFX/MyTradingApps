import { GlowButton } from '@/components/Marketing';

export default function JournalPage() {
    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-glow" />

                <div className="container-narrow mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beast-green/10 border border-beast-green/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse" />
                        <span className="text-sm text-beast-green font-medium">Trading Journal</span>
                    </div>

                    <h1 className="heading-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Your Mechanical</span>
                        <br />
                        <span className="gradient-text">Execution Enforcer</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Log trades, track performance, and analyze your edge with the RetailBeastFX Journal.
                        No emotions. Just data. Just execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <GlowButton href="https://retailbeastfxjournal.vercel.app/" external size="lg">
                            Open Journal App
                        </GlowButton>
                        <GlowButton href="#features" variant="outline" size="lg">
                            See Features
                        </GlowButton>
                    </div>
                </div>
            </section>

            {/* Embedded Journal Preview */}
            <section className="px-4 pb-20">
                <div className="container-wide mx-auto">
                    <div className="glass-card rounded-2xl p-4 md:p-6 overflow-hidden">
                        <div className="aspect-[16/9] bg-cyber-surface rounded-xl border border-beast-green/20 overflow-hidden">
                            <iframe
                                src="https://retailbeastfxjournal.vercel.app/"
                                className="w-full h-full border-0"
                                title="RetailBeastFX Trading Journal"
                                loading="lazy"
                                allow="clipboard-write"
                            />
                        </div>
                        <p className="text-center mt-4 text-gray-500 text-sm">
                            💡 Sign in to access your personal trading data and analytics
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="section-padding bg-cyber-dark">
                <div className="container-wide mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-4">
                            Journal <span className="text-beast-green">Features</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to track your edge and improve your execution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '📊',
                                title: 'Real-Time Analytics',
                                description: 'Win rate, expectancy, R-multiple, max drawdown – all updating live as you log trades.',
                            },
                            {
                                icon: '🎯',
                                title: 'Setup Expectancy',
                                description: 'See which setups are actually profitable. Filter by pair, session, confluences, and more.',
                            },
                            {
                                icon: '🔥',
                                title: 'Session Heatmaps',
                                description: 'Visualize your best trading hours. Know exactly when to trade and when to sit out.',
                            },
                            {
                                icon: '⚡',
                                title: 'Quick Entry',
                                description: 'Log trades in seconds with our quick-add modal. Auto-fill from TradingView webhooks.',
                            },
                            {
                                icon: '📈',
                                title: 'P&L Tracking',
                                description: 'Daily, weekly, monthly breakdowns. Track your progress toward financial goals.',
                            },
                            {
                                icon: '🔄',
                                title: 'Import/Export',
                                description: 'Import from MT4/MT5 reports. Export to CSV/PDF. Backup to Google Sheets.',
                            },
                            {
                                icon: '🏆',
                                title: 'Streak Tracking',
                                description: 'Monitor winning and losing streaks. Build discipline through gamification.',
                            },
                            {
                                icon: '📱',
                                title: 'Mobile PWA',
                                description: 'Install on your phone. Log trades during sessions. Works offline.',
                            },
                            {
                                icon: '🤖',
                                title: 'AI Insights',
                                description: 'Coming soon: Get personalized suggestions based on your trading patterns.',
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="glass-card rounded-xl p-6 group hover:border-beast-green/30 transition-all"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="heading-cyber text-lg text-white mb-2 group-hover:text-beast-green transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding">
                <div className="container-narrow mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-4">
                            Get Started in <span className="text-beast-green">3 Steps</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Sign Up Free',
                                description: 'Create your account in seconds. No credit card required.',
                            },
                            {
                                step: '02',
                                title: 'Log Your First Trade',
                                description: 'Use the quick-add form or import from your broker history.',
                            },
                            {
                                step: '03',
                                title: 'Find Your Edge',
                                description: 'Review your analytics and discover which setups actually pay.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-beast-green/20 mb-4">{item.step}</div>
                                <h3 className="heading-cyber text-xl text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-beast-green/50 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto text-center">
                    <div className="glass-card rounded-3xl p-8 md:p-16 border-beast-green/20">
                        <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-4">
                            Track Your Way to <span className="text-beast-green">Better Execution</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Traders who track their data make better decisions. See exactly what&apos;s working and what isn&apos;t.
                        </p>
                        <GlowButton href="https://retailbeastfxjournal.vercel.app/" external size="lg">
                            Start Journaling Free →
                        </GlowButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
