import { printBestStudents } from './8-seq.js';

const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 45,
        firstName: 'paul',
        lastName: 'doe',
    },
    3: {
        score: 77,
        firstName: 'jane',
        lastName: 'doe',
    },
};

printBestStudents(grades);
// should print:
// {
//     "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
//     "3": { score: 77, firstName: "Jane", lastName: "Doe" },
// }
