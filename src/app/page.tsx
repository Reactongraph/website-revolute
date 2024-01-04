"use client";
import Footer2 from "./components/footer2/page";
import SlidingCard from "./components/slidingCard/page";
import HomePage from "./components/homePage/page";
import RevoluteCards from "./components/revoluteCards/page";


export default function Home() {
  return (
 <div>
      <HomePage/>
      <SlidingCard/>
      <RevoluteCards/>
      {/* <Footer2/> */}
    </div>
  );
}
