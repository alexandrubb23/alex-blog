import { IconLabel } from "@/components/common";
import { useContactInfo } from "@/hooks";
import { VStack } from "@chakra-ui/react";

const ContactInfo = () => {
  const { data: contactInfo } = useContactInfo();

  return (
    <VStack
      fontSize={{
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
      }}
      display={"flex"}
      gap={4}
      alignItems="flex-start"
    >
      {contactInfo?.map(({ icon: Icon, label, iconColor }) => (
        <IconLabel
          key={label}
          icon={Icon}
          label={label}
          iconWrapperProps={{ color: iconColor }}
          iconSize={30}
        />
      ))}
    </VStack>
  );
};

export default ContactInfo;
