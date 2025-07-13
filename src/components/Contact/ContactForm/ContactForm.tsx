import z from "zod";
import { Box, Field, VStack } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import { Input, Textarea } from "@/components/common/Form";
import { factoryApiClient } from "@/services";
import { Form } from "@/components/common/Form";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  message: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .min(1, "Message is required"),
});

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => (
  <Form
    method="post"
    action="contact"
    validationSchema={schema}
    defaultValues={defaultValues}
  >
    <VStack gap={4} alignItems="flex-start">
      <Field.Root gap={2}>
        <Input name="name" placeholder="Enter your name">
          Your Name
        </Input>
      </Field.Root>
      <Field.Root gap={2}>
        <Input placeholder="e.q. john@doe.com" name="email">
          Email
        </Input>
      </Field.Root>
      <Field.Root gap={2}>
        <Textarea name="message" placeholder="Maximum 500 characters">
          Message
        </Textarea>
      </Field.Root>
      <Field.Root float="right" gap={2}>
        <Box>
          <SolidAnimatedButton>Send Message</SolidAnimatedButton>
        </Box>
      </Field.Root>
    </VStack>
  </Form>
);

export default ContactForm;
