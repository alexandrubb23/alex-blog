import { Heading } from "@chakra-ui/react";
import { useMemo } from "react";

import { APIResponse } from "@/app/api/lib/models";
import { IconLabel } from "@/components/common";
import icons from "@/data/icons";
import { useIconStyle, useIsHomePage, useIsNotMobile } from "@/hooks";

interface TechnologyHeadingWithIconProps {
  technology: APIResponse;
}

const TechnologyHeadingWithIcon = ({
  technology,
}: TechnologyHeadingWithIconProps) => {
  const iconStyle = useIconStyle();
  const isHomePage = useIsHomePage();
  const isNotMobile = useIsNotMobile();

  const getIcon = useMemo(() => (icon: keyof typeof icons) => icons[icon], []);

  return (
    <Heading as={isHomePage ? "h3" : "h2"} fontSize="28px" w="full">
      <IconLabel
        icon={getIcon(technology.id)}
        iconWrapperProps={iconStyle}
        label={technology.name}
        showIcon={isNotMobile}
      />
    </Heading>
  );
};

export default TechnologyHeadingWithIcon;
