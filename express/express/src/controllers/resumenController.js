const fs = require('fs');
const path =  require('path');

let usuarios = fs.readFileSync(path.resolve(__dirname, '../nombres.json'), { encoding:'utf-8'});
usuarios = JSON.parse(usuarios);

let resumenController = {
    resumenExpress: function(req, res){
        let data = { user: [], admin: [] }

        usuarios.forEach(usuario => {
            if (usuario.rol == 'user'){
                data.user.push(usuario);
            } else{
                data.admin.push(usuario);
            }
        })

        res.render('resumen-express', data);
    },
    rutaParametrizada: function(req, res){
        if (req.params.idOpcion == undefined){
            res.send('Estas en las opciones de la Ruta Parametrizada ' + req.params.id);
        }else {
            res.send('Estas en la opcion ' + req.params.idOpcion + ' de la Ruta Parametrizada ' + req.params.id);
        }
    }
}

module.exports = resumenController;