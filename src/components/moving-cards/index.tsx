import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { ProjectTypes } from "../../data";
import AntCardWithDisabledLint from "../card";
import "./index.css";
const speedMap = {
  fast: 20,
  normal: 40,
  slow: 80,
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ProjectTypes[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);
  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const handleScroll = () => {
    setIsHovered(true);
    if (scrollTimeoutRef.current !== undefined) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(
      () => setIsHovered(false),
      1000
    );
  };

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-full w-full overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] hide-scroll-bar",
        className
      )}
      style={
        {
          "--animation-duration": `${speedMap[speed]}s`,
          "--animation-direction": direction === "left" ? "normal" : "reverse",
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onScroll={handleScroll}
      tabIndex={0}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 flex-nowrap gap-4 py-4",
          isReady && !isHovered && "animate-infinite-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          minWidth: "100%",
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <AntCardWithDisabledLint
            key={idx}
            description={item.description}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
    </div>
  );
};
