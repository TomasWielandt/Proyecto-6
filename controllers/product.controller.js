const Product = require('../models/product');
const bcryptjs = require('bcryptjs');

const readAll = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'error obteniendo los productos', error });
    }
};

const readOne = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    res.json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error obteniendo el producto' });
  }
};

const create = async (req, res) => {
    try {
      const { name, description, urlImage, price, stock } = req.body;
  
      const nuevoProducto = await Product.create({ name, description, price, stock });
      res.json(nuevoProducto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error creando un producto' });
    }
  };

  const update = async (req, res) => {
    try {
      const { name, description, urlImage, price, stock } = req.body;
  
      const productoActualizado = await Product.findByIdAndUpdate(req.params.id, { name, description, price, stock }, { new:true });
      res.json(productoActualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error actualizando un producto' });
    }
  };

  const remove = async (req, res) => {
    try {
      const productoBorrado = await Product.findByIdAndDelete(req.params.id);
      res.json(productoBorrado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error borrando un producto' });
    }
  };

module.exports = { readAll, readOne, create, update, remove };