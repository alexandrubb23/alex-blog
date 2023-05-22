/* eslint-disable react/no-children-prop */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const ContactForm = () => {
  return (
    <>
      <FormControl id='name'>
        <FormLabel>Your Name</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<BsPerson />} />
          <Input type='text' size='md' />
        </InputGroup>
      </FormControl>
      <FormControl id='name'>
        <FormLabel>Mail</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<MdOutlineEmail />}
          />
          <Input type='text' size='md' />
        </InputGroup>
      </FormControl>
      <FormControl id='name'>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder='message' />
      </FormControl>
      <FormControl id='name' float='right'>
        <Button
          variant='solid'
          bg='#0D74FF'
          color='white'
          _hover={{}}
          isDisabled={true}
        >
          Send Message
        </Button>
      </FormControl>
    </>
  );
};

export default ContactForm;
