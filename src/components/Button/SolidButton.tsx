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
  icon,
  ...restProps
}: SolidButtonProps) => (
  <Button
    alignItems="center"
    display="inline-flex"
    gap={2}
    justifyContent="center"
    onClick={onClick}
    size="lg"
    visual={visual}
    {...restProps}
  >
    <Box as="span" fontWeight="700" opacity={0.7} className="button-prompt">
      &gt;_
    </Box>
    <Box as="span">{children}</Box>
    {icon ? (
      <Box as="span" className="button-icon">
        {icon}
      </Box>
    ) : null}
  </Button>
);

export default SolidButton;
