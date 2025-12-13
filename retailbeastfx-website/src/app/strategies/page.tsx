'use client';

import { useState } from 'react';
import { GlowButton } from '@/components/Marketing';
import Image from 'next/image';

// Strategy section data
const strategies = [
    {
        id: 'retail-beast',
        name: 'Retail Beast',
        tagline: 'The Everyday Warrior',
        icon: '🦾',
        difficulty: 'Beginner-Friendly',
        winRate: '77-80%',
        description: 'Your custom TradingView/MT5 indicator blending ICT/SMC concepts with proven 2025 edges. Designed for retail traders to compete with institutions.',
        components: [
            {
                title: 'Fresh Internal Order Blocks',
                desc: 'Last opposite candle before the move — first touch reversal signals with high probability.',
            },
            {
                title: 'Bollinger Band 1.0 Extremes',
                desc: 'Statistical filter using tight bands — touches indicate exhaustion and reversal zones.',
            },
            {
                title: 'EMA 8/21 Bias',
                desc: 'Simple but effective — trade in the direction of the trend using EMA crossovers.',
            },
            {
                title: 'Killzone Filtering',
                desc: 'London and NY sessions only — avoid the noise, trade the volume.',
            },
        ],
        implementation: [
            'Load the indicator on 1-min or 5-min charts',
            'Wait for 3-confluence signals (OB + BB + EMA alignment)',
            'Enter on candle close with ATR-based stop loss',
            'Trail using 5-EMA for maximum trend capture',
        ],
        stats: {
            winRate: '77-80%',
            avgRR: '3.1R',
            bestPairs: 'BTC, ETH, XAU, EUR/USD',
        },
    },
    {
        id: 'quantum-oracle',
        name: 'Quantum Oracle Arb',
        tagline: 'The Future-Seer',
        icon: '🔮',
        difficulty: 'Advanced',
        winRate: '85%+',
        description: 'Quantum computing principles applied to arbitrage — process vast datasets, predict inefficiencies, and simulate multiple scenarios simultaneously.',
        components: [
            {
                title: 'Quantum Superposition',
                desc: 'Explore thousands of arbitrage paths simultaneously using qubits instead of classical bits.',
            },
            {
                title: 'Oracle Query System',
                desc: 'Quantum subroutine that queries order books and funding rates to find hidden patterns.',
            },
            {
                title: 'Triangular Arb Detection',
                desc: 'Uses Grover\'s algorithm for exponentially faster search across currency pairs.',
            },
            {
                title: 'Condition Number Estimation',
                desc: 'Quantum model estimates how sensitive the arbitrage is to market changes.',
            },
        ],
        implementation: [
            'Input market data: prices, volumes, latencies across exchanges',
            'Quantum model estimates "condition number" for sensitivity analysis',
            'If profitable path detected, execute via low-latency API',
            'Hybridize with classical ML for robustness against quantum noise',
        ],
        stats: {
            winRate: '85%+',
            avgRR: 'Risk-Free Arb',
            bestPairs: 'Cross-exchange BTC, ETH',
        },
    },
    {
        id: 'speed-demon',
        name: 'Low-Latency Basis Arb',
        tagline: 'The Speed Demon',
        icon: '⚡',
        difficulty: 'Professional',
        winRate: '90%+',
        description: 'A powerhouse hybrid: Statistical Basis trading + Gamma Scalping + Predictive Funding Arb. Built for HFT in perpetual markets.',
        components: [
            {
                title: 'Statistical Basis Trading',
                desc: 'Exploit perp vs spot price discrepancies using Z-score mean-reversion with <1ms execution.',
            },
            {
                title: 'Gamma Scalping',
                desc: 'Dynamic delta hedging to extract extra profits from basis positions — adds 10-30% yield.',
            },
            {
                title: 'Predictive Funding Arb',
                desc: 'ML models (LightGBM) predict funding rate shifts before they happen.',
            },
            {
                title: 'Kalman Filter Integration',
                desc: 'Advanced statistical filtering for optimal entry/exit timing.',
            },
        ],
        implementation: [
            'Monitor basis deviation: Z = (current - mean) / std dev',
            'Enter when Z > 2 (statistically significant)',
            'Predict funding shift using ML model on historical rates',
            'Gamma scalp the position with dynamic delta hedging',
        ],
        stats: {
            winRate: '90%+',
            avgRR: '2-5% per cycle',
            bestPairs: 'BTC/ETH Perps vs Spot',
        },
    },
];

// Math formulas for display
const mathConcepts = [
    {
        name: 'Z-Score (Basis)',
        formula: 'Z = (Current Basis - Mean) / Std Dev',
        desc: 'Measures how many standard deviations the current basis is from the mean.',
    },
    {
        name: 'Gamma',
        formula: 'Γ = ∂²V / ∂S²',
        desc: 'Second derivative of option/position value with respect to spot price.',
    },
    {
        name: 'Quantum Speedup',
        formula: 'O(√N) vs O(N)',
        desc: 'Quantum algorithms solve search problems quadratically faster than classical.',
    },
];

