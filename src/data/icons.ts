import { AiFillHtml5 } from "react-icons/ai";
import { BsFiletypeJava, BsGithub } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql, GrReactjs } from "react-icons/gr";
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
import { GiGearStickPattern } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";

const icons = {
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
  DataStructures: SiAlwaysdata,
} as const;

export default icons;
