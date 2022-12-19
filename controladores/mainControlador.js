import { optionsMysql } from '../config/mariaDB.js';
import knex from 'knex';
import { faker } from '@faker-js/faker';
faker.locale = 'en';
const database = knex(optionsMysql);

class mainControlador {
    constructor (tabla) {
        this.tabla = tabla;
    }

    async getAll() {
        try {
            const getDB = await database(this.tabla).select('*');
            return getDB;
        }
        catch (err) {
            console.log(`getAll METHOD ERR! ${err}`);;
        }
    }

    async getById(id) {
        try {
            const getById = await database(this.tabla).select('*').where('id', id);
            return getById;
        }
        catch (err) {
            console.log(`getById METHOD ERR! ${err}`);
        }
    }

    async deleteById(id) {
        try {
            if (id !== null) {
                await database(this.tabla).where('id', id).del();
            } else {
                console.log(`Product with id ${id} does not exist.`);
            }
        }
        catch (err) {
            console.log(`deleteById METHOD ERR! ${err}`);
        }
    }

    async insert(body) {
        try {
            const newProduct = await database(this.tabla).insert(body);
            const getNewProductById = await database(this.tabla).select('*').where('id', newProduct);
            return getNewProductById;
        }
        catch (err) {
            console.log(`insert METHOD ERR! ${err}`);
        }
    }

    async put(body, id) {
        try {
            const { codigo, descripcion, foto, nombre, precio, stock } = body;
            const timeStamp = new Date();
            await database(this.tabla).where('id', id).update({
                codigo,
                descripcion,
                foto,
                nombre,
                precio,
                timeStamp,
                stock,
            });
            const updatedProduct = await database(this.tabla).select('*').where('id', id);
            return updatedProduct;
        }
        catch (err) {
            console.log(`put METHOD ERR! ${err}`);
        }
    }

    async randomProducts() {
        try {
            const randomProducts = [];
            let id = 1;

            for (let i = 1 ; i <= 5 ; i++) {
                const productFormat = {
                    id: id,
                    name: faker.commerce.product(),
                    description: faker.commerce.productAdjective(),
                    price: faker.commerce.price(50,1000,2,'$')
                };
                id++;
                randomProducts.push(productFormat);
            }
            console.table(randomProducts);
            console.log(`Fake products array length: ${randomProducts.length}`)
            return randomProducts;
        }
        catch (err) {
            console.log(`randomProducts METHOD ERR! ${err}`);
        }
    }
};

export default mainControlador;