var service = require('./service');

function start()
{
    console.log('1. Lister les clients');
    console.log('2. Ajouter client');
    console.log('3. Rechercher un client par nom');
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
            choix.question('saisissez un nom : ', function (saisieN) {
                var nom=saisieN;
                choix.question('saisissez un prenom : ', function (saisieP) {
                    var prenom=saisieP;
                    console.log('nom : '+ nom);
                    console.log('prenom : '+ prenom);
                    service.AjouterClient(nom,prenom)
                    start();
                });
            });
        }
        else if(saisie === '3'){
            console.log('***Rechercher un client***');
                service.trouverClient(function(data){
                    choix.question('saisissez un nom : ', function (saisieC) {
                        var nom=saisieC;
                    data.forEach(function(client) {
                        if((client.nom).toLowerCase()===nom)
                        {
                        console.log(client.uuid);
                        console.log(client.nom);
                        console.log(client.prenoms);
                        console.log('**********');
                        }
                    });
                    start();
                });
            });
        }
    })
}
exports.start = start; 



