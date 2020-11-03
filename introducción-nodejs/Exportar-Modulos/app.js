let {paises, total} = require('./paises');

for(i=0; i<total; i++){
    console.log(paises[i].pais + ' Ubicado en ' + paises[i].continente + ', su moneda es el ' + paises[i].moneda + ' y tiene ' + paises[i].habitantes + ' de habitantes.');
}
