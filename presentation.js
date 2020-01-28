
function start()
{
    console.log('1. Lister les clients'),

    console.log('99. Sortir')

    var readline = require('readline');

    var choix = readline.createInterface({
        input: process.stdin,
        outpt: process.stdout
    })

    choix.question('saisissez un numéro : ', function (saisie) {

        if (saisie == 1) {

            console.log('***Liste des clients***');
            start();

        } else if (saisie == 99) {

            console.log('Au revoir');
            choix.close();
        }
    })
}
exports.start = start; 



