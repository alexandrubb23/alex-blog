export const AUTHOR: Readonly<{
  NAME: string;
  PHONE_NUMBER: string;
  EMAIL_ADDRESS: string;
  ADDRESS: {
    STREET: string;
    CITY: string;
    COUNTRY: string;
  };
}> = {
  NAME: 'Alexandru Barbulescu',
  PHONE_NUMBER: '+40-735 538 558',
  EMAIL_ADDRESS: 'alex_bb23@yahoo.co.uk',
  ADDRESS: {
    STREET: 'Str. Sf. Vineri, nr. 23',
    CITY: 'Bucharest',
    COUNTRY: 'Romania',
  },
};

export const HTTP_QUERY_KEYS: Readonly<{
  PAGE_SOURCE: string;
}> = {
  PAGE_SOURCE: 'pageSource',
};

export const QUERY_KEYS: Readonly<{
  PAGE: string;
  POST: string;
  POSTS: string;
  CERTIFICATIONS: string;
  CETIFICATE: string;
}> = {
  CERTIFICATIONS: 'certifications',
  CETIFICATE: 'certificate',
  PAGE: 'page',
  POST: 'post',
  POSTS: 'posts',
};
