/**
 *
 * @param {object} args commander
 */

module.exports = (args) => {
  const envWhiteList = ['port', 'host', 'https', 'dir', 'debug'];

  envWhiteList.forEach((key) => {
    if (typeof args[key] !== 'undefined') {
      process.env[key.toLocaleUpperCase()] = args[key];
    }
  });
};