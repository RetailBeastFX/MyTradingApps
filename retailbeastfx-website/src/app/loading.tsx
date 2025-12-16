export default function Loading() {
    return (
        <div className="fixed inset-0 bg-cyber-dark z-50 flex flex-col items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-radial-glow opacity-50" />

            {/* Mascot silhouette with glow */}
            <div className="relative w-32 h-32 z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-beast-green/20 rounded-full blur-2xl animate-pulse" />
                <span className="text-6xl">👾</span>
            </div>

            {/* Loading text */}
            <div className="mt-4 text-center z-10">
                <p className="heading-cyber text-beast-green text-xl animate-pulse">
                    Loading...
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Preparing the Beast
                </p>
            </div>

            {/* Animated dots */}
            <div className="mt-6 flex gap-2 z-10">
                <div className="w-2 h-2 bg-beast-green rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-beast-green rounded-full animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 bg-beast-green rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
        </div>
    );
}
