import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    comingSoon?: boolean;
    highlighted?: boolean;
    className?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    comingSoon = false,
    highlighted = false,
    className = '',
}: FeatureCardProps) {
    return (
        <div
            className={`
        glass-card rounded-xl p-6 md:p-8 relative group
        ${highlighted ? 'border-beast-green/30 shadow-neon-green' : ''}
        ${className}
      `}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-beast-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Coming Soon Badge */}
            {comingSoon && (
                <span className="absolute top-4 right-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-beast-gold/20 text-beast-gold rounded-full border border-beast-gold/30">
                    Coming Soon
                </span>
            )}

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-beast-green/10 border border-beast-green/20 flex items-center justify-center mb-6 group-hover:bg-beast-green/20 group-hover:border-beast-green/40 transition-all duration-300">
                <div className="text-beast-green w-7 h-7">
                    {icon}
                </div>
            </div>

            {/* Title */}
            <h3 className="heading-cyber text-xl text-white mb-3 group-hover:text-beast-green transition-colors">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-beast-green/5 to-transparent" />
            </div>
        </div>
    );
}
