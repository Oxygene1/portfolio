import { testimonials } from "../../data";
import { InfiniteMovingCards } from "../moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}


