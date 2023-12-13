import { useSpring, animated } from "@react-spring/web";




const MobileHome = () => {

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { 
      duration: 3000, 
      mass: 100,
      tension: 170,
      friction: 26},
  });



  return (
    <animated.div className="text-left text-5xl leading-14 mt-10 sm:hidden md:hidden onlyXsm:text-4xl px-12" style={fade}>
      <p>Hi, there!</p>
      <p className="mt-5">
        {" "}
        I'm Alfredo, a{" "}
        <span className="text-accentColor">Software Developer</span>
      </p>
      <p className="mt-5">
        {" "}
        Passionate about <span className="text-accentColor">code</span> and{" "}
        <span className="text-accentColor">solving problems</span>
      </p>
      <p className="mt-5">
        {" "}
        I'm currently based in{" "}
        <span className="text-accentColor">Montreal</span>.
      </p>
    </animated.div>
  );
}

export default MobileHome