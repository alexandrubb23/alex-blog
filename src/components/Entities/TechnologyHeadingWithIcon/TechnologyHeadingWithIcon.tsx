import { Heading } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

import { IconLabel } from "@/components/common";
import { useIconStyle, useIsHomePage, useIsNotMobile } from "@/hooks";

interface TechnologyHeadingWithIconProps {
  icon: IconType;
  label: string;
}

const TechnologyHeadingWithIcon = ({
  icon,
  label,
}: TechnologyHeadingWithIconProps) => {
  const iconStyle = useIconStyle();
  const isHomePage = useIsHomePage();
  const isNotMobile = useIsNotMobile();

  return (
    <Heading as={isHomePage ? "h3" : "h2"} fontSize="28px">
      <IconLabel
        icon={icon}
        iconWrapperProps={iconStyle}
        label={label}
        showIcon={isNotMobile}
      />
    </Heading>
  );
};

export default TechnologyHeadingWithIcon;
