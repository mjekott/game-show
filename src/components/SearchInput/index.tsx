import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearchText?: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearchText }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          onSearchText && onSearchText(searchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
