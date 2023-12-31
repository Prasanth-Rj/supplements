import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router();
productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//test
productRouter.get('/slug/:slug', async (req, res) => {
  //console.(req.params.slug);
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
productRouter.get('/:id', async (req, res) => {
  //console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  //console.log(product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
export default productRouter;
