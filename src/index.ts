import App from './app';
import config from './config';
import logger from './lib/middlewares/logger';

import ProductController from './controllers/api/ProductController';
import CategoryController from './controllers/api/CategoryController';
import CustomerController from './controllers/api/CustomerController';
import InventoryController from './controllers/api/InventoryController';
import OrderController from './controllers/api/OrderController';
import UserController from './controllers/api/UserController';
import HomeController from './controllers/HomeController';

const app = new App({
    port: config.port,
    host: config.host,
    controllers: [
        {
            prefix: '',
            controllers: [
                HomeController
            ]
        },
        {
            prefix: '/api/v1',
            controllers: [
                ProductController,
                CategoryController,
                CustomerController,
                InventoryController,
                OrderController,
                UserController,
            ]

        }
    ],
    middleWares: [
        logger
    ]
});

app.listen();