'use client';
import Image from 'next/image';
import { GlowButton } from '@/components/Marketing';

export default function StartHerePage() {
    return (
        <div className="relative pt-24 pb-12">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30 fixed pointer-events-none" />
            <div className="absolute inset-0 bg-radial-glow fixed pointer-events-none" />

            <div className="container-narrow mx-auto px-4 relative z-10">

                {/* HERO */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beast-green/10 border border-beast-green/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse" />
                        <span className="text-sm text-beast-green font-medium">Field Notes: Entry #001</span>
                    </div>
                    <h1 className="heading-cyber text-4xl md:text-6xl text-white mb-6">
                        START HERE. <span className="text-red-400">STOP GUESSING.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        You don't need another strategy. You need an execution trigger.
                    </p>
                </div>

                {/* SECTION 1: THE PROBLEM (Post 1) */}
                <section className="mb-24 animate-slide-up">
                    <div className="glass-card rounded-2xl p-8 md:p-12 border border-beast-green/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-9xl font-bold font-mono text-white">01</span>
                        </div>

                        <h2 className="heading-cyber text-2xl md:text-3xl text-white mb-6">
                            Why You Freeze When It's Time to Click
                        </h2>

                        <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                            <p>
                                If you know what an Order Block is, understand Fair Value Gaps, and can spot a Break of Structure—but you
                                still hesitate when price hits your zone—you are not stupid.
                            </p>
                            <p>
                                You are suffering from <span className="text-white font-bold">Execution Paralysis</span>.
                            </p>
                            <p>
                                Most ICT traders are taught <em>Structure Literacy</em> (reading the map), but not <em>Execution Timing</em> (pulling the trigger).
                                You stare at a zone waiting for "confirmation," but you don't actually know what that looks like.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li>So you enter late.</li>
                                <li>You widen your stops to "be safe."</li>
                                <li>You cut winners early because you're scared.</li>
                            </ul>
                            <div className="border-l-4 border-beast-green pl-6 py-2 my-6 bg-beast-green/5 rounded-r-lg">
                                <p className="text-white font-bold text-lg italic">
                                    "The market does not reward understanding.<br />It rewards decisive reaction to failure."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: THE SOLUTION (Post 2) */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="heading-cyber text-3xl text-white mb-6">
                                The One Candle That Matters
                            </h2>
                            <p className="text-gray-300 mb-6">
                                Stop trying to predict where price will go. Start waiting for price to prove everyone else wrong.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-beast-green flex items-center justify-center text-black font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="text-white font-bold">Liquidity Sweep</h4>
                                        <p className="text-sm text-gray-400">Price grabs a high or low. Retail traders get trapped.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-beast-green flex items-center justify-center text-black font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="text-white font-bold">The Engulfing Rejection</h4>
                                        <p className="text-sm text-gray-400">Price forcefully closes back inside the range. This is EVIDENCE.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-beast-green flex items-center justify-center text-black font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="text-white font-bold">The Entry</h4>
                                        <p className="text-sm text-gray-400">Market execution on the close. Stop loss above the wick.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="aspect-square bg-cyber-dark rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-beast-green/5 group-hover:bg-beast-green/10 transition-all border border-beast-green/30 m-4 rounded-lg flex flex-col items-center justify-center p-8 text-center">
                                    <p className="text-beast-green font-mono text-sm mb-2">[ VISUAL MODEL ]</p>
                                    <div className="w-full h-1/2 relative mb-4">
                                        {/* CSS Drawing of the setup */}
                                        <div className="absolute bottom-1/4 left-1/4 w-4 h-16 bg-red-400 opacity-50"></div>
                                        <div className="absolute bottom-1/4 left-1/4 ml-6 w-4 h-24 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                                        <div className="absolute bottom-[calc(25%+6rem)] left-[calc(25%+1.5rem)] w-0.5 h-8 bg-green-500"></div>

                                        {/* Sweep Line */}
                                        <div className="absolute bottom-[calc(25%+4rem)] left-0 right-0 h-px bg-gray-500 border-t border-dashed"></div>
                                        <div className="absolute right-0 bottom-[calc(25%+4.5rem)] text-xs text-gray-500">LIQUIDITY</div>
                                    </div>
                                    <p className="text-white font-bold">The Sweep + Engolf</p>
                                    <p className="text-xs text-gray-400 mt-2">"I don't trade direction. I trade failure."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: THE ENFORCER (Journal) */}
                <section className="mb-16 text-center">
                    <div className="glass-card rounded-2xl p-8 md:p-12 border border-beast-gold/20 bg-gradient-to-b from-beast-gold/5 to-transparent">
                        <h2 className="heading-cyber text-2xl md:text-4xl text-white mb-6">
                            Knowledge is Worthless Without Discipline
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            You now have the trigger. But do you have the patience to wait for it?
                            The RetailBeastFX Journal doesn't just track your P&L. It tracks your compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <GlowButton href="/journal" size="lg">
                                Open The Enforcer (Journal)
                            </GlowButton>
                            <GlowButton href="/field-notes" variant="secondary">
                                Read All Field Notes
                            </GlowButton>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
