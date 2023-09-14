export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'Practica Integradora 4',
      version: '1.0.0',
      description: 'Practica Integradora 4',
      contact: {
        name: 'Pato',
        url: 'https://patojad.com.ar/'
      },
      servers: [{url:'http://localhost:3000'}]
    },
  },
  basePath: '/',
  apis: ['./src/routes/*.js']
};