import { MenuProps } from "@/components/common/Menus/models";
import { MenuList } from "../MenuList";

const HorizontalMenu = ({ data }: MenuProps) => (
  <MenuList data={data} hideBelow="md" fontSize="14px" />
);

export default HorizontalMenu;
