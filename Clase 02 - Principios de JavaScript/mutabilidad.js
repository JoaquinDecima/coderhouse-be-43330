// Defino una constante con una Lista vacia

const myList = [];

// Muestro la lista
console.log(myList);

// Intento modificar la variable de la lista y obtengo error
// Descomentar linea para poder ver error
// myList = [1, 10, 5]

// Inserto  3 elemento a la lista
myList.push(1);
myList.push(10);
myList.push(5);

// Si bien la lista es la misma, muto y ahora tiene 3 elementos
console.log(myList);

// Si bien no podemos cambiar la lista si podemos cambiar un elemento de ella
// ATENCION: El primer elemento es el indice 0, el segundo es el indice 1, etc...
myList[0] = 12378712;

// Si bien la lista es la misma, muto y ahora el 1 elemento es diferente
console.log(myList);
