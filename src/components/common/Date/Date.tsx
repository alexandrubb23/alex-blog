import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
}

const Date = ({ dateString }: DateProps) => {
  if (dateString === '') return null;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
