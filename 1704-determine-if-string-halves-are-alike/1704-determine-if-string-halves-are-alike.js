/**
 * @param {string} s
 * @return {boolean}
 */function halvesAreAlike(s) {
  s = s.toLowerCase();
  let leng = s.length / 2;
  let a = s.slice(0, leng);
  let b = s.slice(leng);
  let counta = 0;
  let countb = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
      counta++;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] === 'a' || b[i] === 'e' || b[i] === 'i' || b[i] === 'o' || b[i] === 'u') {
      countb++;
    }
  }

  return counta === countb;
}