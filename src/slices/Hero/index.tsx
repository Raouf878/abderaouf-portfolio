"use client";
import { useEffect, useRef } from "react";
import { Content,KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import Bounded from "@/components/Bounded";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";



/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const words = [
    {
      text: "Looking",
    },
    {
      text: "for a",
    },
    
    {
      text: "6 months",
    },
    {
      text: "internship.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "starting 01/26.",
      
    },
  ];
  const component = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.035, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);
  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };
  return (
   
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
     

<div className="flex-col min-h-[70vh] items-center justify-center ">
  <div className="flex justify-center align-center"> <TypewriterEffectSmooth words={words} />     </div>
  <div>
  
  
    <h1 className="mb-2 text-[clamp(3rem,20vmin,20rem)] font-extrabold loading-none tracking-tighter " aria-label={slice.primary.firstname + " " + slice.primary.lastname}>
      <span className="block text-slate-500 text-center text-nowrap ">{renderLetters(slice.primary.firstname,"first")}</span>
      <span className="-mt-[.6em] block text-slate-700 text-center  text-nowrap">{renderLetters(slice.primary.lastname,"last")}</span>
      <span className="-mt-[.6em] block text-slate-700 text-center  text-nowrap">{renderLetters(slice.primary.lastname2,"last")}</span>
    </h1>
    <span className="job-title block bg-gradient-to-tr from-amber-400 via-amber-600 to-amber-400 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl text-center">{slice.primary.tagline}</span>
  </div>
  
</div>




    </Bounded>
    
  );
};

export default Hero;
