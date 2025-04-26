import { useEffect, useState } from "react";
import "./ClickEffects.css";

export default function ClickEffect() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleRipple = (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);

      const newRipple = { x, y, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    window.addEventListener("click", handleRipple);
    window.addEventListener("touchstart", handleRipple);

    return () => {
      window.removeEventListener("click", handleRipple);
      window.removeEventListener("touchstart", handleRipple);
    };
  }, []);

  return (
    <div className="clickRippleOverlay">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
}
