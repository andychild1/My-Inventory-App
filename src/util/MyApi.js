const fetch = require('node-fetch');

const MyApi = {
   async getList() {
       try {
        const response = await fetch(`http://localhost:4001/lists`, {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000/'}
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
},

save(name, list) {
    return fetch(`http://localhost:4001/items?name=${name}&items=${list}`, {
        method: 'POST',
        body: JSON.stringify(name, list),
        contentType: "application/json; charset=utf-8"
    });
},

delete(name) {
    return fetch(`http://localhost:4001/items/${name}`, {method: 'DELETE'});
}

};

export default MyApi;