export default function StrategiesPage() {
    const [activeStrategy, setActiveStrategy] = useState(strategies[0].id);
    const active = strategies.find(s => s.id === activeStrategy) || strategies[0];

    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-glow" />

                <div className="container-narrow mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-beast-green/10 text-beast-green text-sm font-medium mb-6 border border-beast-green/20">
                        Advanced Trading Strategies
                    </span>
                    <h1 className="heading-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">The 2025</span>
                        <br />
                        <span className="gradient-text">Strategy Arsenal</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        From beginner-friendly retail setups to quantum-powered institutional strategies.
                        Master the edge that separates profitable traders from the crowd.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {strategies.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveStrategy(s.id)}
                                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeStrategy === s.id
                                        ? 'bg-beast-green text-black'
                                        : 'glass-card text-gray-300 hover:text-white hover:border-beast-green/50'
                                    }`}
                            >
                                <span className="text-xl">{s.icon}</span>
                                {s.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Detail */}
            <section className="section-padding">
                <div className="container-wide mx-auto">
                    <div className="glass-card rounded-2xl p-8 md:p-12">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">{active.icon}</span>
                                    <div>
                                        <h2 className="heading-cyber text-3xl text-white">{active.name}</h2>
                                        <p className="text-beast-green">{active.tagline}</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 max-w-2xl">{active.description}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${active.difficulty === 'Beginner-Friendly'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : active.difficulty === 'Advanced'
                                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                    }`}>
                                    {active.difficulty}
                                </span>
                                <span className="text-2xl font-bold text-beast-green">{active.winRate} Win Rate</span>
                            </div>
                        </div>

                        {/* Components Grid */}
                        <div className="mb-12">
                            <h3 className="heading-cyber text-xl text-white mb-6">Core Components</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {active.components.map((comp, i) => (
                                    <div key={i} className="bg-cyber-dark rounded-xl p-6 border border-cyber-border">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-8 h-8 rounded-lg bg-beast-green/20 text-beast-green flex items-center justify-center text-sm font-bold">
                                                {i + 1}
                                            </span>
                                            <h4 className="font-medium text-white">{comp.title}</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm">{comp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Implementation Steps */}
                        <div className="mb-12">
                            <h3 className="heading-cyber text-xl text-white mb-6">Implementation</h3>
                            <div className="bg-cyber-dark rounded-xl p-6 border border-cyber-border">
                                <ol className="space-y-4">
                                    {active.implementation.map((step, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="w-6 h-6 rounded-full bg-beast-green text-black flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="text-gray-300">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-6 rounded-xl bg-cyber-dark border border-cyber-border">
                                <div className="text-2xl font-bold text-beast-green mb-1">{active.stats.winRate}</div>
                                <div className="text-gray-500 text-sm">Win Rate</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-cyber-dark border border-cyber-border">
                                <div className="text-2xl font-bold text-beast-gold mb-1">{active.stats.avgRR}</div>
                                <div className="text-gray-500 text-sm">Avg Return</div>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-cyber-dark border border-cyber-border">
                                <div className="text-lg font-bold text-white mb-1">{active.stats.bestPairs}</div>
                                <div className="text-gray-500 text-sm">Best Markets</div>
                            </div>
                        </div>

                        {/* CTA */}
                        {active.id === 'retail-beast' && (
                            <div className="text-center">
                                <GlowButton href="/pricing">
                                    Download Free MT5 Indicator
                                </GlowButton>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Math Section */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto">
                    <h2 className="heading-cyber text-3xl text-white text-center mb-12">
                        The Math <span className="text-beast-green">Behind the Edge</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mathConcepts.map((concept, i) => (
                            <div key={i} className="glass-card rounded-xl p-6 text-center">
                                <h3 className="font-medium text-white mb-3">{concept.name}</h3>
                                <div className="font-mono text-beast-green text-lg mb-3 p-3 rounded-lg bg-cyber-dark border border-cyber-border">
                                    {concept.formula}
                                </div>
                                <p className="text-gray-400 text-sm">{concept.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hybrid Strategy */}
            <section className="section-padding">
                <div className="container-narrow mx-auto">
                    <div className="glass-card rounded-2xl p-8 md:p-12 border-beast-green/30">
                        <div className="text-center mb-8">
                            <span className="text-4xl mb-4 block">🔥</span>
                            <h2 className="heading-cyber text-3xl text-white mb-4">
                                The Ultimate <span className="gradient-text">Hybrid Strategy</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Combine all three strategies for maximum edge. Here&apos;s how the pros do it.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-medium text-beast-green flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-beast-green/20 flex items-center justify-center text-xs">B</span>
                                    Beginner Hybrid
                                </h3>
                                <ol className="space-y-2 text-gray-300 text-sm">
                                    <li>1. Use Retail Beast for signal generation</li>
                                    <li>2. Check funding rate direction before entry</li>
                                    <li>3. Hold positions through positive funding</li>
                                    <li>4. Exit on Beast trail-stop signal</li>
                                </ol>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-beast-gold flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-beast-gold/20 flex items-center justify-center text-xs">P</span>
                                    Pro Hybrid
                                </h3>
                                <ol className="space-y-2 text-gray-300 text-sm">
                                    <li>1. Low-latency execute on Beast confluence</li>
                                    <li>2. Predict funding shift with ML model</li>
                                    <li>3. Gamma scalp basis during hold</li>
                                    <li>4. Quantum optimize multi-leg positions</li>
                                </ol>
                            </div>
                        </div>

                        <div className="mt-8 p-6 rounded-xl bg-cyber-dark border border-beast-green/30 text-center">
                            <div className="text-3xl font-bold text-beast-green mb-2">380-1,400% Annualized</div>
                            <div className="text-gray-400">Potential returns with full hybrid implementation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto text-center">
                    <h2 className="heading-cyber text-3xl md:text-4xl text-white mb-4">
                        Ready to <span className="text-beast-green">Unleash the Beast?</span>
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Start with the free MT5 indicator and work your way up. The edge is waiting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GlowButton href="/pricing">
                            Get Started Free
                        </GlowButton>
                        <GlowButton href="/docs" variant="outline">
                            Read the Docs
                        </GlowButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
