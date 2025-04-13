import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useSwipeable } from "react-swipeable";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Real index
  const [transitioning, setTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Responsive: determine items per view
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerView(3);
      else if (width >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Calculate card width
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setCardWidth(width / itemsPerView);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [itemsPerView]);

  const moveTo = (idx) => {
    setCurrentIndex(idx);
    setTransitioning(true);
  };

  const moveNext = () => moveTo(currentIndex + 1);
  const movePrev = () => moveTo(currentIndex - 1);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(moveNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") moveNext();
      else if (e.key === "ArrowLeft") movePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: moveNext,
    onSwipedRight: movePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Transition End: Reset index if wrapping
  const handleTransitionEnd = () => {
    const len = testimonials.length;
    let corrected = false;

    if (currentIndex < 0) {
      setCurrentIndex(len - 1);
      corrected = true;
    } else if (currentIndex >= len) {
      setCurrentIndex(0);
      corrected = true;
    }

    if (corrected) {
      setTransitioning(false);
      requestAnimationFrame(() => {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(-${
          cardWidth *
          (1 + (corrected ? (currentIndex < 0 ? len - 1 : 0) : currentIndex))
        }px)`;
        requestAnimationFrame(() => {
          sliderRef.current.style.transition = "transform 0.5s ease";
        });
      });
    } else {
      setTransitioning(false);
    }
  };

  // Render cards with clones
  const fullCards = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  return (
    <section className="bg-green-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        What Our Students Say
      </h2>

      <div
        className="flex items-center justify-center gap-4 relative"
        {...handlers}
      >
        <button
          onClick={movePrev}
          className="text-green-800 text-3xl hover:text-green-600 transition"
        >
          <Icon icon="ph:caret-left-bold" />
        </button>

        <div
          ref={containerRef}
          className="overflow-hidden w-full max-w-6xl rounded-xl"
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${cardWidth * (currentIndex + 1)}px)`,
              transition: transitioning ? "transform 0.5s ease" : "none",
              width: `${cardWidth * fullCards.length}px`,
            }}
          >
            {fullCards.map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-4"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="p-6 rounded-3xl text-white bg-[#7ed899] h-full">
                  <p className="text-lg italic leading-relaxed">
                    “{testimonial.feedback}”
                  </p>
                  <p className="mt-5 font-semibold text-lg text-white">
                    — {testimonial.name},{" "}
                    <span className="text-sm font-normal">
                      {testimonial.role}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={moveNext}
          className="text-green-800 text-3xl hover:text-green-600 transition"
        >
          <Icon icon="ph:caret-right-bold" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => moveTo(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === (currentIndex + testimonials.length) % testimonials.length
                ? "bg-green-600 scale-125"
                : "bg-green-300 hover:bg-green-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
