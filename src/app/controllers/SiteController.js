class SiteController {
    // Page home [GET] /
    home(req, res) {
        res.render('home');
    }

    // Page search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
