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
      transition="all 0.3s ease"
      width="100%"
      css={{
        transition: "width 0.3s ease",
        width: "100%",
        "&:hover": {
          width: "107%",
        },
        "& .button-icon": {
          display: "inline-flex",
          transition: "transform 0.3s ease",
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
