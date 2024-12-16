import colors from 'colors/safe';
import config from 'config';

const colorsDisable = config.get('COLORS_ENABLED') === 0;

if (colorsDisable) {
  colors.disable();
}

const getLogger = (prefix: string) => ({
  info(message: string) {
    console.log(colors.blue(`${prefix}: ${message}`));
  },
  warn(message: string) {
    console.error(colors.yellow(`${prefix}: ${message}`));
  },
  error(message: string) {
    console.error(colors.red(`${prefix}: ${message}`));
  }
});

export default getLogger;