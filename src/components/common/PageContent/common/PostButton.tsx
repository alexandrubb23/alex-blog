import { Button, ButtonProps } from "@chakra-ui/react";

export type SocialButtonProps = Omit<SocialMedia, "button" | "id"> & {
  shareUrl: string;
};

export type SocialMedia = {
  icon: React.ElementType;
  id: string;
  isCopy?: boolean;
  label: string;
  onClick?: (shareUrl: string) => void;
};

const PostButton = ({ children, ...rest }: ButtonProps) => (
  <Button
    border="1px solid"
    borderRadius="2rem"
    borderColor="rule"
    color="ash"
    _hover={{
      bg: "irisGlow",
      borderColor: "iris",
      color: "iris",
    }}
    fontFamily="mono"
    fontSize={{ base: "10px", sm: "11px" }}
    fontWeight="500"
    letterSpacing="0.12em"
    textTransform="uppercase"
    size={{
      base: "2xs",
      sm: "sm",
    }}
    variant="outline"
    px={{ base: 2, sm: 3 }}
    py={{ base: 4, sm: 2 }}
    minW="0"
    flex="1"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
    transition="all 0.2s ease"
    {...rest}
  >
    {children}
  </Button>
);

export default PostButton;
