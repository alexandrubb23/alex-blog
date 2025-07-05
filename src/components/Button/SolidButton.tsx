import { IoArrowForwardCircle } from "react-icons/io5";

import { Button } from "./Button";
import { PropsWithChildren } from "react";

interface SolidButtonProps {
  onClick?: () => void;
}

const SolidButton = ({
  children,
  onClick,
}: PropsWithChildren<SolidButtonProps>) => (
  <Button onClick={onClick} size="lg" visual="solid">
    {children} <IoArrowForwardCircle size={28} />
  </Button>
);

export default SolidButton;
