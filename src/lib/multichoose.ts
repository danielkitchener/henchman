// Typescript-ified from https://github.com/ekg/multichoose/blob/master/index.js

/*
def multichoose(k, objects):
    """n multichoose k multisets from the list of objects.  n is the size of
    the objects."""
    j,j_1,q = k,k,k  # init here for scoping
    r = len(objects) - 1
    a = [0 for i in range(k)] # initial multiset indexes
    while True:
        yield [objects[a[i]] for i in range(0,k)]  # emit result
        j = k - 1
        while j >= 0 and a[j] == r: j -= 1
        if j < 0: break  # check for end condition
        j_1 = j
        while j_1 <= k - 1:
            a[j_1] = a[j_1] + 1 # increment
            q = j_1
            while q < k - 1:
                a[q+1] = a[q] # shift left
                q += 1
            q += 1
            j_1 = q
*/

const range = (n: number) => Array.from(Array(n).keys())

export function multichoose(
  k: number,
  objects: number[],
  cb: (value: unknown) => void,
) {
  console.dir(range);
  let j = k,
    j_1 = k,
    q = k;
  const r = objects.length - 1;
  const a = range(k).map(function () {
    return 0;
  });
  while (true) {
    cb(
      range(k).map(function (i: number) {
        return objects[a[i]];
      }),
    );
    j = k - 1;
    while (j >= 0 && a[j] === r) --j;
    if (j < 0) break;
    j_1 = j;
    while (j_1 <= k - 1) {
      a[j_1] = a[j_1] + 1;
      q = j_1;
      while (q < k - 1) {
        a[q + 1] = a[q];
        ++q;
      }
      ++q;
      j_1 = q;
    }
  }
}
