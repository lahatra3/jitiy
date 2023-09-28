import { request } from 'node:https';

const options = {
    host: 'feed.evangelizo.org',
    method: 'GET',
    path: '/MG/days'
};
const callback = response => {
    let data = '';
    response.on(
        'data', 
        chunk => data += chunk
    );
    response.on(
        'end', 
        () => console.log(JSON.parse(data)['data']['reading'])
    );
}

request(options, callback).end();
