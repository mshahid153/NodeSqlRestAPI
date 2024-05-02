const db = require('../models')
const cloudinary = require("../config/cloudinary");

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Post = db.posts

const { Op } = require('sequelize');

//main work

// create post

const addPost = async (req, res) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

    let info = {
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        image: cloudinaryUpload.secure_url
    }

    const post = await Post.create(info)
    res.status(200).send(post)

}

// get all post

const getAllPosts = async (req, res) => {

    const { keyword, sortBy, sortOrder, page, pageSize ,tag} = req.query;
        
    let options = {
        order: [[sortBy || 'createdAt', sortOrder || 'DESC']],
        where: {},
        limit: parseInt(pageSize, 10) || 10, // Parse pageSize as an integer
        offset: (parseInt(page, 10) - 1) * (parseInt(pageSize, 10) || 10) || 0 // Parse page as an integer
    };

    if (keyword) {
        options.where[Op.or] = [
            { title: { [Op.like]: `%${keyword}%` } },
            { description: { [Op.like]: `%${keyword}%` } }
        ];
    }
    if (tag) {
        options.where = { tag: tag };
    }


    let post = await Post.findAll(options)
    res.status(200).send(post)

}

// get single post

const getOnePost = async (req, res) => {

    let id = req.params.id
    let post = await Post.findOne({ where: { id: id }})
    res.status(200).send(post)

}

// update post

const updatePost = async (req, res) => {

    let id = req.params.id
    const post = await Post.update(req.body, { where: { id: id }})
    res.status(200).send('post is updated !')
   
}

// delete post by id

const deletePost = async (req, res) => {

    let id = req.params.id
    
    await Post.destroy({ where: { id: id }} )

    res.status(200).send('Post is deleted !')

}

// Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('image')



module.exports = {
    addPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost,
    upload
}