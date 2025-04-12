import React, { useEffect, useRef } from "react";

const AnimatingVanishing3DLinesBackground = () => {
  const linesRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const svg = linesRef.current;
    const paths = Array.from(svg.querySelectorAll("path"));
    const totalLength = paths.map((path) => path.getTotalLength());
    const animationDuration = 5000; // Adjust for speed of drawing and vanishing
    const vanishDuration = 2000; // Adjust for how long the vanishing takes
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const drawProgress = Math.min(1, elapsed / animationDuration);

      paths.forEach((path, index) => {
        const length = totalLength[index];
        const drawLength = length * drawProgress;
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length - drawLength}`;

        // Control opacity for the vanishing effect
        if (elapsed >= animationDuration) {
          const vanishProgress = Math.min(
            1,
            (elapsed - animationDuration) / vanishDuration
          );
          path.style.opacity = `${1 - vanishProgress}`;
        } else {
          path.style.opacity = "1";
        }

        // Optionally reset after vanishing completely
        if (elapsed >= animationDuration + vanishDuration) {
          startTime = null;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
      ref={linesRef}
    >
      <defs>
        <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#8FBC8F", stopOpacity: 0.8 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#3CB371", stopOpacity: 0.8 }}
          />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="#f0f0f0" />

      <g
        stroke="url(#gradientGreen)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 3D-like Shapes using connected lines */}
        <path
          d="M 150 100 L 250 80 L 300 150 L 200 170 Z M 200 170 L 250 80 M 300 150 L 150 100"
          fill="none"
        />
        <path
          d="M 450 120 L 550 100 L 600 170 L 500 190 Z M 500 190 L 550 100 M 600 170 L 450 120"
          fill="none"
        />
        <path
          d="M 750 140 L 850 120 L 900 190 L 800 210 Z M 800 210 L 850 120 M 900 190 L 750 140"
          fill="none"
        />

        {/* More 3D-like interconnected structures */}
        <path
          d="M 100 250 L 180 230 L 220 300 L 140 320 Z M 140 320 L 180 230 M 220 300 L 100 250"
          fill="none"
        />
        <path
          d="M 400 270 L 480 250 L 520 320 L 440 340 Z M 440 340 L 480 250 M 520 320 L 400 270"
          fill="none"
        />
        <path
          d="M 700 290 L 780 270 L 820 340 L 740 360 Z M 740 360 L 780 270 M 820 340 L 700 290"
          fill="none"
        />

        {/* Flowing lines that suggest depth */}
        <path
          d="M 50 400 C 150 350, 250 450, 350 400 S 450 350, 550 400"
          fill="none"
        />
        <path
          d="M 100 450 C 200 400, 300 500, 400 450 S 500 400, 600 450"
          fill="none"
        />
        <path
          d="M 650 420 C 750 370, 850 470, 950 420 S 1050 370, 1150 420"
          fill="none"
        />

        {/* Intersecting lines creating visual complexity */}
        <path d="M 120 550 L 320 650 M 280 530 L 80 630" />
        <path d="M 420 570 L 620 670 M 580 550 L 380 650" />
        <path d="M 720 590 L 920 690 M 880 570 L 680 670" />

        {/* More structured 3D-like wireframes */}
        <path
          d="M 180 700 L 280 680 L 320 750 L 220 770 Z M 220 770 L 280 680"
          fill="none"
        />
        <path
          d="M 480 720 L 580 700 L 620 770 L 520 790 Z M 520 790 L 580 700"
          fill="none"
        />
        <path
          d="M 780 740 L 880 720 L 920 790 L 820 810 Z M 820 810 L 880 720"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default AnimatingVanishing3DLinesBackground;
