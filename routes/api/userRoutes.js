const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// Get All Users
router.route('/').get(getUsers).post(createUser);

// Get Single User, Update User, and Delte User
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


module.exports = router;
