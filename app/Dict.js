const dict = {
  'en-US': {
    login: 'login',
    logout: 'logout',
    test: 'test',
    other: 'other',
    appName: 'SSCRG CLUB',
    homePageContent: 'This is the Home Page',
    testPageContent: 'This is the Test Page',
  },
  zh: {
    login: '登录',
    logout: '登出',
    test: '测试',
    other: '其他',
    appName: 'SSCRG 俱乐部',
    homePageContent: '这是首页',
    testPageContent: '这是测试页',
  },
};

dict.en = dict['en-US'];
dict['zh-HK'] = dict.zh;
dict['zh-TW'] = dict.zh;
dict['zh-CN'] = dict.zh;

export default dict;
