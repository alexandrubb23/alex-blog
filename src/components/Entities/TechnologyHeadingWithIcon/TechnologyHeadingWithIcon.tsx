import { useMemo } from "react";

import { APIResponse, Technology } from "@/app/api/lib/models";
import { IconLabel } from "@/components/common";
import icons from "@/data/icons";
import { useIconStyle, useIsNotMobile } from "@/hooks";

interface TechnologyHeadingWithIconProps {
  label?: string;
  technology: Technology;
}

const TechnologyHeadingWithIcon = ({
  label,
  technology,
}: TechnologyHeadingWithIconProps) => {
  const iconStyle = useIconStyle();
  const isNotMobile = useIsNotMobile();

  const getIcon = useMemo(() => (icon: keyof typeof icons) => icons[icon], []);

  return (
    <IconLabel
      icon={getIcon(technology)}
      iconWrapperProps={iconStyle}
      label={label}
      showIcon={isNotMobile}
    />
  );
};

export default TechnologyHeadingWithIcon;
