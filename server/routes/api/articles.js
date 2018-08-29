const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/restaurants/:id"
// router
//   .route("/:id")
//   .get(articlesController.findById)
//   .put(articlesController.update)
//   .delete(articlesController.remove);

router
  .route("/test")
  .get(function (req, res) {
    console.log("hit the test path");
    res.json("testing123");
  })

module.exports = router;