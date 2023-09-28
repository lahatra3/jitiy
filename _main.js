import { get } from 'node:https';

async function getTeninAndriamanitraAnio() {
    return new Promise((resolve) => 
        get('https://feed.evangelizo.org/MG/days', (response) => {
            resolve(response);
        }));
}

let data = '';
const read = await getTeninAndriamanitraAnio();
read.on(
    'data', 
    chunk => data += chunk
);
read.on(
    'end', () =>  console.log(JSON.parse(data)['data']['readings'])
);
