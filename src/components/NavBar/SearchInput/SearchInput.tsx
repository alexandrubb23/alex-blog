import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log('Search...');
      }}
    >
      <InputGroup>
        <InputLeftAddon />
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
