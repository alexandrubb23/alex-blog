import { MenuProps } from "@/components/common/Menus/models";
import { MenuList } from "../MenuList";

const HorizontalMenu = ({ data }: MenuProps) => (
  <MenuList data={data} hideBelow="md" />
);

export default HorizontalMenu;
