import expressjs from "./skills/Expressjs.png";
import css from "./skills/css.png";
import docker from "./skills/docker.png";
import git from "./skills/git.png";
import html from "./skills/html.png";
import js from "./skills/js.png";
import nodejs from "./skills/nodejs.png";
import react from "./skills/react.png";
import redux from "./skills/redux.svg";
import antlr from './skills/antlr.png'
import yaml from './skills/yaml.png'

export const experiences = [
  {
    title: "Software Engineer",
    subtitle: "Purecode Software",
    workType: "Full-time",
    workDescription: [
      "Product Engineering, Working around DSL and Transpilers, Designing new features for Edith, Maintaining codebase, Contributing in AI/ML research.",
      "Currently working on product development for Edith a AI tool that converts image design input to React code by the use of computer vision.",
      "Devloped DSL for code generation in typescript using antlr and published an npm package.",
      "Invloved in product demos for potential client"
    ],
    dateText: "January 2023 – Present",
    skills: [
      { name: "React", icon: react },
      { name: "NodeJs", icon: nodejs },
      { name: "Javascript", icon:js },
      { name: "Docker", icon:docker },
      { name: "YAML", icon:yaml },
      { name: "HTML", icon:html },
      { name: "CSS", icon:css },
      { name: "ExpressJs",icon:expressjs },
      { name: "Antlr",icon:antlr },
      { name: "Redux",icon:redux },
      { name: "Git",icon:git },
    ],
  },
  {
    title: "Product Engineer",
    subtitle: "Ovonts Technologies Pvt. Ltd",
    workType: "Full-time",
    workDescription: [
      "Designed, Developed and Maintained Unify a Saas based social commerce enablement platform as a part of the core team. ",
      "During my tenure I worked closely along the founders and business team and solve real life problems associated with social commerce.",
    ],
    dateText: "May 2022 – January 2023",
    skills: []
  },
  {
    title: "Software Engineer",
    subtitle: "Datachain Software",
    workType: "Full-time",
    workDescription: [
      "Designed and Developed python packages for e-commerce processes and automated the process using orchestration technology by converting them into directed acyclic graphs.",
      "Involved in design decisions and architectural problems faced during my time at the company. ",
    ],
    dateText: "June 2021 – May 2022",
    skills:[]
  },
  {
    title: "Software Developer",
    subtitle: "Everyware Technologies",
    workType: "Internship",
    workDescription: [
      "Designed and Developed the backend for a ML based search engine that differentiates Automated and No-Automated vehicle related blog posts.",
      "Automate posting them to wordpress along with indexing the posts to elasticsearch.",
    ],
    dateText: "March 2021 – June 2021",
    skills:[]
  },
];
