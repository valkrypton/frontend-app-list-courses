const { createConfig } = require('@openedx/frontend-build');

// Local override: the LMS's JWT cookie is scoped to the `.local.openedx.io`
// domain (Tutor convention), so this MFE must be served from a host under
// that domain (see .env.development BASE_URL). webpack-dev-server's default
// `allowedHosts` check rejects that hostname as an "Invalid Host header"
// unless we explicitly allow it here.
module.exports = createConfig('webpack-dev', {
  devServer: {
    allowedHosts: '.local.openedx.io',
  },
});
