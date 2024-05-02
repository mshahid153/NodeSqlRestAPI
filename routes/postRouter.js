// import post controllers 
const postController = require('../controllers/postController.js')

// create router instance
const router = require('express').Router()

// defining routes

// Route for adding a new post
router.post('/addPost', postController.upload, postController.addPost)

// Route for getting all posts
router.get('/allPosts', postController.getAllPosts)

// Route for getting a single post by ID
router.get('/:id', postController.getOnePost)

// Route for updating a post by ID
router.put('/:id', postController.updatePost)

// Route for deleting a post by ID
router.delete('/:id', postController.deletePost)


module.exports = router