import App from './app';
import config from './config';
import logger from './middlewares/logger';

import ProductController from './controllers/ProductController';
import CategoryController from './controllers/CategoryController';
import CustomerController from './controllers/CustomerController';
import InventoryController from './controllers/InventoryController';
import OrderController from './controllers/OrderController';
import UserController from './controllers/UserController';

const app = new App({
    port: config.port,
    host: config.host,
    version: config.version,
    controllers: [
        ProductController,
        CategoryController,
        CustomerController,
        InventoryController,
        OrderController,
        UserController,
    ],
    apiControllers: [],
    middleWares: [
        logger
    ]
})

app.listen();