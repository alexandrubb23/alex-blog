import { IoArrowForwardCircle } from "react-icons/io5";

import { Box, ButtonProps, RecipeVariantProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Button } from "./Button";
import buttonRecipe from "./button.recipe";

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe> & ButtonProps;

export interface SolidButtonProps
  extends PropsWithChildren<ButtonVariantProps> {
  icon?: React.ReactNode;
}

const SolidButton = ({
  children,
  onClick,
  visual = "solidPurple",
  icon = <IoArrowForwardCircle size={28} />,
  ...restProps
}: SolidButtonProps) => (
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
