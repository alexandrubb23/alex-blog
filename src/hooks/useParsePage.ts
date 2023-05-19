import usePage from './usePage';
import useParseContent from './useParseContent';

const useParsePage = (pageName: string) => {
  const { data, isLoading, error } = usePage(pageName);

  const page = useParseContent(data);

  return { page, isLoading, error };
};

export default useParsePage;
