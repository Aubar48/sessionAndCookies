
module.exports = {
    more: (req,res) => {
        res.render('more',{
            title: "more",
            session: req.session
        })
    },
    logout: (req,res) => {
        req.session.destroy()
        res.cookie('RecordarColor', null,{
            maxAge: -1
        })
        res.redirect('/')
    }
}