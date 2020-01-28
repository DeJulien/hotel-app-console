var request = require('request');
function listerClients(callbackFn) {
    
    request('https://hotel-app-ap.herokuapp.com/clients', { json: true }, function (err, res, data) {
        
        // 3
        callbackFn(data);
      
    });

}
exports.listerClients = listerClients;

function AjouterClient(nom , prenom){

    request.post(
        'https://hotel-app-ap.herokuapp.com/clients',
        {
          json: {
            "nom": nom,
            "prenoms":prenom
          }
        },
        (error, res, body) => {

        });
      
}
exports.AjouterClient = AjouterClient;

function trouverClient(callbackFn){
    request('https://hotel-app-ap.herokuapp.com/clients', { json: true }, function (err, res, data) {
        
        // 3
        callbackFn(data);
      
    });

}
exports.trouverClient = trouverClient;