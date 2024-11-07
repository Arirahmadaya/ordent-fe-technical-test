function remainder(firstvalue, secondvalue) {

  // Menentukan yang lebih besar dan lebih kecil
  let larger = firstvalue > secondvalue ? firstvalue : secondvalue;
  let smaller = firstvalue > secondvalue ? secondvalue : firstvalue;

  // Mengembalikan hasil modulus dari larger dibagi smaller
  return larger % smaller;
}

console.log(remainder(15, 17));
console.log(remainder(13, 72)); 
console.log(remainder(0, -1)); 
console.log(remainder(0, 1));
console.log(remainder(2, 0)); 

