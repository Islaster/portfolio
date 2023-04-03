import { useState, useEffect } from "react";
import Deskpro from "../../components/Project/WinPro/WinPro";
import MobPro from "../../components/Project/MobPro/MobPro";

export default function Projects() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return <div>{width > breakpoint ? <Deskpro /> : <MobPro />}</div>;
}
