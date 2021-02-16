import * as _ from 'lodash';
import { multichoose } from './multichoose';

interface KillerConfigParams {
  availableDigits: number[], 
  requiredDigits?: number[], 
  count: number, 
  sum: number
}

const isUnique = (array: number[]) : boolean => {
  const map : Record<number, number> = {};
  for (const num of array) {
    if (map[num] === 1) {
      return false;
    }
    map[num] = 1;
  }
  return true;
} 

export const getKillerConfigs = (params: KillerConfigParams) : number[][] => {
  const possibilities: number[][] = [];
  multichoose(params.count, params.availableDigits, (possibility) => {
    let skipsRequired = false;
    if (!isUnique(possibility)) {
      return;
    }
    for (const digit of (params.requiredDigits || [])) {
      if (!_.includes(possibility, digit)) {
        skipsRequired = true;
        continue;
      }
    }
    if (!skipsRequired) {
      let sum = 0;
      for (const i of possibility) {
        sum += i;
      }
      if (sum === params.sum) {
        possibilities.push(possibility);
      }
    }
    
  });
  return possibilities;
};

// console.dir(getKillerConfigs({
//   availableDigits: [1,2,3,4,5,6,7,8,9],
//   requiredDigits: [5],
//   count: 4,
//   sum: 12,
// }));