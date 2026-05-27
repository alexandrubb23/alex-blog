import { Flex } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

export type SocialButtonVariant = "blue" | "nav-bar";

interface SocialButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
  variant?: SocialButtonVariant;
}

const SocialButton = ({ label, icon: Icon, onClick }: SocialButtonProps) => (
  <Flex
    as="button"
    align="center"
    gap={2}
    border="1px solid"
    borderColor="rule"
    borderRadius="2rem"
    px={3}
    py={2}
    fontFamily="mono"
    fontSize="11px"
    fontWeight="500"
    letterSpacing="0.12em"
    textTransform="uppercase"
    color="ash"
    bg="transparent"
    cursor="pointer"
    _hover={{
      bg: "irisGlow",
      borderColor: "iris",
      color: "iris",
    }}
    transition="all 0.2s ease"
    onClick={onClick}
  >
    <Icon size={14} />
    {label}
  </Flex>
);

export default SocialButton;
