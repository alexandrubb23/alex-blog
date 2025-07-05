import { HStack } from "@chakra-ui/react";

// import { ColorModeSwitch } from "./ColorModeSwitch";
import { PagesList } from "./PagesList";
// import { ContactSocialMedia } from "@/components/Contact";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <PagesList />
      {/* <ContactSocialMedia variant='nav-bar' />
      <ColorModeSwitch /> */}
    </HStack>
  );
};

export default NavBar;
