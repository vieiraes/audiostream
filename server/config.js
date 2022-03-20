// __dirname e __filename só funciona quando NAO utiliza ecmascript modules
// tudoq ue for arquivo statico ( a estrutura dos arquivos dof ronte end nao mudarao)
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, '../');
const audioDirectory = join(currentDir, 'audio');
const publicDirectory = join(currentDir, 'public');


export default {

    port: process.env.PORT || 3000,
    dir: {
        root,
        publicDirectory,
        audioDirectory,
        songsDirectory: join(audioDirectory, 'songs'),
        fxDirectory: join(audioDirectory, 'fx'),

    },
    pages: {
        homeHTML: 'home/index.html',
        controllerHTML: 'controller/index.html'
    },
    location: {
        home: '/home'

    }
}
