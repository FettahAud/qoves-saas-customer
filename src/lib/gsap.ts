import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, CustomEase, Flip);
const Gsap = gsap;

Gsap.defaults({
  ease: CustomEase.create("custom", "M0,0 C0.7,0.002 0.31,1.004 1,1 "),
  duration: 1,
});

export { Gsap as gsap, ScrollTrigger, CustomEase, Flip };
