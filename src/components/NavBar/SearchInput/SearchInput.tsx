import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log('Search...');
      }}
    >
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          borderRadius={10}
          placeholder='Search posts...'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
