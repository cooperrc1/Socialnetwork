const router = require('express').Router();
const{createProfile,getAllProfiles,getProfileID,addFriend,removeFriend,updateProfile,deleteProfile}=require('../../controllers/userController');
router.route('/').get(getAllProfiles).post(createProfile);
router.route('/:id').get(getProfileID).put(updateProfile).delete(deleteProfile);
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);
module.exports = router;