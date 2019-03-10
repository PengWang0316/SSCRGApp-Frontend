export const BASE_URL = ''; // Production server
/* URLS */
export const HOME_PAGE_URL = '/';

export const cognitoConfig = {
  userPoolId: 'us-west-2_dpFcYh6zK',
  region: 'us-west-2',
  userPoolWebClientId: 'jr91pfromc0iu9s0ee6cb4t8o',
};

export const amplifyAuthSignOption = {
  signUpConfig: {
    hiddenDefaults: ['phone_number', 'email', 'username'],
    signUpFields: [
      {
        label: 'Nickname', key: 'nickname', required: true, type: 'string', displayOrder: 1,
      },
      {
        label: 'Email', key: 'email', required: true, type: 'string', displayOrder: 2,
      },
    ],
  },
};
