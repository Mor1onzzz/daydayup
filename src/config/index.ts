const isDev = process.env.NODE_ENV === 'development';

let config = {
  request: {
    token: ['ghp_POKLPJsLlupuS0qR', 'JZ7aYwuMXivIgG4Ne353'],
    clientID: isDev ? 'Ov23liR3JFjYgqlvKfNT' : 'Ov23liR3JFjYgqlvKfNT',
    clientSecret: isDev
      ? 'ee095d759fa9c814915a0a18e272e96975d5bae3'
      : 'ee095d759fa9c814915a0a18e272e96975d5bae3',
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'Mor1onzzz',
    repo: 'gwitter',
  },

  app: {
    onlyShowOwner: false,
    enableRepoSwitcher: true,
    enableAbout: false,
    enableEgg: false,
  },
};

const gConfig = (window as any).GWITTER_CONFIG;

if (gConfig) {
  if (gConfig.request) {
    config.request = {
      ...config.request,
      ...gConfig.request,
    };
  }
  if (gConfig.app) {
    config.app = {
      ...config.app,
      ...gConfig.app,
    };
  }
}

export default config;
