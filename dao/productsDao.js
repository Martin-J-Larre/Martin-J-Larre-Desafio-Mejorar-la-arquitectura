const CustomErr = require("../utils/error");
const Product = require("../models/Product");
class ProductsDao {
    async getAll() {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw new CustomErr(500, `getAll() error ----> ${error}`);
        }
    }
    async getById(id) {
        try {
            const product = await Product.findById(id);
            return product;
        } catch (error) {
            throw new CustomErr(500, `getById() error ----> ${error}`);
        }
    }
    async add(product) {
        try {
            const dataProduct = await Product.create({
                title: String(product.title),
                price: Number(product.price),
                stock: Number(product.stock),
            });
            return dataProduct;
        } catch (error) {
            throw new CustomErr(500, `add() error ----> ${error}`);
        }
    }
    async deleteById(id) {
        try {
            const product = await Product.findById(id);
            await product.deleteOne();
        } catch (error) {
            throw new CustomErr(500, `deleteById() error ----> ${error}`);
        }
    }

    async updateById(id, newProduct) {
        try {
            let product = await Product.findById(id);
            product = await Product.findByIdAndUpdate(id, newProduct, {
                new: true,
                runValidators: true,
            });
        } catch (error) {
            throw new CustomErr(500, `updateById() error ----> ${error}`);
        }
    }
}
module.exports = ProductsDao;
