const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //HACER: leer DB si existe
    }

    async ciudad (lugar = ''){
        try {
            // petición http
            // console.log('ciudad', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            return [];

        } catch (e) {
            return [];
        }

    }
}

module.exports = Busquedas;
