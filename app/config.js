export const BASE_URL = ''; // Production server
/* URLS */
export const HOME_PAGE_URL = '/';
export const TEST_PAGE_URL = '/test';

export const cognitoConfig = {
  userPoolId: 'us-west-2_H5b19kIOP',
  region: 'us-west-2',
  userPoolWebClientId: '2nr52a5iheoumqcgr47qnlqojq',
};

export const amplifyAuthSignOption = {
  signUpConfig: {
    hiddenDefaults: ['phone_number', 'email', 'username'],
    signUpFields: [
      {
        label: 'Nickname', key: 'nickname', required: true, type: 'string', displayOrder: 1,
      },
      {
        label: 'Email', key: 'username', required: true, type: 'string', displayOrder: 2,
      },
    ],
  },
};
