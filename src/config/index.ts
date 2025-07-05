const isDev = process.env.NODE_ENV === 'development';

let config = {
  request: {
    token: ['ghp_POKLPJsLlupuS0qR', 'JZ7aYwuMXivIgG4Ne353'],
    clientID: isDev ? 'Ov23liR3JFjYgqlvKfNT' : '694df1779e48d5a450d3',
    clientSecret: isDev
      ? 'ee095d759fa9c814915a0a18e272e96975d5bae3'
      : '23420dd29f671adc5107a5565ed47f655f8e1260',
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'Mor1onzzz',
    repo: 'daydayup',
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
