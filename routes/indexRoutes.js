import { Router } from 'express';
import carritoRoute from './carritoRoute.js';
import productoRoute from './productoRoute.js';
import productosTestRoute from './productosTestRoute.js';

const apiRoutes = Router();

apiRoutes.use("/carrito", carritoRoute);
apiRoutes.use("/producto", productoRoute);
apiRoutes.use("/productos-test", productosTestRoute);

export default apiRoutes;