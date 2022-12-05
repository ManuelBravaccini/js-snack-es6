/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */


const zucchine = [
    {
        varietà: 'ita',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'usa',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'spa',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'lit',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'rus',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'alb',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'can',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'fra',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'mex',
        peso: 2,
        lunghezza: 10,
    },
    {
        varietà: 'cin',
        peso: 2,
        lunghezza: 10,
    }
];

let zucchinePeso = 0;

for (let i = 0; i < zucchine.length; i++){
    zucchinePeso += zucchine[i].peso;
}

console.log(zucchinePeso);