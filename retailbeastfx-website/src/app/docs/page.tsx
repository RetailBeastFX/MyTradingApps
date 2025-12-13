import Link from 'next/link';
import { GlowButton } from '@/components/Marketing';

const docSections = [
    {
        title: 'Getting Started',
        links: [
            { href: '#setup', label: 'Installation & Setup' },
            { href: '#tradingview', label: 'Adding to TradingView' },
            { href: '#first-signal', label: 'Your First Signal' },
        ],
    },
    {
        title: 'Indicator Guide',
        links: [
            { href: '#order-blocks', label: 'Fresh Order Blocks' },
            { href: '#fvg', label: 'Fair Value Gaps' },
            { href: '#killzones', label: 'Killzone Sessions' },
            { href: '#quantum-lock', label: 'Quantum Lock™' },
            { href: '#ghost-tape', label: 'Ghost Tape' },
        ],
    },
    {
        title: 'Journal Mastery',
        links: [
            { href: '#journal-setup', label: 'Setting Up Your Journal' },
            { href: '#quick-entry', label: 'Quick Trade Entry' },
            { href: '#webhooks', label: 'TradingView Webhooks' },
            { href: '#analytics', label: 'Understanding Analytics' },
            { href: '#export', label: 'Export & Backup' },
        ],
    },
    {
        title: 'Advanced',
        links: [
            { href: '#templates', label: 'Custom Templates' },
            { href: '#mt4-import', label: 'MT4/MT5 Import' },
            { href: '#api', label: 'API Reference' },
        ],
    },
];

export default function DocsPage() {
    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden pb-12">
                <div className="absolute inset-0 bg-grid opacity-30" />

                <div className="container-wide mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="heading-cyber text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Documentation &</span>
                            <span className="text-beast-green"> User Guide</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Everything you need to master RetailBeastFX. From setup to advanced strategies.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full px-6 py-4 bg-cyber-card border border-cyber-border rounded-xl text-white placeholder-gray-500 focus:border-beast-green focus:outline-none"
                            />
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20 px-4">
                <div className="container-wide mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="glass-card rounded-xl p-6 sticky top-24">
                                {docSections.map((section, i) => (
                                    <div key={i} className="mb-6 last:mb-0">
                                        <h3 className="text-sm font-semibold text-beast-green uppercase tracking-wider mb-3">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {section.links.map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-gray-400 hover:text-white text-sm transition-colors block py-1"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="lg:col-span-3">
                            {/* Quick Start */}
                            <section id="setup" className="mb-16">
                                <h2 className="heading-cyber text-2xl text-white mb-6">Getting Started</h2>

                                <div className="glass-card rounded-xl p-8 mb-8">
                                    <h3 className="text-lg font-semibold text-white mb-4">🚀 Quick Start (5 minutes)</h3>
                                    <ol className="space-y-4 text-gray-300">
                                        <li className="flex gap-4">
                                            <span className="w-8 h-8 rounded-full bg-beast-green/20 text-beast-green flex items-center justify-center font-bold shrink-0">1</span>
                                            <div>
                                                <p className="font-medium text-white">Add the indicator to TradingView</p>
                                                <p className="text-sm text-gray-400">Search &quot;RetailBeastFX&quot; in the indicators menu and add to your chart.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="w-8 h-8 rounded-full bg-beast-green/20 text-beast-green flex items-center justify-center font-bold shrink-0">2</span>
                                            <div>
                                                <p className="font-medium text-white">Configure your settings</p>
                                                <p className="text-sm text-gray-400">Adjust killzone times for your timezone and select your trading mode.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="w-8 h-8 rounded-full bg-beast-green/20 text-beast-green flex items-center justify-center font-bold shrink-0">3</span>
                                            <div>
                                                <p className="font-medium text-white">Set up the journal</p>
                                                <p className="text-sm text-gray-400">Create your account and log your first trade to start tracking.</p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>

                                {/* Video Embed Placeholder */}
                                <div className="glass-card rounded-xl p-4 overflow-hidden">
                                    <div className="aspect-video bg-cyber-surface rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-full bg-beast-green/20 flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-beast-green" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-400">Setup Tutorial Video</p>
                                            <p className="text-sm text-gray-500">Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Order Blocks */}
                            <section id="order-blocks" className="mb-16">
                                <h2 className="heading-cyber text-2xl text-white mb-6">Fresh Order Blocks</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 mb-4">
                                        Order Blocks are areas where institutional traders have placed significant orders.
                                        RetailBeastFX identifies <span className="text-beast-green font-semibold">unmitigated (fresh)</span> order blocks
                                        that price is likely to return to.
                                    </p>

                                    <div className="glass-card rounded-xl p-6 my-6">
                                        <h4 className="text-white font-semibold mb-4">Key Settings</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-beast-green">•</span>
                                                <div>
                                                    <code className="text-beast-green bg-cyber-dark px-2 py-1 rounded">Show Fresh OBs Only</code>
                                                    <p className="text-sm text-gray-400 mt-1">Toggle to hide mitigated blocks</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-beast-green">•</span>
                                                <div>
                                                    <code className="text-beast-green bg-cyber-dark px-2 py-1 rounded">OB Lookback</code>
                                                    <p className="text-sm text-gray-400 mt-1">Number of candles to scan (default: 50)</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-beast-green">•</span>
                                                <div>
                                                    <code className="text-beast-green bg-cyber-dark px-2 py-1 rounded">Min OB Size</code>
                                                    <p className="text-sm text-gray-400 mt-1">Filter small OBs by ATR percentage</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* More sections would continue here */}
                            <div className="glass-card rounded-xl p-8 text-center">
                                <p className="text-gray-400 mb-4">
                                    📚 Full documentation is being expanded. Check back soon for more guides.
                                </p>
                                <GlowButton href="https://discord.gg/retailbeastfx" variant="outline" external>
                                    Get Help on Discord
                                </GlowButton>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto">
                    <h2 className="heading-cyber text-2xl text-white text-center mb-8">
                        Downloadable <span className="text-beast-green">Templates</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'Scalper Journal Template', format: 'CSV', size: '12KB' },
                            { name: 'Swing Trader Template', format: 'CSV', size: '14KB' },
                            { name: 'Trade Review Checklist', format: 'PDF', size: '45KB' },
                        ].map((file, i) => (
                            <div key={i} className="glass-card rounded-xl p-6 flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">{file.name}</p>
                                    <p className="text-sm text-gray-500">{file.format} • {file.size}</p>
                                </div>
                                <button className="text-beast-green hover:text-beast-green-300 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
