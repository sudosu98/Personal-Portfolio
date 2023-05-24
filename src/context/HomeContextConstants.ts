import { Experience } from "../Experience";
import expressjs from "../content/skills/Expressjs.png";
import css from "../content/skills/css.png";
import docker from "../content/skills/docker.png";
import git from "../content/skills/git.png";
import html from "../content/skills/html.png";
import js from "../content/skills/js.png";
import nodejs from "../content/skills/nodejs.png";
import react from "../content/skills/react.png";
import redux from "../content/skills/redux.svg";
import antlr from '../content/skills/antlr.png'
import yaml from '../content/skills/yaml.png'

export const HOME_DEFAULT_STATE = {
  activeTab: "Experience",
  experienceActive: false,
  experienceTab: "Purecode Software",
  experienceData: {
    title: "Software Engineer",
    subtitle: "Purecode Software",
    workType: "Full-time",
    workDescription: [
      "Product Engineering, Working around DSL and Transpilers, Designing new features for Edith, Maintaining codebase, Contributing in AI/ML research.",
      "Currently working on product development for Edith a AI tool that converts image design input to React code by the use of computer vision.",
      "Devloped DSL for code generation in typescript using antlr and published an npm package.",
      "Invloved in product demos for potential client",
    ],
    dateText: "January 2023 – Present",
    skills: [
      { name: "React", icon: react },
      { name: "NodeJs", icon: nodejs },
      { name: "Javascript", icon: js },
      { name: "Docker", icon: docker },
      { name: "YAML", icon: yaml },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "ExpressJs", icon: expressjs },
      { name: "Antlr", icon: antlr },
      { name: "Redux", icon: redux },
      { name: "Git", icon: git },
    ],
  },
};

export const HOME_TABS = ["Experience", "Skills"];

export const HOME_ACTIONS = {
  SET_ACTIVE_TAB: "SET_ACTIVE_TAB",
  SET_EXPERIENCES: "SET_EXPERIENCES",
  SET_EXPERIENCE_TAB: "SET_EXPERIENCE_TAB",
  SET_EXPERIENCE_DATA: "SET_EXPERIENCE_DATA",
};
