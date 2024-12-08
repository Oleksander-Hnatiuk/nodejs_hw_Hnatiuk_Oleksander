const getLogger = (prefix) => ({
  info(message) {
    console.log(`${prefix}: ${message}`);
  }
});

module.exports = getLogger;