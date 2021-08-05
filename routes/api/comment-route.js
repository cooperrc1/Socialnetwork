const router = require('express').Router();
const {createComment,updateComment,deleteComment,pullCommentID,pullComments,addReaction,deleteReaction} = require("../../controllers/commentController");
router.route('/').get(pullComments).post(createComment);
//find 1 comment and update or delete it.
router.route('/:id').get(pullCommentID).put(updateComment).delete(deleteComment);
//add / remove reactions.
router.route('/:commentId/reactions').post(addReaction).delete(deleteReaction);