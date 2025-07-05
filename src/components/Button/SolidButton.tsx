import { IoArrowForwardCircle } from "react-icons/io5";

import { Button } from "./Button";
import { PropsWithChildren } from "react";
import { RecipeVariantProps } from "@chakra-ui/react";
import buttonRecipe from "./button.recipe";

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;
type Visual = ButtonVariantProps["visual"];

interface SolidButtonProps {
  onClick?: () => void;
  visual?: Visual;
}

const SolidButton = ({
  children,
  onClick,
  visual = "solidPurple",
}: PropsWithChildren<SolidButtonProps>) => (
  <Button onClick={onClick} size="lg" visual={visual}>
    {children} <IoArrowForwardCircle size={28} />
  </Button>
);

export default SolidButton;
