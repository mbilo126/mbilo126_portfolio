import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
}

interface UseScrollAnimationReturn {
    ref: React.RefObject<HTMLDivElement>;
    isVisible: boolean;
    hasBeenVisible: boolean;
}

/**
 * Ultra-smooth scroll animation hook with fade-out support
 * Tracks visibility and supports smooth fade-out when scrolling up
 */
export const useScrollAnimation = (
    options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
    const { threshold = 0.15, rootMargin = '0px 0px -100px 0px' } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const visible = entry.isIntersecting;
                    setIsVisible(visible);

                    // Track if element has ever been visible for fade-out
                    if (visible && !hasBeenVisible) {
                        setHasBeenVisible(true);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, hasBeenVisible]);

    return { ref, isVisible, hasBeenVisible };
};
