'use client';
import { GlowButton } from '@/components/Marketing';
import Link from 'next/link';

export default function MentalModelPage() {
    return (
        <div className="relative pt-24 pb-12 min-h-screen">
            <div className="absolute inset-0 bg-grid opacity-20 fixed pointer-events-none" />

            <div className="container-narrow mx-auto px-4 relative z-10">

                <div className="text-center mb-8">
                    <h1 className="heading-cyber text-3xl md:text-5xl text-white mb-4">
                        THE ONE CANDLE THAT MATTERS
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        "I don't trade direction. I trade failure."
                    </p>

                    {/* NOT GAMBLING REFRAME */}
                    <div className="glass-card inline-block text-left max-w-2xl p-6 border-l-4 border-beast-gold bg-beast-gold/5">
                        <p className="text-white font-medium">
                            <span className="text-beast-gold font-bold uppercase mr-2">This is not gambling.</span>
                            Gambling is entering without defined risk, invalidation, or asymmetry.
                            This model defines all three <span className="italic">before</span> you click.
                        </p>
                    </div>
                </div>

                {/* VISUAL MODEL CARD */}
                <div className="glass-card rounded-2xl p-4 md:p-12 border border-beast-green/30 bg-black/40 max-w-3xl mx-auto mb-12">

                    {/* The Chart Visualization */}
                    <div className="aspect-[4/3] md:aspect-[16/9] bg-[#0c0c0c] rounded-xl border border-gray-800 relative overflow-hidden mb-6 shadow-2xl">
                        {/* Grid Lines */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="absolute inset-0 flex items-center justify-center translate-y-8 md:translate-y-0">
                            <div className="relative w-64 h-64">

                                {/* 1. Liquidity Line */}
                                <div className="absolute top-[30%] left-[-20%] right-[-20%] h-px bg-gray-500 border-t border-dashed opacity-50"></div>
                                <div className="absolute top-[26%] right-0 text-xs text-gray-500 font-mono">LIQUIDITY (EQUAL HIGHS)</div>

                                {/* 2. The Sweep Candle (Green/White up) */}
                                <div className="absolute top-[20%] left-[30%] w-4 h-[40%] bg-gray-600"></div> {/* Body */}
                                <div className="absolute top-[10%] left-[calc(30%+7px)] w-0.5 h-[60%] bg-gray-600"></div> {/* Wick */}

                                {/* 3. The ENGULFING KILL Candle (Red/Down) */}
                                <div className="absolute top-[20%] left-[45%] w-6 h-[50%] bg-beast-green shadow-[0_0_20px_rgba(34,197,94,0.4)] z-10 animate-pulse"></div> {/* Body */}
                                <div className="absolute top-[15%] left-[calc(45%+11px)] w-0.5 h-[60%] bg-beast-green"></div> {/* Wick */}

                                {/* Labels */}
                                <div className="absolute top-[-10%] left-[45%] text-beast-green text-xs font-bold text-center">
                                    THE SIGNAL<br />↓
                                </div>

                                {/* Entry Line */}
                                <div className="absolute top-[70%] left-[45%] right-[-20%] h-px bg-white/20"></div>
                                <div className="absolute top-[72%] right-[-10%] text-xs text-white font-mono">ENTRY</div>

                                {/* Stop Line */}
                                <div className="absolute top-[10%] left-[45%] right-[-20%] h-px bg-red-500/30"></div>
                                <div className="absolute top-[6%] right-[-10%] text-xs text-red-400 font-mono">STOP</div>

                            </div>
                        </div>
                    </div>

                    {/* BOLD ENTRY RULE */}
                    <div className="text-center mb-10 pb-8 border-b border-gray-800">
                        <p className="text-white text-lg">
                            <span className="text-beast-green font-bold mr-2">ENTRY RULE (NON-NEGOTIABLE):</span>
                            You enter <span className="underline decoration-beast-green decoration-2 underline-offset-4 font-bold">on the close of the engulfing candle</span> that forms <em>after</em> the liquidity sweep.
                        </p>
                    </div>

                    {/* CONCEPT BREAKDOWN */}
                    <div className="space-y-8 mb-12">
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-xs font-bold text-white mt-1">1</div>
                            <div>
                                <h3 className="text-white font-bold">Liquidity Sweep</h3>
                                <p className="text-gray-400 text-sm">Price pushes above a previous high. Traders chase the breakout. They are trapped.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded bg-beast-green flex items-center justify-center text-xs font-bold text-black mt-1">2</div>
                            <div>
                                <h3 className="text-white font-bold">Engulfing Close</h3>
                                <p className="text-gray-400 text-sm">The very next candle (or shortly after) closes forcefully back inside the range. This proves the breakout failed.</p>
                            </div>
                        </div>

                        {/* MECHANICAL EXECUTION */}
                        <div className="bg-cyber-dark p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <span className="text-beast-green">⚡</span> Execution (Mechanical)
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2">
                                    <span className="text-gray-500 font-mono">ENTRY:</span>
                                    <span className="text-white font-medium">Close of the engulfing candle</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gray-500 font-mono">STOP:</span>
                                    <span className="text-white font-medium">Beyond the wick that swept liquidity</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gray-500 font-mono">TARGET:</span>
                                    <span className="text-white font-medium">Fixed 3R (no scaling, no discretion)</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-400 italic">
                                If price does not give you <span className="text-white font-bold">at least 2.5–3R</span>, you skip the trade.
                            </div>
                        </div>
                    </div>

                    {/* DO NOT BOX */}
                    <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl mb-12">
                        <h3 className="text-red-400 font-bold mb-4 uppercase tracking-wider text-sm">Do Not:</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">✕</span> Enter mid-candle
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">✕</span> Enter because &quot;it looks bullish&quot;
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">✕</span> Wait for EMA/BB confirmation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500">✕</span> Scale in or move stops
                            </li>
                            <li className="flex items-center gap-2 sm:col-span-2">
                                <span className="text-red-500">✕</span> Ask where price is going (You don&apos;t care)
                            </li>
                        </ul>
                    </div>

                    {/* FAQ: Entry vs Confirmation */}
                    <div className="border-l-2 border-beast-green pl-6 py-2 mb-8">
                        <h3 className="text-white font-bold mb-1">Entry vs. Confirmation</h3>
                        <p className="text-gray-300 text-sm mb-2">
                            <span className="text-white font-bold">Price creates the entry. Indicators only confirm permission.</span>
                        </p>
                        <p className="text-gray-500 text-xs text-balance">
                            Do not wait for an indicator to say "Sell." Wait for the candle to fail. Check the indicators only to see if you are allowed to pull the trigger.
                        </p>
                    </div>

                </div>

                {/* SURVIVAL CALLOUT */}
                <div className="max-w-xl mx-auto mb-16">
                    <div className="glass-card rounded-xl p-6 border-t-2 border-orange-500 text-center">
                        <h3 className="text-orange-400 font-bold uppercase tracking-wide text-sm mb-4">
                            Small Account Survival Rule
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6 text-left max-w-sm mx-auto">
                            <div className="flex gap-2">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
                                Max 2–4 trades/session
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
                                Risk ≤1% per trade
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
                                Stop after 2 losses
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
                                Journal compliance
                            </div>
                        </div>
                        <Link href="/survival-mode" className="text-xs text-orange-400 hover:text-orange-300 underline underline-offset-4 decoration-orange-500/50">
                            Read Full Survival Mode Rules →
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <GlowButton href="/journal" size="lg">
                        I Understand. Let Me Trade.
                    </GlowButton>
                </div>

            </div>
        </div>
    );
}
