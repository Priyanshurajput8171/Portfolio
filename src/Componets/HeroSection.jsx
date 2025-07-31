import React from "react";
import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Priyanshu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Rajput
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            "I'm a passionate Web Developer and technology enthusiast driven by
            a love for building impactful digital experiences. With a strong
            foundation in HTML, CSS, JavaScript, and React, I enjoy turning
            ideas into clean, responsive, and user-friendly websites. I'm
            constantly exploring new tools, frameworks, and trends to stay ahead
            in the fast-paced world of web development. Whether it's creating
            smooth UI interactions or diving deep into frontend architecture, I
            thrive on solving challenges and pushing my skills to the next
            level."
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 tranform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
