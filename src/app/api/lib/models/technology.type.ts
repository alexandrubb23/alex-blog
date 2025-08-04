import icons from "@/data/icons";

export type Technology = (typeof technologies)[number];

const keys = Object.keys as <T extends string>(obj: Record<T, any>) => T[];

export const technologies = keys(icons);

export default Technology;
