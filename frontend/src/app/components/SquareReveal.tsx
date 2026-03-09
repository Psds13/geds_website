'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface SquareRevealProps {
    children: React.ReactNode;
    gridSize?: number;
    threshold?: number;
}

export default function SquareReveal({ children, gridSize = 10, threshold = 0.05 }: SquareRevealProps) {
    const containerRef = useRef(null);
    // Use a negative margin to trigger the reveal slightly before it enters the viewport fully
    const isInView = useInView(containerRef, { once: true, amount: threshold, margin: "0px 0px -50px 0px" });
    const [mounted, setMounted] = useState(false);
    const [shuffledSquares, setShuffledSquares] = useState<number[]>([]);

    useEffect(() => {
        const squares = Array.from({ length: gridSize * gridSize }, (_, i) => i);
        setShuffledSquares([...squares].sort(() => Math.random() - 0.5));
        setMounted(true);
    }, [gridSize]);

    // Ensure content is visible even if JS is slow or mounting takes time
    // But maintain the reveal effect once mounted. We use a simpler approach to avoid blank pages on mobile.
    return (
        <div ref={containerRef} className="relative w-full overflow-hidden min-h-[50px]">
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={(!mounted || isInView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
            >
                {children}
            </motion.div>

            {/* Grid Overlay - Only show on larger screens to avoid mobile performance issues causing blank pages */}
            {mounted && (
                <div
                    className="absolute inset-0 pointer-events-none z-20 hidden md:grid"
                    style={{
                        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                        gridTemplateRows: `repeat(${gridSize}, 1fr)`
                    }}
                >
                    {shuffledSquares.map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 1 }}
                            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: (i / (gridSize * gridSize)) * 0.8, // Faster reveal
                                ease: "easeInOut"
                            }}
                            className="bg-black border-[0.5px] border-white/5"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
