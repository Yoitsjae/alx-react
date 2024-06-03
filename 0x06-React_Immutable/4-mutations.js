// 4-mutations.js
import { Map } from 'immutable';

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

import { map, map2 } from './4-mutations.js';

console.log(map.toJS());  // should print the initial map
console.log(map2.toJS()); // should print the modified map with changes
