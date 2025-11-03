import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const threshold = 20;
    const onScroll = () => {
      setVisible(window.scrollY <= threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    onScroll();

    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
        <div className="w-1.5 h-3 bg-primary rounded-full animate-float"></div>
      </div>
    </div>
  );
};
