var service = require('./service');

function start()
{
    console.log('1. Lister les clients');
    console.log('2. Ajouter client')
    console.log('99. Sortir');

    var readline = require('readline');

    var choix = readline.createInterface({
        input: process.stdin,
        outpt: process.stdout
    })

    choix.question('saisissez un numéro : ', function (saisie) {
        if (saisie === '99') {

            console.log('Au revoir');
            choix.close();
        }
        else if (saisie === '1') {
            console.log('***Liste des clients***');
            service.listerClients(function(data){
                data.forEach(function(client) {
                    console.log(client.uuid);
                    console.log(client.nom);
                    console.log(client.prenoms);
                    console.log('**********');
                });
                start();
            });
        } 
        else if(saisie === '2'){
            console.log('***Ajouter client***');
            service.AjouterClient(function(data){
                start();
            });
            
        }
    })
}
exports.start = start; 



