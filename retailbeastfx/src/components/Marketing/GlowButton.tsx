import Link from 'next/link';
import { ReactNode } from 'react';

interface GlowButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    external?: boolean;
}

export default function GlowButton({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    loading = false,
    external = false,
}: GlowButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg relative overflow-hidden';

    const variants = {
        primary: 'bg-gradient-to-r from-beast-green-500 to-beast-green text-black hover:shadow-neon-green-lg active:scale-[0.98]',
        outline: 'bg-transparent border-2 border-beast-green text-beast-green hover:bg-beast-green/10 hover:shadow-neon-green',
        secondary: 'bg-cyber-card border border-cyber-border text-white hover:border-beast-green/50 hover:bg-cyber-surface',
    };

    const sizes = {
        sm: 'text-sm py-2 px-4',
        md: 'text-base py-3 px-6',
        lg: 'text-lg py-4 px-8',
    };

    const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
    ${className}
  `.trim();

    const content = (
        <>
            {loading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            )}
            {children}
            {variant === 'primary' && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            )}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${combinedClassName}`}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={`group ${combinedClassName}`}>
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`group ${combinedClassName}`}
        >
            {content}
        </button>
    );
}
