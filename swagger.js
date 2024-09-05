const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Aplicación Backend con Autenticación',
        version: '1.0.0',
        description: 'Documentación de la API del proyecto 6',
    },
    tags: [
    {
      "name": "Auth",
      "description": "Autenticación y autorización"
    },
    {
      "name": "User",
      "description": "Operaciones usuarios"
    },
    {
      "name": "Product",
      "description": "Operaciones productos"
    }
  ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};