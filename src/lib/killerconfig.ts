import {includes} from 'lodash';
import { multichoose } from "./multichoose";

interface KillerConfigParams {
  availableDigits: number[];
  requiredDigits?: number[];
  count: number;
  sum: number;
}

const isUnique = (array: number[]): boolean => {
  const map: Record<number, number> = {};
  for (const num of array) {
    if (map[num] === 1) {
      return false;
    }
    map[num] = 1;
  }
  return true;
};

export const getKillerConfigs = (params: KillerConfigParams): number[][] => {
  const possibilities: number[][] = [];
  multichoose(params.count, params.availableDigits, (possibility) => {
    let skipsRequired = false;
    if (!isUnique(possibility as number[])) {
      return;
    }
    for (const digit of params.requiredDigits || []) {
      if (!includes(possibility as number[], digit)) {
        skipsRequired = true;
        continue;
      }
    }
    if (!skipsRequired) {
      let sum = 0;
      for (const i of possibility as number[]) {
        sum += i;
      }
      if (sum === params.sum) {
        possibilities.push(possibility as number[]);
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
