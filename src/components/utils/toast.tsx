import { useToast } from "@chakra-ui/react";

export const ToastFeedback = (
  title: string,
  statuses: "success" | "error" | "warning" | "info"
) => {
  const toast = useToast();
  toast({
    title: title,
    position: "top-right",
    status: statuses,
    isClosable: true,
  });
};