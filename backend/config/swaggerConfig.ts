import dotenv from "dotenv";
dotenv.config();

export const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Hackman",
    version: "0.1.0",
    description: "Some description about your APIs",
    contact: {
      name: "Aditya Agarwal",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: "Local Environment",
    },
    {
      url: `${process.env.PROD_URL}`,
      description: "Production Environment",
    },
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
};
