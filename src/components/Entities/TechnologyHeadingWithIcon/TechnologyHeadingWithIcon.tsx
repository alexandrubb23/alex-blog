import { BoxProps } from "@chakra-ui/react";

import { Technology } from "@/app/api/lib/models";
import { IconLabel } from "@/components/common";
import icons from "@/data/icons";
import { useIconStyle } from "@/hooks";

interface TechnologyHeadingWithIconProps extends BoxProps {
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

  return (
    <IconLabel
      icon={icons[technology]}
      iconWrapperProps={iconStyle}
      label={label}
      iconSize={iconSize}
    />
  );
};

export default TechnologyHeadingWithIcon;
