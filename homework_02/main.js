import getLogger from './utils/logger.js'; // Why './utils/logger' raises an error Cannot find module 'D:\work\Node\homework_02\utils\logger' imported from D:\work\Node\homework_02\main.js
import config from 'config';

const host = config.get('host');

const { info, warn } = getLogger(host);

info("the script is running!"); 
warn("the script is failed!");
