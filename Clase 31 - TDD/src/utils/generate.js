import { faker } from '@faker-js/faker';

export function generateUser(){
    const numberOfProducts = faker.string.numeric();
    const products = [];
    for(let i = 0; i < numberOfProducts; i++){
        products.push({
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url()
        })
    }
    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.location.country(),
        products,
        id: faker.database.mongodbObjectId(),
        avatar: faker.image.avatar(),
        phone: faker.phone.number()
    }
}