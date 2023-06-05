const express = require('express');
const router = express.Router();
const Comment = require('../models/messages');

router.post('/', (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    });
    comment.save().then(response => {
        res.send(response);
    });
});

router.get('/', (req, res) => {
    Comment.find().then(function(comments) {
        res.send(comments);
    });
});

module.exports = router;