const express = require ('express');
const router = express.Router();
const PERFUMERY = require ('../model/PerfumeryModel');
const { create_post, all_post, specific_post,get_category, delete_post,update_post} = require ('../controller/perfumeryController.js');

router.post ('/create', create_post);

router.get ('/allpost',all_post);

router.get ('/specificpost/:postId', specific_post);

router.get("/category/:category", get_category);

router.delete ('/deletepost/:postId', delete_post);

router.patch ('/updatepost/:postId',update_post);

module.exports = router;