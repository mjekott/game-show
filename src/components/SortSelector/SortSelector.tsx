import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSort?: (sortOrder: string) => void;
  selectedSort?: string | null;
}

const SortSelector: FC<SortSelectorProps> = ({
  selectedSort,
  onSelectSort,
}) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSort = sortOrders.find((item) => item.value === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSort?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => onSelectSort && onSelectSort(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
