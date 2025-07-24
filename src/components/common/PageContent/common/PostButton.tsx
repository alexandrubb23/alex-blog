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
    border="1.5px solid black"
    borderRadius="2rem"
    fontWeight="500"
    size={{
      base: "2xs",
      sm: "sm",
    }}
    variant="outline"
    fontSize={{ base: "9px", sm: "sm" }}
    {...rest}
  >
    {children}
  </Button>
);

export default PostButton;
