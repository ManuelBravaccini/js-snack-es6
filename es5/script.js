/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const persone = [
    {
        nome: 'buffon',
        cognome: 'noffub',
        età: 44,
    },
    {
        nome: 'fianpiero',
        cognome: 'rossi',
        età: 55,
    },
    {
        nome: 'francesco',
        cognome: 'totti',
        età: 16,
    },
    {
        nome: 'roberto',
        cognome: 'baggio',
        età: 20,
    },
    {
        nome: 'riccardo',
        cognome: 'montolivo',
        età: 16,
    },
    {
        nome: 'adrian',
        cognome: 'mutu',
        età: 20,
    },
    {
        nome: 'sebastien',
        cognome: 'frey',
        età: 16,
    },
    {
        nome: 'javeier',
        cognome: 'zanetti',
        età: 20,
    },
    {
        nome: 'lionel',
        cognome: 'messi',
        età: 16,
    },
    {
        nome: 'cristiano',
        cognome: 'ronaldo',
        età: 20,
    }
];

const newPersone = persone.map((person) => {
    const isMaggiorenne = person.età >= 18;
    return `${person.nome} ${person.cognome}, ${isMaggiorenne ? 'può guidare' : 'non può guidare'}`;
})

console.log(newPersone);