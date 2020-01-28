var request = require('request');
function listerClients(callbackFn) {
    
    request('https://hotel-app-ap.herokuapp.com/clients', { json: true }, function (err, res, data) {
        
        // 3
        callbackFn(data);
      
    });

}
exports.listerClients = listerClients;

function AjouterClient(callbackFn){

    
    var request = require('request');

    request('https://hotel-app-ap.herokuapp.com/clients',{method: 'POST'} ,

    {data: '{"nom" : nom, "prenoms" : prenom}'},{ json: true }, function (err, res, data) {

        callbackFn(data);

     });
    

}
exports.AjouterClient = AjouterClient;