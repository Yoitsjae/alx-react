import { map, map2 } from './4-mutations.js';

console.log(map.toJS());  // should print the initial map
console.log(map2.toJS()); // should print the modified map with changes
