import { AiFillHtml5 } from "react-icons/ai";
import { BsFiletypeJava, BsGithub } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { GrMysql, GrReactjs, GrTechnology } from "react-icons/gr";
import {
  SiAlwaysdata,
  SiDjango,
  SiDocker,
  SiJavascript,
  SiNestjs,
  SiPython,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const icons = {
  All: GrTechnology,
  Django: SiDjango,
  Docker: SiDocker,
  Git: BsGithub,
  HTML: AiFillHtml5,
  Java: BsFiletypeJava,
  JavaScript: SiJavascript,
  MySQL: GrMysql,
  NestJS: SiNestjs,
  NextJS: TbBrandNextjs,
  NodeJS: FaNodeJs,
  Python: SiPython,
  React: GrReactjs,
  Redux: SiRedux,
  TypeScript: SiTypescript,
  DesignPatterns: GiGearStickPattern,
  // TODO: Remove this typo after updating all references
  DesingPatterns: GiGearStickPattern,
  DataStructures: SiAlwaysdata,
} as const;

export default icons;
