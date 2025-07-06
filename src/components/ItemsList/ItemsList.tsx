import { List } from "@chakra-ui/react";

import { useMemo } from "react";
import { Separator } from "../Separator";

type ID = { id: string };

interface ItemsListProps<T extends ID = ID> {
  addItems?: string[];
  data: T[];
  onClick?: (id: string) => void;
  selectedId?: string | null;
}

const ItemsList = ({ data, onClick, addItems, selectedId }: ItemsListProps) => {
  const ids = useMemo(() => {
    const ids = data.map((item) => item.id);
    return addItems ? [...addItems, ...ids] : ids;
  }, [data, addItems]);

  return (
    <List.Root
      display="flex"
      flexDirection="row"
      gap="28px"
      listStyleType="none"
    >
      {ids?.map((id, index) => (
        <List.Item key={id} onClick={() => onClick?.(id)} cursor="pointer">
          {id}
          {(selectedId === id || (!selectedId && index === 0)) && (
            <Separator size="md" borderColor="black" />
          )}
        </List.Item>
      ))}
    </List.Root>
  );
};

export default ItemsList;
