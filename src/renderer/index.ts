import './App';
import './css/index.css';
import * as log from 'electron-log';
import { join as joinPath } from 'path';

log.transports.file.resolvePath = (variables, message) => {
	return joinPath(__dirname, '..', '..', '_local', 'logs', 'renderer.log');
};
log.transports.file.maxSize = 0;
