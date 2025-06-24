import React, { useRef, useState } from 'react';

const BeforeAfterToggle = ({ beforeImg, afterImg, beforeLabel = 'Long Video', afterLabel = 'Short Clip' }) => {
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const [dragging, setDragging] = useState(false);

  // Mouse/touch drag logic
  const startDrag = (e) => {
    setDragging(true);
    e.preventDefault();
  };
  const stopDrag = () => setDragging(false);
  const onDrag = (e) => {
    if (!dragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.touches ? e.touches[0].clientX : e.clientX;
    let newPercent = ((x - rect.left) / rect.width) * 100;
    newPercent = Math.max(0, Math.min(100, newPercent));
    setPercent(newPercent);
  };
  // Keyboard accessibility
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPercent((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPercent((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg select-none"
      tabIndex={0}
      aria-label="Before and after video comparison slider"
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
      onKeyDown={onKeyDown}
      style={{ outline: dragging ? '2px solid #6366f1' : 'none' }}
    >
      {/* Before image (left) */}
      <img
        src={beforeImg}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      />
      {/* After image (right) */}
      <img
        src={afterImg}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
      />
      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(${percent}% - 12px)` }}
        role="slider"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onKeyDown={onKeyDown}
        aria-label="Drag to compare before and after"
      >
        <div className="w-6 h-full flex items-center justify-center cursor-ew-resize">
          <div className="w-2 h-10 bg-blue-500 rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute left-4 top-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-semibold pointer-events-none">{beforeLabel}</div>
      <div className="absolute right-4 top-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-semibold pointer-events-none">{afterLabel}</div>
    </div>
  );
};

export default BeforeAfterToggle; 