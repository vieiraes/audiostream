import fs from 'fs'
import fsPromises from 'fs/promises';
import config from './config.js';
import { Stream } from 'stream';
import { join, extname } from 'path';

//extrai tudo ed config
const {

    dir: {
        publicDirectory
    }
} = config;


export class Service {
    createFileStream(filename) {
        return fs.createReadStream(filename);
    }


    async getFileInfo(file) {

        const fullFilePath = join(publicDirectory, file);
        await fsPromises.access(fullFilePath);
        const fileType = extname(fullFilePath)
        return {
            type: fileType,
            name: fullFilePath
        }

    }



    async getFileSteram(file) {

        const {
            name,
            type

        } = await this.getFileInfo(file);
        return {
            stream: this.createFileStream()
        };
    }


}