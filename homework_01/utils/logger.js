const getLogger = (prefix) => ({
  info(message) {
    console.log(`${prefix}: ${message}`);
  },
  warn(message) {
    console.error(`${prefix}: ${message}`);
  }
});

module.exports = getLogger;