import config from './config.js';
import server from './server.js';
import { logger } from './util.js';

server.listen(3000)
    .on('listening', () => {
        // console.log(`Server running`);
        logger.info('Server running');
    })