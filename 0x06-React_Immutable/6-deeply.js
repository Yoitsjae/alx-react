// 6-deeply.js
import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
    return Map(page1).mergeDeep(Map(page2));
}

import { mergeDeeplyElements } from './6-deeply.js';

const page1 = {
    'user-1': {
        id: 1,
        name: 'test',
        likes: {
            1: {
                uid: 1234,
            }
        }
    },
};

const page2 = {
    'user-1': {
        likes: {
            2: {
                uid: 134,
            }
        }
    },
};

console.log(mergeDeeplyElements(page1, page2).toJS());
