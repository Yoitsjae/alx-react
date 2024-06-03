// 8-seq.js
import { Seq } from 'immutable';

export function printBestStudents(grades) {
    const bestStudents = Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
        }))
        .toObject();
    console.log(bestStudents);
}

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
