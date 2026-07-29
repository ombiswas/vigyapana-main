import { useEffect, useRef, useState } from 'react';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((scrollTop / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Progress bar is visible ONLY when navbar is hidden (scrolling down past top threshold)
      if (scrollTop < 50) {
        setShowProgressBar(false);
      } else {
        if (scrollTop > lastScrollY.current + 5) {
          setShowProgressBar(true);  // Navbar hides on scroll down -> show progress bar
        } else if (scrollTop < lastScrollY.current - 5) {
          setShowProgressBar(false); // Navbar shows on scroll up -> hide progress bar
        }
      }
      lastScrollY.current = scrollTop;
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    // Initial check
    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] h-[3.5px] bg-transparent pointer-events-none transition-all duration-500 ease-in-out transform ${
        !showProgressBar ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div
        className="h-full w-full bg-gradient-to-r from-primary via-accent to-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.85)] rounded-r-full"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: 'left',
          willChange: 'transform',
        }}
      />
    </div>
  );
}



