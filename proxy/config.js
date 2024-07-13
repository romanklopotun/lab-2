const convict = require('convict');
const validator = require('validator');

// Додавання власного формату 'url'
convict.addFormat({
  name: 'url',
  validate: (val) => {
    if (!validator.isURL(val, { require_tld: false })) {
      throw new Error('must be a URL');
    }
  },
  coerce: (val) => String(val)
});

const config = convict({
  proxyPort: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3001,
    env: 'PROXY_PORT'
  },
  apiUrl: {
    doc: 'The API URL.',
    format: 'url',
    default: 'http://localhost:3002',
    env: 'API_URL'
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;
