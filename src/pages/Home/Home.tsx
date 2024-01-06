import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import transition from "@/Transition";
import ArrowBottom from "@/components/ArrowBottom";




function Home() {
  return (
    <>
      <section id="home" className="relative lg:min-h-[680px]  lg:pt-20">
        <WebHome />
        <MobileHome />
        <ArrowBottom href="/whoami" />
      </section>
    </>
  );
}

export default transition(Home);
