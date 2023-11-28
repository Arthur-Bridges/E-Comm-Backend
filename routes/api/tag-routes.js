const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../Develop/models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({ include: [{ model: Product }] });
    res.json(allTags);
  } catch (err) {
    res.json({ message: "Error finding tags" });
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagI = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    res.json(tagI);
  } catch (err) {
    res.json({ message: "Error finding a tag" });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
  } catch (err) {
    res.json({ message: "Error creating Tag" });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedTag);
  } catch (err) {
    res.json({ message: "Error updating Tag" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json(deletedTag);
  } catch (err) {
    res.json({ message: "Error deleting category" });
  }
});

module.exports = router;
