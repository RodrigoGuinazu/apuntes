let paises = [
    {
        pais: 'Argentina',
        continente: 'America',
        moneda: 'Peso',
        habitantes: 40000000,
    },
    {
        pais: 'Estados Unidos',
        continente: 'America',
        moneda: 'Dolar',
        habitantes: 350000000,
    },
    {
        pais: 'Alemania',
        continente: 'Europa',
        moneda: 'Euro',
        habitantes: 83000000,
    }
]

module.exports = {
    paises: paises,
    total: paises.length,
}