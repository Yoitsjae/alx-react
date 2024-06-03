// 7-equality.js
import { Map, is } from 'immutable';

export function areMapsEqual(map1, map2) {
    return is(Map(map1), Map(map2));
}
import { areMapsEqual } from './7-equality.js';
import { Map } from 'immutable';

const map1 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});
const map2 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

console.log(areMapsEqual(map1, map2)); // should return true
