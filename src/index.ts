import 'dotenv/config';//Variables de entorno
import 'reflect-metadata';
import fs from 'fs';//FyleSystem
import path from 'path';//path 

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import swaggerJSDoc  from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import './utils/response/customSuccess';
import { errorHandler } from './middleware/errorHandler';
import { getLanguage } from './middleware/getLanguage';
import routes from './routes';
import { dbCreateConnection } from './typeorm/dbCreateConnection';

export const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(getLanguage);

try {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), {
        flags: 'a',
    });
    app.use(morgan('combined', { stream: accessLogStream }));
} catch (err) {
    console.log(err);
}
app.use(morgan('combined'));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'TypeORM RESTful API Test UMVEL',
        version: '1.0.0',
        description:
            'This is a REST API',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'JSONPlaceholder',
            url: '',
        },
    },
    
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Development server',
        },
    ],

};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/v1/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routes);

app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

(async () => {
    await dbCreateConnection();
})();




