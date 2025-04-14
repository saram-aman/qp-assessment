import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { errorHandler } from './middlewares/errorMiddleware';
import router from './routes';

const app = express();

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(router)

app.use(errorHandler);

export default app;
