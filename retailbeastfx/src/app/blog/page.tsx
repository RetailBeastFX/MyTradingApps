import Link from 'next/link';
import { GlowButton } from '@/components/Marketing';

const blogPosts = [
    {
        slug: 'journal-hacks-80-win-rate',
        title: 'Journal Hacks for 80% Win Rates',
        excerpt: 'How disciplined journaling transformed my trading from breakeven to consistently profitable.',
        date: 'Dec 10, 2024',
        readTime: '5 min read',
        category: 'Strategy',
        featured: true,
    },
    {
        slug: 'rbfx-journal-crypto-week',
        title: 'RBFX + Journal: A Week in Crypto',
        excerpt: 'Detailed breakdown of 12 trades taken on BTC/ETH using Fresh Order Blocks and the trading journal.',
        date: 'Dec 8, 2024',
        readTime: '8 min read',
        category: 'Case Study',
    },
    {
        slug: 'killzone-mastery',
        title: 'Mastering Killzone Sessions',
        excerpt: 'Why timing matters more than most traders think, and how to use RBFX killzones effectively.',
        date: 'Dec 5, 2024',
        readTime: '6 min read',
        category: 'Education',
    },
    {
        slug: 'fresh-ob-vs-stale',
        title: 'Fresh vs Stale Order Blocks',
        excerpt: 'Not all order blocks are created equal. Learn why fresh OBs have higher probability.',
        date: 'Dec 3, 2024',
        readTime: '4 min read',
        category: 'Education',
    },
    {
        slug: 'expectancy-tracking',
        title: 'Why Expectancy Beats Win Rate',
        excerpt: 'The most important metric most traders ignore. How to use the journal to find your real edge.',
        date: 'Dec 1, 2024',
        readTime: '7 min read',
        category: 'Strategy',
    },
    {
        slug: 'revenge-trading-cure',
        title: 'How I Cured Revenge Trading',
        excerpt: 'A personal story of how journal accountability stopped my worst trading habit.',
        date: 'Nov 28, 2024',
        readTime: '5 min read',
        category: 'Psychology',
    },
];

const categories = ['All', 'Strategy', 'Education', 'Case Study', 'Psychology', 'Updates'];

export default function BlogPage() {
    const featuredPost = blogPosts.find(p => p.featured);
    const regularPosts = blogPosts.filter(p => !p.featured);

    return (
        <div className="relative">
            {/* Hero */}
            <section className="section-padding relative overflow-hidden pb-12">
                <div className="absolute inset-0 bg-grid opacity-30" />

                <div className="container-wide mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="heading-cyber text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">RBFX</span>
                            <span className="text-beast-green"> Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Trading insights, strategy breakdowns, and journal tips from the RetailBeastFX community.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === 'All'
                                        ? 'bg-beast-green text-black'
                                        : 'bg-cyber-card border border-cyber-border text-gray-400 hover:text-white hover:border-beast-green/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="px-4 pb-12">
                    <div className="container-wide mx-auto">
                        <Link href={`/blog/${featuredPost.slug}`} className="block group">
                            <div className="glass-card rounded-2xl p-8 md:p-12 border-beast-green/20 hover:border-beast-green/40 transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <span className="inline-block px-3 py-1 rounded-full bg-beast-green/20 text-beast-green text-xs font-medium mb-4">
                                            Featured • {featuredPost.category}
                                        </span>
                                        <h2 className="heading-cyber text-2xl md:text-3xl text-white mb-4 group-hover:text-beast-green transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-400 mb-4">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>{featuredPost.date}</span>
                                            <span>•</span>
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-64 h-40 bg-cyber-surface rounded-xl flex items-center justify-center">
                                        <span className="text-6xl">📈</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="px-4 pb-20">
                <div className="container-wide mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                <article className="glass-card rounded-xl overflow-hidden h-full hover:border-beast-green/30 transition-all">
                                    <div className="h-40 bg-cyber-surface flex items-center justify-center">
                                        <span className="text-5xl">
                                            {post.category === 'Strategy' && '♟️'}
                                            {post.category === 'Education' && '📚'}
                                            {post.category === 'Case Study' && '📊'}
                                            {post.category === 'Psychology' && '🧠'}
                                            {post.category === 'Updates' && '🔔'}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs text-beast-green font-medium">{post.category}</span>
                                        <h3 className="heading-cyber text-lg text-white mt-2 mb-3 group-hover:text-beast-green transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <GlowButton variant="outline">
                            Load More Posts
                        </GlowButton>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding bg-cyber-dark">
                <div className="container-narrow mx-auto text-center">
                    <h2 className="heading-cyber text-2xl text-white mb-4">
                        Get Weekly <span className="text-beast-green">Trading Insights</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Subscribe for journal templates, strategy breakdowns, and exclusive tips.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-cyber-card border border-cyber-border rounded-lg text-white placeholder-gray-500 focus:border-beast-green focus:outline-none"
                        />
                        <GlowButton>Subscribe</GlowButton>
                    </form>
                </div>
            </section>
        </div>
    );
}
