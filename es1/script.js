/*
1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
*/

const student = {
    nome: 'Gigi',
    cognome: 'Buffon',
    età: 44,
}


for (let key in student){
    console.log(key, ':', student[key]);
}


const students = [
    {
        nome: 'Gigi',
        cognome: 'Buffon',
        età: 44,
    },
    {
        nome: 'Gigia',
        cognome: 'Buffona',
        età: 44,
    },
    {
        nome: 'Gigina',
        cognome: 'Buffons',
        età: 44,
    }
];

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}