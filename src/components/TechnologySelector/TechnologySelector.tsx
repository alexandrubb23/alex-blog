import type { APIResponse, Technology } from "@/app/api/lib/models";
import { useIsNotMobile } from "@/hooks";
import DesktopTechnologySelector from "./DesktopTechnologySelector";
import MobileTechnologySelector from "./MobileTechnologySelector";
import useTechnologies from "./useTechnologies";

interface TechnologySelectorProps {
  addItems?: Technology[];
  data: APIResponse[];
  onSelect?: (technology: Technology) => void;
  selectedId?: string | null;
}

const TechnologySelector = ({
  addItems,
  data,
  onSelect,
  selectedId,
}: TechnologySelectorProps) => {
  const isNotMobile = useIsNotMobile();
  const technologies = useTechnologies(data, addItems);

  const Component = isNotMobile
    ? DesktopTechnologySelector
    : MobileTechnologySelector;

  return (
    <Component
      technologies={technologies}
      handleItemClick={(technology: Technology) => () => onSelect?.(technology)}
      selectedId={selectedId}
    />
  );
};

export default TechnologySelector;
