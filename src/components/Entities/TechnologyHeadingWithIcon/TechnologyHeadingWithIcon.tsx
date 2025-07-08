import { useMemo } from "react";

import { APIResponse, Technology } from "@/app/api/lib/models";
import { IconLabel } from "@/components/common";
import icons from "@/data/icons";
import { useIconStyle, useIsNotMobile } from "@/hooks";

interface TechnologyHeadingWithIconProps {
  technology: Technology;
}

const TechnologyHeadingWithIcon = ({
  technology,
}: TechnologyHeadingWithIconProps) => {
  const iconStyle = useIconStyle();
  const isNotMobile = useIsNotMobile();

  const getIcon = useMemo(() => (icon: keyof typeof icons) => icons[icon], []);

  return (
    <IconLabel
      icon={getIcon(technology)}
      iconWrapperProps={iconStyle}
      showIcon={isNotMobile}
    />
  );
};

export default TechnologyHeadingWithIcon;
