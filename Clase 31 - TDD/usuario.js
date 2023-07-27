function login (user, password) {
    if (!user) {
        return {status:false, msg:'No se proporciono usuario'}
    }
    if (!password) {
        return {status:false, msg:'No se proporciono contraseña'}
    }
    if (user === 'coderhouse') {
        if (password === '123') {
            return {status: true, msg: 'Login correcto'}
        } else {
            return {status:false, msg: 'Contraseña incorrecta'}
        }
    } else {
        return {status:false, msg: 'Usuario incorrecto' }
    }
}

const cantTest = 5
let cantTestOk = 0

// Test 1
console.log('Test 1: No se proporciono usuario')
const case1 = login()
if (case1.status === false && case1.msg === 'No se proporciono usuario') {
    cantTestOk++
    console.log('Test 1 Ok')
} else {
    console.log('Test 1 Fail')
}

// Test 2
console.log('Test 2: No se proporciono contraseña')
const case2 = login('coderhouse')
if (case2.status === false && case2.msg === 'No se proporciono contraseña') {
    cantTestOk++
    console.log('Test 2 Ok')
} else {
    console.log('Test 2 Fail')
}

// Test 3
console.log('Test 3: Usuario incorrecto')
const case3 = login('coderhouse1', '123')
if (case3.status === false && case3.msg === 'Usuario incorrecto') {
    cantTestOk++
    console.log('Test 3 Ok')
} else {
    console.log('Test 3 Fail')
}

// Test 4
console.log('Test 4: Contraseña incorrecta')
const case4 = login('coderhouse', '1234')
if (case4.status === false && case4.msg === 'Contraseña incorrecta') {
    cantTestOk++
    console.log('Test 4 Ok')
} else {
    console.log('Test 4 Fail')
}

// Test 5
console.log('Test 5: Login correcto')
const case5 = login('coderhouse', '123')
if (case5.status === true && case5.msg === 'Login correcto') {
    cantTestOk++
    console.log('Test 5 Ok')
} else {
    console.log('Test 5 Fail')
}

console.log(`Se realizaron ${cantTest} tests, de los cuales ${cantTestOk} fueron OK y ${cantTest - cantTestOk} fallaron`)
