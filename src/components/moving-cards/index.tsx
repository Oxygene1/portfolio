import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { ProjectTypes } from "../../data";
import AntCardWithDisabledLint from "../card";

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

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={
        {
          "--animation-duration": `${speedMap[speed]}s`,
          "--animation-direction": direction === "left" ? "normal" : "reverse",
        } as React.CSSProperties
      }
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 flex-nowrap gap-4 py-4",
          isReady && "animate-infinite-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
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
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, normal);
        }
      `}</style>
    </div>
  );
};
