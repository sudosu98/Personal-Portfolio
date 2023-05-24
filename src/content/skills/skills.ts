import expressjs from "./Expressjs.png";
import aws from "./aws.png";
import css from "./css.png";
import dagster from "./dagster.png";
import docker from "./docker.png";
import elasticsearch from "./elasticsearch.svg";
import git from "./git.png";
import graphql from "./graphql.svg";
import html from "./html.png";
import java from "./java.png";
import js from "./js.png";
import linux from "./linux.png";
import mixpanel from "./mixpanel.png";
import mongoDb from "./mongo-db.png";
import mysql from "./mysql.png";
import nodejs from "./nodejs.png";
import postgres from "./postgres.png";
import python from "./python.png";
import react from "./react.png";
import redux from "./redux.svg";
import springboot from "./springboot.png";
import typescript from "./typescript.png";
import vscode from "./vscode.png";
import tools from "./tools.jpg";
import framework from "./framework.png";
import database from "./database.jpg";
import skillsImg from "./skills.jpg";
import antlr from './antlr.png'

export const skills = {
  intro:
    "Over the years i have had the oppurtunity to work on various technologies and framework. I always look forward to increase my knowledge in the existing stack and add new ones to it.",
  skills: [
    {
      title: "Languages & Databases",
      items: [
        {
          icon: java,
          title: "Java",
        },
        {
          icon: js,
          title: "JavaScript",
        },
        {
          icon: python,
          title: "Python",
        },
        {
          icon: typescript,
          title: "Typescript",
        },
        {
          icon: mysql,
          title: "MySQL",
        },
        {
          icon: mongoDb,
          title: "MongoDB",
        },
        {
          icon: postgres,
          title: "PostgreSQL",
        },
        {
          icon: graphql,
          title: "GraphQL",
        },
      ],
    },
    {
      title: "Frameworks & Technologies",
      items: [
        {
          icon: html,
          title: "HTML",
        },
        {
          icon: css,
          name: "CSS",
        },
        {
          icon: react,
          name: "React JS",
        },
        {
          icon: redux,
          name: "Redux",
        },
        {
          icon: expressjs,
          name: "Express JS",
        },
        {
          icon: elasticsearch,
          name: "Elasticsearch",
        },
        {
          icon: springboot,
          name: "Springboot",
        },

        {
          icon: nodejs,
          name: "Node JS",
        },
        {
          icon: dagster,
          name: "Dagster",
        },
      ],
    },
    {
      title: "Tools, Platforms & OS",
      items: [
        {
          icon: git,
          name: "Git",
        },
        {
          icon: docker,
          name: "Docker",
        },
        {
          icon: aws,
          name: "AWS",
        },
        {
          icon: antlr,
          name: "Antlr",
        },
        {
          icon: vscode,
          name: "VS Code",
        },
        {
          icon: mixpanel,
          name: "Mixpanel",
        },
        {
          icon: linux,
          name: "Linux",
        },
      ],
    },
  ],
};

