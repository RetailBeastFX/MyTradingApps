import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { GlowButton } from '@/components/Marketing';

// Blog post content database
const blogPosts: Record<string, {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    content: string;
}> = {
    'journal-hacks-80-win-rate': {
        title: 'Journal Hacks for 80% Win Rates',
        excerpt: 'How disciplined journaling transformed my trading from breakeven to consistently profitable.',
        date: 'Dec 10, 2024',
        readTime: '5 min read',
        category: 'Strategy',
        author: 'RBFX Team',
        content: `
## The Wake-Up Call

I was stuck at breakeven for two years. Taking trades, sometimes winning, sometimes losing, but never really getting anywhere. Sound familiar?

The breakthrough came when I started treating my trading journal not as a chore, but as my most valuable trading tool.

## The 3 Journal Hacks That Changed Everything

### 1. Log BEFORE You Enter

Most traders log after the trade is done. By then, you've already forgotten the emotional state you were in.

**The fix:** Open your journal FIRST. Write down:
- What setup are you seeing?
- What's the confluence count?
- How do you FEEL right now?

If you can't clearly articulate the setup, don't take the trade.

### 2. Grade Every Single Trade

Not just Win or Loss. Use a grading system:

- **A+**: Perfect execution, full confluence, proper risk
- **A**: Good setup, minor execution flaw
- **B**: Decent setup, some rules bent
- **C**: FOMO trade, revenge trade, or rule break
- **F**: Pure gambling

Here's the key insight: **Your win rate on A+ trades is probably 75-85%.** Your overall win rate is lower because of those C and F trades dragging you down.

### 3. Weekly Review Ritual

Every Sunday, I spend 30 minutes reviewing:
- Total trades taken
- Grade distribution (how many A's vs C's?)
- Win rate by setup type
- Win rate by session (Killzone performance)

The RetailBeastFX Journal does most of this automatically with the analytics dashboard.

## The Results

After 3 months of disciplined journaling:

| Metric | Before | After |
|--------|--------|-------|
| Win Rate | 52% | 78% |
| Average RR | 1.5R | 2.3R |
| Trades/Week | 25+ | 8-12 |
| Monthly P&L | Breakeven | +15R average |

The secret wasn't finding a better indicator. It was **eliminating the bad trades** through accountability.

## Start Today

If you're not journaling, you're gambling. The RetailBeastFX Journal makes it painless - log trades in seconds, see your analytics update in real-time, and finally get the data you need to level up.

Your 80% win rate is hiding under those C-grade trades. Find them. Eliminate them. Win.
        `,
    },
    'rbfx-journal-crypto-week': {
        title: 'RBFX + Journal: A Week in Crypto',
        excerpt: 'Detailed breakdown of 12 trades taken on BTC/ETH using Fresh Order Blocks and the trading journal.',
        date: 'Dec 8, 2024',
        readTime: '8 min read',
        category: 'Case Study',
        author: 'Marcus T.',
        content: `
## The Setup

This is a transparent breakdown of one week trading BTC and ETH using the RetailBeastFX indicator and journal. No cherry-picking - every trade logged.

**Week of December 2-6, 2024**
- Pairs: BTC/USDT, ETH/USDT
- Timeframe: 15M entries, 1H bias
- Risk: 1% per trade
- Platform: Bybit

## Trade Log

### Trade 1: BTC Long (Monday, Dec 2)
- **Setup:** Fresh Bullish OB + NY Session Open
- **Entry:** $96,450
- **Stop:** $95,800 (below OB)
- **Target:** $98,000
- **Grade:** A
- **Result:** ✅ +2.4R

Price wicked into the OB during NY open, got a clean entry with the Quantum Lock confirmation. Textbook.

### Trade 2: ETH Short (Monday, Dec 2)
- **Setup:** Bearish FVG rejection
- **Entry:** $3,620
- **Stop:** $3,680
- **Target:** $3,500
- **Grade:** B (entered slightly early)
- **Result:** ✅ +1.8R

Good setup but I jumped the gun on entry. Could have had better RR with patience.

### Trade 3: BTC Long (Tuesday, Dec 3)
- **Setup:** London Killzone sweep
- **Entry:** $97,100
- **Stop:** $96,500
- **Target:** $99,000
- **Grade:** C (FOMO after missing move)
- **Result:** ❌ -1R

This is exactly what the journal is for. I was chasing. The indicator showed the setup but I was late and stopped out on a retest.

### Trade 4-7: Multiple Scalps (Wednesday)
Four quick scalps during NY session, all Fresh OB setups:
- ✅ +1.2R
- ✅ +0.8R
- ❌ -0.5R (partial)
- ✅ +1.5R

**Net Wednesday:** +3R

### Trade 8: ETH Long (Thursday, Dec 5)
- **Setup:** Asian session low sweep + Bullish OB
- **Entry:** $3,480
- **Stop:** $3,420
- **Target:** $3,600
- **Grade:** A+
- **Result:** ✅ +2R

Perfect setup. Low volume accumulation, fresh OB, clean break during London.

### Trade 9-10: Revenge Trades (Thursday)
After a small loss, I took two unplanned trades:
- ❌ -1R
- ❌ -0.5R

**Journal note:** "Emotional state compromised after loss. Should have walked away."

This is why grading matters. These were F-grade trades.

### Trade 11-12: Friday Finish
- BTC Long: ✅ +1.8R (A grade)
- ETH Short: ✅ +1.2R (A grade)

Came back Friday with a clear head, stuck to the process.

## Weekly Summary

| Metric | Value |
|--------|-------|
| Total Trades | 12 |
| Winners | 9 |
| Losers | 3 |
| Win Rate | 75% |
| Total R | +10.7R |
| Best Grade | A+ (Trade 8) |
| Worst Trades | 9-10 (Revenge) |

## Key Takeaways

1. **Fresh OBs work.** 8 out of 9 winners were Fresh OB setups.
2. **Revenge trading is real.** Cost me 1.5R and mental capital.
3. **The journal catches patterns.** Without logging, I wouldn't have seen the revenge trading pattern.
4. **Crypto Killzones matter.** Best trades came during session opens.

## The Bottom Line

10.7R in a week is solid, but it could have been 12.2R without the emotional trades. That's the power of the journal - it shows you exactly where you're leaking profits.

Hunt liquidity. Log everything. Learn from the data.
        `,
    },
    'killzone-mastery': {
        title: 'Mastering Killzone Sessions',
        excerpt: 'Why timing matters more than most traders think, and how to use RBFX killzones effectively.',
        date: 'Dec 5, 2024',
        readTime: '6 min read',
        category: 'Education',
        author: 'RBFX Team',
        content: `
## What Are Killzones?

Killzones are high-probability trading windows where institutional activity is concentrated. They're called "killzones" because this is where retail traders get hunted - and where smart traders hunt liquidity.

The three major Killzones are:

1. **Asian Session (00:00 - 04:00 UTC)** - Range building
2. **London Session (07:00 - 10:00 UTC)** - First major move
3. **New York Session (12:00 - 15:00 UTC)** - Continuation or reversal

## Why Killzones Matter

Here's a stat that will change how you trade:

> **78% of daily highs/lows are formed during Killzone hours.**

That means if you're trading during off-hours, you're fighting against lower probability setups.

## The Asian Session Strategy

Asian session is about **building the range**, not taking trades.

During Asian hours:
- Mark the high and low of the range
- Identify any Fresh OBs formed
- Note consolidation zones for potential FVG fills

**The play:** Wait for London to sweep one side of the Asian range, then look for reversal setups.

## The London Killzone

London is where the real action starts. Here's the playbook:

### Step 1: Wait for the Sweep
Smart money will hunt the Asian session liquidity first. Wait for price to:
- Take out the Asian high OR
- Take out the Asian low

### Step 2: Look for the Reversal
After the sweep, watch for:
- Fresh Order Block formation
- Fair Value Gap creation
- Quantum Lock™ confirmation

### Step 3: Enter with Purpose
Your entry should be at or near the Fresh OB. Stop loss below the OB. Target the opposite end of the Asian range (or further).

## The New York Killzone

NY session can go two ways:

### Continuation
If London established a clear trend, NY often continues it. Look for:
- Pullbacks to Fresh OBs formed in London
- FVG fills that align with the trend

### Reversal
If NY comes in and sweeps London's high/low, be ready for reversal setups. This is the "NY Reversal" pattern.

## RBFX Killzone Settings

In the RetailBeastFX indicator, you can customize:

- **Session times** for your broker's timezone
- **Visual overlays** to shade the Killzone periods
- **Alerts** when Killzones begin

The default settings work for most brokers, but if you're on a GMT+2 broker (like most forex brokers), make sure your Asian session starts at 02:00 local time.

## The Journal Connection

Here's where it gets powerful: **track your performance by session**.

The RBFX Journal automatically logs which session each trade was taken in. After a month, you'll have data like:

- "I'm 82% win rate in NY but only 61% in Asian"
- "My best RR trades come from London sweeps"
- "I should stop trading the Asian session entirely"

This is how you find YOUR edge, not someone else's.

## Quick Reference

| Session | Best For | Avoid |
|---------|----------|-------|
| Asian | Range marking, planning | Taking trades |
| London | Sweep reversals, first move | Fighting the trend |
| NY | Continuations, NY reversals | Overtrading after 3pm |

## Start Hunting

Enable Killzones in your RBFX indicator, mark your sessions, and start logging which times produce your best trades. The data will show you when to trade and when to sleep.

Your edge is hiding in your session data. Go find it.
        `,
    },
    'fresh-ob-vs-stale': {
        title: 'Fresh vs Stale Order Blocks',
        excerpt: 'Not all order blocks are created equal. Learn why fresh OBs have higher probability.',
        date: 'Dec 3, 2024',
        readTime: '4 min read',
        category: 'Education',
        author: 'RBFX Team',
        content: `
## The Order Block Problem

Every indicator marks order blocks. But here's what most don't tell you:

> **A stale order block is just a rectangle on your chart.**

After an OB has been tested once, the institutional orders that created it are likely filled. Trading it again is like fishing in a pond that's already been cleaned out.

## What Makes an OB "Fresh"?

A Fresh Order Block has three characteristics:

1. **Untested** - Price hasn't returned to it since creation
2. **Recent** - Formed within the last 20-50 candles (timeframe dependent)
3. **Impulsive** - Created by a strong, momentum-driven move

The RetailBeastFX indicator automatically tracks mitigation status, showing you:
- 🟢 **FRESH** - Completely unmitigated
- 🟡 **PARTIAL** - Wicked into but not fully tested
- 🔴 **MITIGATED** - Already tested, lower probability

## The Numbers Don't Lie

From our community's journal data (5,000+ logged trades):

| OB Type | Win Rate | Avg RR |
|---------|----------|--------|
| Fresh OB | 74% | 2.3R |
| Partial OB | 58% | 1.8R |
| Stale OB | 41% | 1.4R |

**Fresh OBs are almost twice as reliable as stale ones.**

## How to Identify Fresh OBs

### Visual Checklist

1. ✅ Strong impulse away from the zone
2. ✅ Clear imbalance (FVG) created
3. ✅ No subsequent wicks into the zone
4. ✅ Zone is within recent price action

### The Freshness Test

Ask yourself: "Has any candle body or wick touched this zone since it was created?"

If yes → It's not fresh
If no → It's a high-probability setup

## Trading Fresh OBs

### Entry Strategy

1. Wait for price to approach the Fresh OB
2. Look for a reaction candle (rejection wick, engulfing, etc.)
3. Enter on the confirmation, stop below/above the OB
4. Target the next liquidity pool or OB in the opposite direction

### Position Sizing

Because Fresh OBs have higher probability:
- Consider slightly larger position sizes (if risk management allows)
- Target wider RR ratios (Fresh OBs often produce 3R+ moves)

## Common Mistakes

### 1. Trading Every OB
Just because the indicator marks it doesn't mean you trade it. Focus on Fresh only.

### 2. Ignoring Context
A Fresh OB against the higher timeframe trend is less reliable. Always align with the HTF bias.

### 3. Not Logging Results
If you're not tracking Fresh vs Stale win rates in your journal, you're missing critical data.

## RBFX Fresh OB Detection

The RetailBeastFX indicator does the heavy lifting:

- **Auto-detection** of OB formation
- **Real-time mitigation tracking** 
- **Visual status labels** (FRESH, PARTIAL, MITIGATED)
- **Alerts** when price approaches Fresh zones

Combined with the journal, you can track exactly which Fresh OB setups work best for your trading style.

## The Bottom Line

Stop trading stale order blocks. They're where retail traders lose money trying to catch moves that already happened.

Hunt the fresh zones. Log your trades. Watch your win rate climb.

**Fresh > Stale. Always.**
        `,
    },
    'expectancy-tracking': {
        title: 'Why Expectancy Beats Win Rate',
        excerpt: 'The most important metric most traders ignore. How to use the journal to find your real edge.',
        date: 'Dec 1, 2024',
        readTime: '7 min read',
        category: 'Strategy',
        author: 'RBFX Team',
        content: `
## The Win Rate Obsession

Every new trader asks the same question: "What's your win rate?"

But here's the truth that took me three years to learn:

> **Win rate is a vanity metric. Expectancy is what pays the bills.**

You can have a 40% win rate and be extremely profitable. You can have an 80% win rate and blow your account. Let me show you why.

## What Is Expectancy?

Expectancy is your average profit per trade, expressed in R (risk units).

**The Formula:**
\`\`\`
Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)
\`\`\`

Or in R terms:
\`\`\`
Expectancy = (Win% × Avg Winner in R) - (Loss% × 1R)
\`\`\`

## Two Traders, Same Win Rate

### Trader A: The Scalper
- Win Rate: 70%
- Average Winner: 0.8R
- Average Loser: 1R

**Expectancy:** (0.70 × 0.8) - (0.30 × 1) = 0.56 - 0.30 = **+0.26R per trade**

### Trader B: The Sniper
- Win Rate: 45%
- Average Winner: 2.5R
- Average Loser: 1R

**Expectancy:** (0.45 × 2.5) - (0.55 × 1) = 1.125 - 0.55 = **+0.575R per trade**

Trader B has a lower win rate but **more than DOUBLE the expectancy**.

Over 100 trades:
- Trader A: +26R
- Trader B: +57.5R

Win rate is meaningless without context.

## Finding Your Expectancy by Setup

This is where the RBFX Journal becomes invaluable. Don't just track overall expectancy - track it **by setup type**.

After 3 months of logging, you might discover:

| Setup | Win Rate | Avg RR | Expectancy |
|-------|----------|--------|------------|
| Fresh OB + Killzone | 78% | 2.1R | +1.42R |
| FVG Fill | 62% | 1.5R | +0.55R |
| Random Breakout | 48% | 1.2R | -0.10R |
| Revenge Trades | 25% | 0.8R | -0.55R |

Now you know:
- **Double down on:** Fresh OB + Killzone trades
- **Keep taking:** FVG fills
- **Eliminate:** Random breakouts and revenge trades

This is how you optimize your trading systematically.

## The Minimum Viable Expectancy

For a trading strategy to be worth your time:

- **Minimum:** +0.2R per trade
- **Good:** +0.5R per trade
- **Excellent:** +1.0R+ per trade

If your expectancy is below +0.2R, the edge is too thin. Transaction costs and slippage will eat your profits.

## How to Track in the Journal

The RetailBeastFX Journal calculates this automatically, but here's what to log:

1. **Entry Price**
2. **Stop Loss** (this defines 1R)
3. **Exit Price**
4. **Result in R** (calculated automatically)
5. **Setup Type** (dropdown selection)

After 50+ trades, the analytics dashboard shows:
- Overall expectancy
- Expectancy by setup
- Expectancy by session
- Expectancy by day of week

## The Expectancy Mindset

Once you understand expectancy, trading psychology shifts:

- A losing trade isn't a failure if it was an A+ setup
- A winning trade isn't a success if it was a C-grade gamble
- Your job is to take high-expectancy setups and let math work

You stop trying to win every trade. You start trying to **find and repeat high-expectancy patterns**.

## Action Steps

1. **Log 50 trades** minimum with full setup tags
2. **Calculate expectancy** by setup type
3. **Eliminate** anything below +0.2R
4. **Focus** on your highest expectancy setups

The journal will show you exactly where your edge lives. All you have to do is log honestly and follow the data.

Stop chasing win rate. Start hunting expectancy.
        `,
    },
    'revenge-trading-cure': {
        title: 'How I Cured Revenge Trading',
        excerpt: 'A personal story of how journal accountability stopped my worst trading habit.',
        date: 'Nov 28, 2024',
        readTime: '5 min read',
        category: 'Psychology',
        author: 'Anonymous Trader',
        content: `
## My Confession

I used to be a revenge trader. Not occasionally - chronically.

One loss would spiral into three. A red day would become a blown week. I'd know I was doing it while doing it, and I still couldn't stop.

This is the story of how I finally broke the cycle.

## The Pattern

Every revenge trading session followed the same script:

1. Take a good setup, it loses
2. Feel frustrated, want to "make it back"
3. Take a lower-quality setup
4. It also loses
5. Now I'm angry AND down 2R
6. Take anything that looks like it might move
7. Blow up the day

Sound familiar?

## The Wake-Up Call

I started using the RBFX Journal not because I thought it would fix me, but because I wanted better analytics.

But after two weeks, I noticed something in my trade grades:

**Monday:** A, A, B, A, F, F, F
**Tuesday:** A, B, A
**Wednesday:** A, A, C, F, F, F, F

Every time I had an F-grade trade, more F's followed. Every single time.

The data was undeniable. My journal had caught my addiction.

## The Rule That Saved Me

I implemented one simple rule:

> **After any C or F grade trade, I close my platform for 2 hours minimum.**

Not optional. Not "I'll try." A hard rule.

### Week 1: Fighting the Urge

The first week was brutal. After a loss, every fiber of my being wanted to trade again. I'd close the platform, stare at my phone, check Twitter, anything to distract myself.

### Week 2: Starting to See Results

By week two, something shifted. After a loss, closing the platform started to feel like relief instead of punishment. The 2-hour break gave me time to ask:

- Was that setup actually good?
- Was I tilted before I even entered?
- Is now a good time to trade at all?

### Week 3: The Habit Breaks

By week three, the urge was fading. After a loss, I *wanted* to step away. The revenge trading loop was broken.

## The Journal Accountability System

Here's how I set it up:

### 1. Honest Grading
Every trade gets a grade. No lying. No "that was an A-" when it was really a C.

### 2. Visual Pattern Recognition
The journal shows grade distribution over time. When you see FFFFF in a row, you can't deny what happened.

### 3. The 2-Hour Rule (Enforced)
I set a phone timer. Platform stays closed until it rings.

### 4. Weekly Review
Every Sunday, I look at my grade patterns. If I see clusters of bad grades, I know something's wrong mentally.

## My Results Before/After

| Metric | Revenge Era | Post-Cure |
|--------|-------------|-----------|
| Trades/Week | 35+ | 12-15 |
| F-Grade Trades | 30% | 5% |
| Win Rate | 41% | 68% |
| Weekly P&L | -5R avg | +8R avg |

The same strategy. The same indicator. The same market conditions.

The only difference was **eliminating emotional trades**.

## The Real Cure

Revenge trading isn't a strategy problem - it's an accountability problem.

When you have to write down "F - Revenge trade after loss" and then see it in your weekly review, it's a mirror you can't look away from.

The journal doesn't judge. It just tells the truth. And the truth is what finally set me free.

## Your Turn

If you're stuck in the revenge loop:

1. Start grading trades honestly
2. Create a hard rule (2-hour break after any C/F trade)
3. Review your patterns weekly
4. Don't give up - the first two weeks are the hardest

The cure exists. The journal is the prescription. You just have to take it.

One trade at a time.
        `,
    },
};

