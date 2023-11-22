const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCat = await Category.findAll({ include: [{ model: Product }] });
    res.json(allCat);
  } catch (err) {
    res.json({ message: "Not in Category" });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categ = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    res.json(categ);
  } catch (err) {
    res.json({ message: "Not in Category" });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.json(newCat);
  } catch (err) {
    res.json({ message: "Error creating category" });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCat = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedCat);
  } catch (err) {
    res.json({ message: "Error updating category" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCat = await Category.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json(deletedCat);
  } catch (err) {
    res.json({ message: "Error deleting category" });
  }
});

module.exports = router;
