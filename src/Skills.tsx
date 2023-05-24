import { FC } from "react";
import Flow from "./Node";

export interface SkillsProps {
  desc: string;
  skills: Array<{ icon: string; title: string }>;
}

const Skills: FC = () => {
  return <Flow />;
};

export default Skills;
