/*
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'gpl',
    },
    {
        marca: 'Ferrari',
        modello: 'FXX',
        alimentazione: 'benzina',
    },
    {
        marca: 'Dacia',
        modello: 'Duster',
        alimentazione: 'diesel',
    },
    {
        marca: 'Tesla',
        modello: 'ModelX',
        alimentazione: 'elettrico',
    },
    {
        marca: 'Tesla',
        modello: 'CyberTruck',
        alimentazione: 'elettrico',
    },
    {
        marca: 'AlfaRomeo',
        modello: 'Stelvio',
        alimentazione: 'benzina',
    },
    {
        marca: 'Lamborghini',
        modello: 'Huracan',
        alimentazione: 'benzina',
    },
    {
        marca: 'Audi',
        modello: 'A3',
        alimentazione: 'gpl',
    },
    {
        marca: 'Audi',
        modello: 'R8',
        alimentazione: 'benzina',
    },
    {
        marca: 'Lancia',
        modello: 'Stratos',
        alimentazione: 'benzina',
    }
];


const gasCars = [];
const dieselCars = [];
const otherCars = [];


for (let i = 0; i < cars.length; i++){
    if (cars[i].alimentazione === 'benzina') {
        gasCars.push(cars[i]);
    } else if (cars[i].alimentazione === 'diesel'){
        dieselCars.push(cars[i]);
    } else {
        otherCars.push(cars[i]);
    }
}

console.log(gasCars, dieselCars, otherCars);