import { Box, BoxProps } from "@chakra-ui/react";

interface AnimatedBoxProps extends BoxProps {
  delay?: number;
}

const AnimatedBox = ({ children, delay, ...rest }: AnimatedBoxProps) => (
  <Box
    key={Date.now()}
    animationName="fade-in"
    animationDuration="600ms"
    animationFillMode="forwards"
    animationTimingFunction="ease-out"
    opacity={0}
    animationDelay={`${delay}ms`}
    {...rest}
  >
    {children}
  </Box>
);

export default AnimatedBox;
