import express from "express";
import ProductController from './controllers/ProductController';

export default () => {
    const $this = express();
    
    $this.use(express.json());
    $htis.use(express.urlencoded({extended: true}));
    
    $this.get('/api/v1/products', ProductController.idndex());

    return $this;
}

