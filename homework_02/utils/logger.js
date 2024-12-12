import colors from 'colors';
import config from 'config';

const colorsDisable = config.get('COLORS_ENABLED') === 0;

if (colorsDisable) {
  colors.disable();
}

const getLogger = (prefix) => ({
  info(message) {
    console.log(`${prefix}: ${message}`.blue);
  },
  warn(message) {
    console.error(`${prefix}: ${message}`.yellow);
  }
});

export default getLogger;