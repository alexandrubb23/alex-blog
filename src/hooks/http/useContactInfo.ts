import contactInfo from '@/data/contactInfo';

const useContactInfo = () => ({
  data: contactInfo,
  isLoading: false,
  error: null,
});

export default useContactInfo;
