import { Box, Field, Input, Textarea, VStack } from "@chakra-ui/react";

import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";

const ContactForm = () => {
  return (
    <VStack gap={4} alignItems="flex-start">
      <Field.Root gap={2}>
        <Field.Label>Your Name</Field.Label>
        <Input
          placeholder="Enter your name"
          borderWidth="1.5px"
          _focus={{
            focusRingColor: "primary",
            focusRingWidth: "1.5px",
            border: "none",
          }}
        />
      </Field.Root>
      <Field.Root gap={2}>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="e.q. john@doe.com"
          borderWidth="1.5px"
          _focus={{
            focusRingColor: "primary",
            focusRingWidth: "1.5px",
            border: "none",
          }}
        />
      </Field.Root>
      <Field.Root gap={2}>
        <Field.Label>Message</Field.Label>
        <Textarea
          placeholder="message"
          borderWidth="1.5px"
          _focus={{
            focusRingColor: "primary",
            focusRingWidth: "1.5px",
            border: "none",
          }}
          rows={6}
        />
      </Field.Root>
      <Field.Root float="right" gap={2}>
        <Box>
          <SolidAnimatedButton type="submit">Send Message</SolidAnimatedButton>
        </Box>
      </Field.Root>
    </VStack>
  );
};

export default ContactForm;
