//? CRUD PRODUCTOS

import { Router } from 'express';
import productoControlador from '../controladores/productoControlador.js';
const productoContenedor = new productoControlador();
const productoRoute = Router();

productoRoute.get("/", async (req, res) => {
    try {
        const getProductos = await productoContenedor.getAll();
        getProductos
            ? res.status(200).json(getProductos)
            : res.status(404).json({ message: "No hay productos disponibles" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

productoRoute.post("/", async (req, res) => {
        try {
            const nuevoProducto = await productoContenedor.insert(req.body);
            res.status(201).json({
                message: "Producto creado con éxito",
                producto: nuevoProducto,
            });
        } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

productoRoute.get("/:id", async (req, res) => {
    try {
        const getProductoById = await productoContenedor.getById(req.params.id);
        if(getProductoById.length > 0) {
            res.status(200).json(getProductoById);
        } else {
            res.status(404).json({ message: "Producto no encontrado: id "  + req.params.id });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

productoRoute.put("/:id", async (req, res) => {
    try {
        const modificarProducto = await productoContenedor.put(
            req.body,
            req.params.id
        );

        res.status(200).json({
            message: "Producto actualizado con éxito",
            producto: modificarProducto,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

productoRoute.delete("/:id", async (req, res) => {
        try {
            const borrarProducto = await productoContenedor.deleteById(req.params.id);
            borrarProducto
                ? res.status(200).json({ message: "Producto borrado con éxito", id: req.params.id })
                : res.status(404).json({ message: "Producto no encontrado: id "  + req.params.id });
        
        } catch (err) {
            return err.message;
        }
});

export default productoRoute;