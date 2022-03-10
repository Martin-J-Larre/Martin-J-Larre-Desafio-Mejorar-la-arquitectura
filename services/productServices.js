const ProductsDao = require("../dao/productsDao");
const { loggerInfo } = require("../logs/logs");

class ProductsApi {
    constructor() {
        this.productsDao = new ProductsDao();
    }
    async addProduct(title, price, stock) {
        const product = {
            ...title,
            ...price,
            ...stock,
        };
        let newProduct = await this.productsDao.add(product);
        return newProduct;
    }
    async getAllProducts() {
        let allProducts = await this.productsDao.getAll();
        return allProducts;
    }
    async getProductById(id) {
        let products;
        if (id) {
            products = await this.productsDao.getById(id);
        } else {
            products = await this.productsDao.getAll();
        }
        return products;
    }
    async deleteProductsById(id) {
        if (id) {
            await this.productsDao.deleteById(id);
        }
        return loggerInfo.info("Product deleted");
    }
    async uptadeProductById(id, newProduct) {
        let productUpdate = await this.productsDao.updateById(id, newProduct);
        return productUpdate;
    }

    exit() {
        this.productsDao.exit();
    }
}

module.exports = ProductsApi;
