import {Router} from 'express';
import productoControlador from '../controladores/productoControlador.js';
const productoContenedor = new productoControlador();
const productosTestRoute = Router();

productosTestRoute.get('/', async (req, res) => {
    try {
        const getFakeProducts = await productoContenedor.randomProducts();
        res.status(200).json(getFakeProducts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default productosTestRoute;