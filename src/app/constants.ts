export const AUTHOR: Readonly<{
  NAME: string;
  PHONE_NUMBER: string;
  EMAIL_ADDRESS: string;
  ADDRESS: {
    STREET: string;
    CITY: string;
    COUNTRY: string;
  };
  PICTURE: string;
}> = {
  NAME: 'Alexandru Barbulescu',
  PHONE_NUMBER: '+40-735 538 558',
  EMAIL_ADDRESS: 'alex_bb23@yahoo.co.uk',
  ADDRESS: {
    STREET: 'Str. Sf. Vineri, nr. 23',
    CITY: 'Bucharest',
    COUNTRY: 'Romania',
  },
  PICTURE: 'https://github.com/alexandrubb23.png',
};

export const HTTP_QUERY_KEYS: Readonly<{
  PAGE_SOURCE: string;
}> = {
  PAGE_SOURCE: 'pageSource',
};

export const QUERY_KEYS: Readonly<{
  CERTIFICATIONS: string;
  EXERCISES: string;
  POSTS: string;
}> = {
  CERTIFICATIONS: 'certifications',
  EXERCISES: 'exercises',
  POSTS: 'posts',
};

export const ROUTES: Readonly<{
  HOME: string;
  ABOUT_AUTHOR: string;
  CERTIFICATIONS: string;
  CONTACT: string;
}> = {
  HOME: '/',
  ABOUT_AUTHOR: '/pages/alexandru-barbulescu',
  CERTIFICATIONS: '/certifications',
  CONTACT: '/contact',
};
