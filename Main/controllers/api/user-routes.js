// const router = require('express').Router();
// const { request } = require('express');
// const { User }  = require('../../models');

// router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create(req.body);

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;

//             res.status
//         })
//     }
// });