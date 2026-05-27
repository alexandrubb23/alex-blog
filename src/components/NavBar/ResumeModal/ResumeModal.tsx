"use client";

import {
  Box,
  Button,
  Dialog,
  Field,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import { toaster } from "@/components/ui/toaster";
import { factoryApiClient } from "@/services";

const schema = z.object({
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schema>;

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const ResumeModal = ({ open, onClose }: ResumeModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const client = factoryApiClient("resume");
      await client.post(data);

      toaster.create({
        description: "Resume ready!",
        type: "success",
        duration: 5000,
      });

      handleClose();
    } catch {
      setError("password", {
        type: "server",
        message: "Invalid password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={({ open }) => !open && handleClose()}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="420px" mx={4}>
            <Dialog.Header>
              <Dialog.Title fontFamily="mono" letterSpacing="0.05em">
                ./resume access
              </Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Text fontSize="sm" color="fg.muted" mb={4}>
                Enter the access password provided by the admin to download or
                receive the resume.
              </Text>

              <form id="resume-form" onSubmit={handleSubmit(onSubmit)}>
                <Field.Root invalid={!!errors.password}>
                  <Field.Label
                    fontFamily="mono"
                    fontSize="xs"
                    letterSpacing="0.1em"
                  >
                    Password
                  </Field.Label>
                  <Input
                    type="password"
                    placeholder="Enter access password"
                    autoComplete="off"
                    {...register("password")}
                  />
                  {errors.password && (
                    <Field.ErrorText>{errors.password.message}</Field.ErrorText>
                  )}
                </Field.Root>
              </form>
            </Dialog.Body>

            <Dialog.Footer gap={3}>
              <Box>
                <Button
                  variant="ghost"
                  fontFamily="mono"
                  fontSize="11px"
                  letterSpacing="0.1em"
                  onClick={handleClose}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button
                  type="submit"
                  form="resume-form"
                  variant="outline"
                  border="1px solid"
                  borderColor="iris"
                  borderRadius="2px"
                  fontFamily="mono"
                  fontSize="11px"
                  fontWeight="600"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color="iris"
                  bg="transparent"
                  loading={isLoading}
                  _hover={{
                    bg: "irisGlow",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ResumeModal;
