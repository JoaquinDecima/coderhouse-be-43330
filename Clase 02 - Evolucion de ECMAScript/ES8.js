// Tengo un objeto con sus atributos
const impuestos = {
	impuesto1: 300,
	impuesto2: 5125,
	impuesto3: 3001,
	impuesto4: 560,
};

// Utilizo Object.entries para obtener una lista de clave-valor de los atributos del objeto
let parClaveValor = Object.entries(impuestos);
console.log(parClaveValor);

// Uyilizo Object.values para obtener una lista de los valores de los atributos del objeto
let values = Object.values(impuestos);
console.log(values);

// Utilizo Object.keys para obtener una lista de las claves de los atributos del objeto
let keys = Object.keys(impuestos);
console.log(keys);

// Utilizamos reduce para sumar todos los valores de un array
let totalAPagar = values.reduce((valor, acumulado) => acumulado + valor);
console.log(totalAPagar);
