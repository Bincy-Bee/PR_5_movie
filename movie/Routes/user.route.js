const {Router} = require('express');
const {home, signup, userDelete, login, movieCreate, movieUpdate, movieDelete, ratingUpdate, commentUpdate, movieFilter } = require('../controllers/user.controllers');
const {checkFiledmovie, checksignup, checklogin } = require('../middlewares/user.middleware');
const router = Router();

router.get("/", home);
router.post("/user/signup",checksignup, signup);
router.post("/user/login",checklogin, login);
router.delete("/user/delete/:id", userDelete);



router.post("/movie/create", movieCreate);
router.patch("/movie/update/:id", movieUpdate);
router.delete("/movie/delete/:id", movieDelete);
router.patch("/movie/rating/:id", ratingUpdate);
router.patch("/movie/comment/:id", commentUpdate);
router.get("/movie/filter", movieFilter)


module.exports={router}