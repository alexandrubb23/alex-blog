import { IoArrowForwardCircle } from "react-icons/io5";

import { Button } from "./Button";
import React, { PropsWithChildren } from "react";
import { Box, ButtonProps, RecipeVariantProps } from "@chakra-ui/react";
import buttonRecipe from "./button.recipe";
import { IconType } from "react-icons";

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe> & ButtonProps;

export interface SolidButtonProps
  extends PropsWithChildren<ButtonVariantProps> {
  icon?: React.ReactNode;
}

const SolidButton: React.FC<SolidButtonProps> = ({
  children,
  onClick,
  visual = "solidPurple",
  icon = <IoArrowForwardCircle size={28} />,
  ...restProps
}) => (
  <Button
    alignItems="center"
    display="flex"
    gap={2}
    justifyContent="space-between"
    onClick={onClick}
    size="lg"
    visual={visual}
    {...restProps}
  >
    <Box as="span">{children}</Box>
    <Box as="span" className="button-icon">
      {icon}
    </Box>
  </Button>
);

export default SolidButton;
