import React, { useEffect, useState, useCallback } from 'react';

const MouseGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttle mouse updates for performance (~60fps)
  const throttledMouseMove = useCallback(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return (e: MouseEvent) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        timeoutId = null;
      }, 16);
    };
  }, [])();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', throttledMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [throttledMouseMove, isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Large glow */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full transition-opacity duration-500 ease-out will-change-transform ${
          isVisible ? 'opacity-25' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.2) 25%, rgba(59,130,246,0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Medium glow */}
      <div
        className={`absolute w-[400px] h-[400px] rounded-full transition-opacity duration-300 ease-out will-change-transform ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.3) 30%, rgba(59,130,246,0.15) 60%, transparent 80%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Core */}
      <div
        className={`absolute w-[200px] h-[200px] rounded-full transition-opacity duration-150 ease-out will-change-transform ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.4) 40%, rgba(59,130,246,0.2) 70%, transparent 90%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Inner highlight */}
      <div
        className={`absolute w-[100px] h-[100px] rounded-full transition-opacity duration-100 ease-out will-change-transform ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          background:
            'radial-gradient(circle, rgba(147,197,253,0.8) 0%, rgba(59,130,246,0.5) 50%, transparent 80%)',
          filter: 'blur(10px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default MouseGlow;
