exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        console.log('go to login')
        req.session.save(() => res.redirect('/login'))
        return 
    }

    next()
}