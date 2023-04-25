const objeto1 = {
	prop1: 'a',
	prop2: 123,
	prop3: false,
};

const objeto2 = {
	prop1: 'd',
	prop2: [1, 4, 6, 8],
};

// Me quedo con los valores de prop1 y prop2 del objeto1
let { prop1, prop2 } = objeto1;
console.log(prop1);
console.log(prop2);
console.log(objeto1.prop1);

// Creao un objeto 3 con los atributos de objeto1 y objeto2 (si tienen claves repetidas quedan los que ponga mas afuera en este caso los de objeto2)
let objeto3 = { ...objeto1, ...objeto2 };
console.log(objeto3);

const objeto4 = {
	a: 1,
	b: 2,
	c: 3,
};

// Obtengo por un lado el valor del atributo a y por el otro el resto de los atributos
let { a, ...rest } = objeto4;
console.log(a);
console.log(rest);
console.log(rest.b);
