import { useMemo } from "react";

import { Technology } from "@/app/api/lib/models";
import { IconLabel } from "@/components/common";
import icons from "@/data/icons";
import { useIconStyle, useIsNotMobile } from "@/hooks";
import { BoxProps } from "@chakra-ui/react";

interface TechnologyHeadingWithIconProps {
  label?: string;
  technology: Technology;
  iconSize?: string | number;
  iconBoxStyle?: BoxProps;
}

const TechnologyHeadingWithIcon = ({
  label,
  technology,
  iconSize,
  iconBoxStyle,
}: TechnologyHeadingWithIconProps) => {
  const iconStyle = useIconStyle({ ...iconBoxStyle });
  const isNotMobile = useIsNotMobile();

  const getIcon = useMemo(() => (icon: keyof typeof icons) => icons[icon], []);

  return (
    <IconLabel
      icon={getIcon(technology)}
      iconWrapperProps={iconStyle}
      label={label}
      showIcon={isNotMobile}
      iconSize={iconSize}
    />
  );
};

export default TechnologyHeadingWithIcon;
