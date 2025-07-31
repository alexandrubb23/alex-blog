import { AUTHOR } from "@/app/constants";
import { Separator } from "@/components/Separator";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";

const AuthorEmail = () => (
  <AnimationScroll fontSize="20px" wait={1.3} direction="down">
    {AUTHOR.EMAIL_ADDRESS}
    <Separator height="5px" />
  </AnimationScroll>
);

export default AuthorEmail;