export function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | RetailBeastFX Blog`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = Object.entries(blogPosts)
        .filter(([slug, p]) => slug !== params.slug && p.category === post.category)
        .slice(0, 2);

    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden pb-8">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-glow" />

                <div className="container-narrow mx-auto relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-beast-green transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>

                    <span className="inline-block px-3 py-1 rounded-full bg-beast-green/20 text-beast-green text-xs font-medium mb-4">
                        {post.category}
                    </span>

                    <h1 className="heading-cyber text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        {post.title}
                    </h1>

                    <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-beast-green/20 flex items-center justify-center">
                                <span className="text-beast-green text-xs font-bold">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="px-4 pb-20">
                <div className="container-narrow mx-auto">
                    <article className="glass-card rounded-2xl p-8 md:p-12">
                        {/* Mascot decoration */}
                        <div className="float-right ml-6 mb-4 hidden lg:block opacity-20">
                            <Image
                                src="/mascot/beast-pose-2-card.png"
                                alt=""
                                width={100}
                                height={100}
                                className="drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]"
                            />
                        </div>

                        <div
                            className="prose prose-invert prose-lg max-w-none
                                prose-headings:font-orbitron prose-headings:text-white
                                prose-h2:text-2xl prose-h2:text-beast-green prose-h2:mt-12 prose-h2:mb-6
                                prose-h3:text-xl prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4
                                prose-p:text-gray-300 prose-p:leading-relaxed
                                prose-strong:text-white
                                prose-a:text-beast-green prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-beast-green prose-blockquote:bg-beast-green/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                                prose-code:text-beast-green prose-code:bg-cyber-dark prose-code:px-2 prose-code:py-1 prose-code:rounded
                                prose-pre:bg-cyber-dark prose-pre:border prose-pre:border-beast-green/20
                                prose-table:border-collapse
                                prose-th:bg-cyber-dark prose-th:text-beast-green prose-th:p-3 prose-th:border prose-th:border-beast-green/20
                                prose-td:p-3 prose-td:border prose-td:border-beast-green/10
                                prose-ul:list-disc prose-ul:text-gray-300
                                prose-ol:list-decimal prose-ol:text-gray-300
                                prose-li:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
                        />
                    </article>

                    {/* Share & CTA */}
                    <div className="mt-12 glass-card rounded-2xl p-8 text-center">
                        <h3 className="heading-cyber text-xl text-white mb-4">
                            Ready to Start Journaling?
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Track your trades, find your edge, and hunt liquidity with mechanical precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <GlowButton href="/journal">
                                Open Trading Journal
                            </GlowButton>
                            <GlowButton href="/pricing" variant="outline">
                                View Pricing
                            </GlowButton>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="heading-cyber text-xl text-white mb-6">
                                Related <span className="text-beast-green">Posts</span>
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map(([slug, relatedPost]) => (
                                    <Link key={slug} href={`/blog/${slug}`} className="block group">
                                        <article className="glass-card rounded-xl p-6 h-full hover:border-beast-green/30 transition-all">
                                            <span className="text-xs text-beast-green font-medium">{relatedPost.category}</span>
                                            <h4 className="heading-cyber text-lg text-white mt-2 mb-3 group-hover:text-beast-green transition-colors">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

// Simple markdown-to-HTML converter
function formatMarkdown(content: string): string {
    return content
        // Headers
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Blockquotes
        .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
        // Unordered lists
        .replace(/^- (.*$)/gm, '<li>$1</li>')
        // Ordered lists
        .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
        // Tables (basic)
        .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(c => c.trim());
            if (cells.some(c => c.includes('---'))) return '';
            const isHeader = !match.includes('---|');
            const tag = isHeader ? 'th' : 'td';
            return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
        })
        // Wrap tables
        .replace(/(<tr>.*<\/tr>\n?)+/g, '<table>$&</table>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Line breaks
        .replace(/\n/g, '<br>')
        // Wrap in paragraph
        .replace(/^/, '<p>')
        .replace(/$/, '</p>')
        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, '')
        .replace(/<p><br><\/p>/g, '')
        // Wrap lists
        .replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>')
        // Checkmarks/emojis
        .replace(/✅/g, '<span class="text-beast-green">✅</span>')
        .replace(/❌/g, '<span class="text-red-500">❌</span>');
}
