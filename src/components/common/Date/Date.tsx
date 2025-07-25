import { Box } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

interface DateProps {
  dateString: string;
}

const Date = ({ dateString }: DateProps) => {
  if (dateString === "") return null;

  const date = parseISO(dateString);
  return (
    <Box as="time" data-time={dateString}>
      {format(date, "LLLL d, yyyy")}
    </Box>
  );
};

export default Date;
