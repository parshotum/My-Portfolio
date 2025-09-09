import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Forever E-Commerce Web",
    description:
      "A modern e-commerce platform built with the MERN stack, featuring a responsive design, secure checkout, and a powerful admin panel for seamless store management.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "Razorpay",
    ],
    url: "https://clothing-ecommerce-mern-stackuser.vercel.app/",
    githubUrl: "https://github.com/parshotum/clothing-ecommerce-mern-stack",
  },
  {
    id: 2,
    title: "Food Delivery Website",
    description:
      "A modern MERN food delivery web app with user authentication, cart management, and Stripe payments. Features include order tracking, admin panel for managing menu and orders, and a responsive design for desktop and mobile.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
    ],
    url: "https://food-delivery-website-one-drab.vercel.app/",
    githubUrl: "https://github.com/parshotum/Food-Delivery-Website",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="contianer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here some of my recent projects. Each projects was carefully crafted
          with attention and detail, performance, and user expreience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.id + "project image"}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank size={20}"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/parshotum"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
