import "./Contact.css";
import { useState, useEffect } from "react";
import DeskCon from "../../components/Contact/DeskCon";
import MobCont from "../../components/Contact/MobCont";

export default function Contact() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return <>{width > breakpoint ? <DeskCon /> : <MobCont />}</>;
}
