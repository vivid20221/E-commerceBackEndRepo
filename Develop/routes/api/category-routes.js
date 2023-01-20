const router = require('express').Router();
const { json } = require('../../config/connection');
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
  const categoryData = await Category.findAll();
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}

  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await category.findByPk(req.params.id, {
      include: [{ model: Product, through: Tag, as: 'category_products'}]

    });
    // if we cannot find a category with the id we passed, then we will display a message saying not found
    if (!categoryData); {
      res.status(404).json({ message: 'No category found with this id!'});
      //return;
    }
    
    res.status(200).json(categoryData);
  }catch (err) {
    res.status(500).json(err);
  }
  });


  // find one category by its `id` value
  // be sure to include its associated Products


router.post('/',  async (req, res) => {
  // create a new category
  try {
    const categoryData = await  category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  category.update(req.body, {
    where: {
      id: req.params.id,
    },

})


});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` valuetry {
    try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
      if(!categoryData) {
        res.status(404).json({message: 'no category data found with that id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
