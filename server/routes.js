import config from "./config";


const {
    location
 } = config
 

async function reoutes(request, response) {
    const { method, url } = request


    if (method === 'GET' && url === '/') {
        response.writeHead(302, {
            'Location': config.location.home
        })
        response.end()
    }

    if (method === 'GET' && url === '/') {


    }


    return response.end('Hello')
}



export function handler(request, response) {

    return routes(request, response)
        .catch(error => logger.error(`Deu ruim: ${error.stack}`));
}