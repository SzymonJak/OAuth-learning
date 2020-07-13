const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if (req.user !== undefined) {
        res.render('logged', {
            avatar: req.user.photos[0].value,
            name: req.user.displayName
        });
    } else {
        res.redirect('no-permission');
    }
});
  
router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});

router.get('/profile/', (req, res) => {
    if (req.user !== undefined) {
        res.render('profile');
    } else {
        res.redirect('no-permission');
    }
});

router.get('/profile/settings', (req, res) => {
    if (req.user !== undefined) {
        res.render('settings');
    } else {
        res.redirect('../no-permission');
    }
});

module.exports = router;