import { MouseEvent, useState } from 'react';

export const useBendEffect = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${-tilt.y / 10}deg) rotateY(${tilt.x / 10}deg)`
  };

  return { tiltStyle, handleMouseMove, handleMouseLeave };
};
