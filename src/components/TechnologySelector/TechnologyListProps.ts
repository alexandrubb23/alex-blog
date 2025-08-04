import { type Technology } from "@/app/api/lib/models";

export interface TechnologyListProps {
  handleItemClick: (technology: Technology) => () => void;
  selectedId?: string | null;
  technologies: Technology[];
}
