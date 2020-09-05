const hitungKembalian = (totalBelanja, totalBayar) => {
  const uang = [500, 2000, 5000, 10000, 20000, 50000];
  const uangKembalian = [];
  const hasil = [];
  let kembalian = totalBayar - totalBelanja;

  while (kembalian >= 0) {
    if (kembalian >= uang[5]) {
      kembalian -= uang[5];
      uangKembalian.push(uang[5]);
      // console.log('0', kembalian);
    } else if (kembalian >= uang[4]) {
      kembalian -= uang[4];
      uangKembalian.push(uang[4]);
      // console.log('1', kembalian);
    } else if (kembalian >= uang[3]) {
      kembalian -= uang[3];
      uangKembalian.push(uang[3]);
      // console.log('2', kembalian);
    } else if (kembalian >= uang[2]) {
      kembalian -= uang[2];
      uangKembalian.push(uang[2]);
      // console.log('3', kembalian);
    } else if (kembalian >= uang[1]) {
      kembalian -= uang[1];
      uangKembalian.push(uang[1]);
      // console.log('4', kembalian);
    } else if (kembalian >= uang[0]) {
      kembalian -= uang[0];
      uangKembalian.push(uang[0]);
      // console.log('5', kembalian);
    } else {
      break;
    }
  }

  let counts = {};
  uangKembalian.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (let x in counts) {
    console.log(`${counts[x]} x ${x}`);
    // hasil.push(`${counts[x]} x ${x}`);
  }

  // return hasil.forEach((el) => console.log(el));
};
