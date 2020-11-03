const fetch = require('node-fetch');

const MyApi = {
   async getList(id) {
       try {
        const response = await fetch('http://192.168.1.53:4001/api/list/'+id);
        return response.json();
    } catch (err) {
        console.log(err);
    }
},

saveList(id, name, list) {

    let payload = {
        username: id,
        name: name,
        items: list
    }
    return fetch(`http://192.168.1.53:4001/api/items`, { headers: {
        'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
        method: 'POST',
        body: JSON.stringify(payload)
    });
},

async delete(id) {
    try {
         const response = await fetch(`http://192.168.1.53:4001/api/list/delete/${id}`, {method: 'POST', headers: {
        'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'}});
         return response.json();
        
    } catch (err) {
        console.log(err);
    }
   
},

saveUser(email, id) {
    let bodyRequest = {
        username: email,
        password: id
    }
    return fetch(`http://192.168.1.53:4001/api/users/register`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyRequest)
    }).then(response => {
       return response.json();
    });
},

 login(username, password) {
     let payload = {
         username: username,
         password: password
     }
    return fetch(`http://192.168.1.53:4001/api/users/login`,{ 
        headers: {
             'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response => {
        return response.json();
    })
}

};

export default MyApi;