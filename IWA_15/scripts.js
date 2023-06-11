const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    let biggest = -Infinity;
    let biggestIndex = -1;
  
    for (const [, arr] of data.lists) {
      const lastNum = arr[arr.length - 1];
      if (lastNum > biggest) {
        biggest = lastNum;
        biggestIndex = data.lists.findIndex(([_, arr]) => arr[arr.length - 1] === lastNum);
      }
    }
  
    if (biggestIndex !== -1) {
      const [_, arr] = data.lists[biggestIndex];
      arr.pop();
      if (arr.length === 0) {
        data.lists.splice(biggestIndex, 1);
      }
    }
  
    return biggest;
  };
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);