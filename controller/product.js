const mongoose = require('mongoose');

const model = require('../model/productModel')
const Product = model.Product;

// CREATE
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save()
    res.status(201).json(req.body);
};

// READ
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById({_id: id});
  res.json(product);
};

// UPDATE
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndReplace({_id: id}, req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndUpdate({_id: id}, req.body);
  res.status(201).json(product);
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndDelete({_id: id});
  res.status(201).json(product);
};
