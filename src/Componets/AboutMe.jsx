import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tect Creator</h3>
            <p className="text-muted-foreground">
              With over 6 months of experience in web development, I specialize
              in creating dynamic and responsive web applications. My expertise
              lies in HTML, CSS, JavaScript, and React, allowing me to build
              user-friendly interfaces and seamless user experiences. I am
              constantly exploring new technologies and frameworks to enhance my
              skills and stay updated with industry trends.
            </p>

            <p className="text-muted-foreground">
              I am passionate about crafting clean, efficient code and
              implementing best practices in web development. My goal is to
              create impactful digital experiences that not only meet user needs
              but also exceed expectations. I thrive on challenges and enjoy
              collaborating with teams to bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                 Get In Touch 
                </a>
                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                 Download CV  
                </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                     <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold">Web Development</h4>
                      <p className="text-muted-foreground">Create responsive websites and web applications with modern frameworks</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                     <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold">UI/UX Design</h4>
                      <p className="text-muted-foreground">Design intuitative user interfaces and seamless user experiences</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                     <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold">Project Management</h4>
                      <p className="text-muted-foreground">Leading project from conception with agile methodologies</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
