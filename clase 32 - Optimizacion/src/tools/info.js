export const generateUserErrorInfo = (user) => {
    return `
    Error con el usuario
    Name > ${user.name} 
    Last Name> ${user.lastname} 
    E-mail> ${user.email}`
}