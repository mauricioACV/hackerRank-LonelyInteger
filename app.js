console.clear();

// *************************EJERCICIO******************************
// dado un arreglo de numeros, averiguar numero unico
// *************************EJERCICIO******************************

const numbers = [1, 2, 3, 4, 3, 2, 1];

function uniqueNumber(arr) {
  let uniqueNumber;
  arr.forEach((item) => {
    const findUnique = arr.filter((num) => num === item);
    if (findUnique.length === 1) {
      uniqueNumber = findUnique[0];
    }
  });
  return uniqueNumber ? uniqueNumber : null;
}

console.log(uniqueNumber(numbers));
