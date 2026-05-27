import SolidButton, { type SolidButtonProps } from "./SolidButton";

const SolidAnimatedButton: React.FC<SolidButtonProps> = ({
  children,
  onClick,
  visual = "solidPurple",
  icon,
  ...restProps
}) => {
  return (
    <SolidButton
      icon={icon}
      onClick={onClick}
      css={{
        position: "relative",
        overflow: "hidden",
        "& .button-prompt": {
          transition: "color 0.2s ease, opacity 0.2s ease",
        },
        "&:hover .button-prompt": {
          opacity: 1,
          color: "var(--graphite)",
        },
      }}
      visual={visual}
      {...restProps}
    >
      {children}
    </SolidButton>
  );
};

export default SolidAnimatedButton;
