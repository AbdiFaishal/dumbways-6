const bruno = (inputArr) => {
  let totalSum = [];
  let sum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    sum = 0;
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[i] !== inputArr[j]) {
        sum += inputArr[j];
        totalSum[i] = sum;
      }
    }
  }

  let min = totalSum[0],
    max = totalSum[0];

  for (let k = 1; k < totalSum.length; k++) {
    let value = totalSum[k];
    min = value < min ? value : min;
    max = value > max ? value : max;
  }

  return `Angka terkecilnya ${min} dan terbesarnya ${max}`;
};
