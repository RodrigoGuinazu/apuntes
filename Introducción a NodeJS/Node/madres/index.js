// Ejemplo de objeto para crear un modulo propio

let madres = [
    {
        nombre: 'Tu Vieja',
        peculiaridad: 'Dos veces animal',
        saludo: function(){
        return this.nombre + ' es ' + this.peculiaridad;
        }
    },
    {
        nombre: 'Tu Mama',
        peculiaridad: 'Cool',
        saludo: function(){
        return this.nombre + ' es ' + this.peculiaridad;
        }
    },
    {
        nombre: 'Tu Madre',
        peculiaridad: 'Una Arpia',
        saludo: function(){
        return this.nombre + ' es ' + this.peculiaridad;
        }
    }
];

module.exports = madres;