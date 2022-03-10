
const minimist = require("minimist");
let { loggerInfo, loggerError} = require('../logs/logs');
const ProductsApi = require("../services/productServices");
let productApi = new ProductsApi();
const argv = minimist(process.argv.slice(2));
const { command, id, title, price, stock } = argv;

class ProductosDaoFactory {
    async handlerCommand() {
        try {
            switch (command.toLowerCase()) {
                case "get": //
                    loggerInfo.info(await productApi.getProductById(id));
                    break;
                case "add": //
                    loggerInfo.info(await productApi.addProduct({ title, price, stock }));
                    break;
                case "update": //
                    loggerInfo.info(
                        await productApi.uptadeProductById(id, {
                            title,
                            price,
                            stock,
                        })
                    );
                    break;
                case "getall": //
                    loggerInfo.info(await productApi.getAllProducts());
                    break;
                case "delete": //
                    await productApi.deleteProductsById(id);
                    break;
                default:
                    loggerInfo.info("Command not valid", command);
            }
        } catch (err) {
            loggerError.error(err);
        }
    }
}

module.exports = ProductosDaoFactory;
