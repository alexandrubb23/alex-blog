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
    border="1.5px solid"
    borderRadius="2rem"
    borderColor={{
      _light: "black",
      _dark: "gray.900",
    }}
    _hover={{
      bg: {
        _dark: "gray.900",
      },
    }}
    fontWeight="500"
    size={{
      base: "2xs",
      sm: "sm",
    }}
    variant="outline"
    px={{ base: 1, sm: 3 }}
    py={{ base: 4, sm: 2 }}
    minW="0"
    flex="1"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
    {...rest}
  >
    {children}
  </Button>
);

export default PostButton;