export const skillTree = [
  {
    id: "1",
    type: "custom",
    data: { name: "Skills", icon: skillsImg },
    position: { x: 25, y: -400 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Languages & Database", icon: database },
    position: { x: -50, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Frameworks & Tecnologies", icon: framework },
    position: { x: 300, y: -100 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "Tools, Platforms & OS", icon: tools },
    position: { x: -450, y: -100 },
  },
  {
    id: "5",
    type: "custom",
    data: {
      icon: java,
      name: "Java",
    },
    position: { x: -650, y: 300 },
  },
  {
    id: "6",
    type: "custom",
    data: {
      icon: js,
      name: "JavaScript",
    },
    position: { x: -525, y: 300 },
  },
  {
    id: "7",
    type: "custom",
    data: {
      icon: python,
      name: "Python",
    },
    position: { x: -350, y: 300 },
  },
  {
    id: "8",
    type: "custom",
    data: {
      icon: typescript,
      name: "Typescript",
    },
    position: { x: -200, y: 300 },
  },
  {
    id: "9",
    type: "custom",
    data: {
      icon: mysql,
      name: "MySQL",
    },
    position: { x: -25, y: 300 },
  },
  {
    id: "10",
    type: "custom",
    data: {
      icon: mongoDb,
      name: "MongoDB",
    },
    position: { x: 150, y: 300 },
  },
  {
    id: "11",
    type: "custom",
    data: {
      icon: postgres,
      name: "PostgreSQL",
    },
    position: { x: 325, y: 300 },
  },
  {
    id: "12",
    type: "custom",
    data: {
      icon: graphql,
      name: "GraphQL",
    },
    position: { x: 525, y: 300 },
  },
  {
    id: "13",
    type: "custom",
    data: {
      icon: html,
      name: "HTML",
    },
    position: { x: 300, y: 100 },
  },
  {
    id: "14",
    type: "custom",
    data: {
      icon: css,
      name: "CSS",
    },
    position: { x: 450, y: 100 },
  },
  {
    id: "15",
    type: "custom",
    data: {
      icon: react,
      name: "React JS",
    },
    position: { x: 575, y: 100 },
  },
  {
    id: "16",
    type: "custom",
    data: {
      icon: redux,
      name: "Redux",
    },
    position: { x: 750, y: 100 },
  },
  {
    id: "17",
    type: "custom",
    data: {
      icon: expressjs,
      name: "Express JS",
    },
    position: { x: 900, y: 100 },
  },
  {
    id: "18",
    type: "custom",
    data: {
      icon: elasticsearch,
      name: "Elasticsearch",
    },
    position: { x: 1100, y: 100 },
  },
  {
    id: "19",
    type: "custom",
    data: {
      icon: springboot,
      name: "Springboot",
    },
    position: { x: 1300, y: 100 },
  },
  {
    id: "20",
    type: "custom",
    data: {
      icon: nodejs,
      name: "Node JS",
    },
    position: { x: 1500, y: 100 },
  },
  {
    id: "21",
    type: "custom",
    data: {
      icon: dagster,
      name: "Dagster",
    },
    position: { x: 1675, y: 100 },
  },
  {
    id: "22",
    type: "custom",
    data: {
      icon: git,
      name: "Git",
    },
    position: { x: -300, y: 100 },
  },
  {
    id: "23",
    type: "custom",
    data: {
      icon: docker,
      name: "Docker",
    },
    position: { x: -450, y: 100 },
  },
  {
    id: "24",
    type: "custom",
    data: {
      icon: aws,
      name: "AWS",
    },
    position: { x: -575, y: 100 },
  },
  {
    id: "25",
    type: "custom",
    data: {
      icon: vscode,
      name: "VS Code",
    },
    position: { x: -750, y: 100 },
  },
  {
    id: "26",
    type: "custom",
    data: {
      icon: mixpanel,
      name: "Mixpanel",
    },
    position: { x: -925, y: 100 },
  },
  {
    id: "27",
    type: "custom",
    data: {
      icon: linux,
      name: "Linux",
    },
    position: { x: -1075, y: 100 },
  },
  {
    id: "28",
    type: "custom",
    data: {
      icon: antlr,
      name: "Antlr",
    },
    position: { x: -1225, y: 100 },
  }
];

export const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
  },
  {
    id: "e2-7",
    source: "2",
    target: "7",
  },
  {
    id: "e2-8",
    source: "2",
    target: "8",
  },
  {
    id: "e2-9",
    source: "2",
    target: "9",
  },
  {
    id: "e2-10",
    source: "2",
    target: "10",
  },
  {
    id: "e2-11",
    source: "2",
    target: "11",
  },
  {
    id: "e2-12",
    source: "2",
    target: "12",
  },
  {
    id: "e3-13",
    source: "3",
    target: "13",
  },
  {
    id: "e3-14",
    source: "3",
    target: "14",
  },
  {
    id: "e3-15",
    source: "3",
    target: "15",
  },
  {
    id: "e3-16",
    source: "3",
    target: "16",
  },
  {
    id: "e3-17",
    source: "3",
    target: "17",
  },
  {
    id: "e3-18",
    source: "3",
    target: "18",
  },
  {
    id: "e3-19",
    source: "3",
    target: "19",
  },
  {
    id: "e3-20",
    source: "3",
    target: "20",
  },
  {
    id: "e3-21",
    source: "3",
    target: "21",
  },
  {
    id: "e4-22",
    source: "4",
    target: "22",
  },
  {
    id: "e4-23",
    source: "4",
    target: "23",
  },
  {
    id: "e4-24",
    source: "4",
    target: "24",
  },
  {
    id: "e4-25",
    source: "4",
    target: "25",
  },
  {
    id: "e4-26",
    source: "4",
    target: "26",
  },
  {
    id: "e4-27",
    source: "4",
    target: "27",
  },
  {
    id: "e4-28",
    source: "4",
    target: "28",
  }
];
