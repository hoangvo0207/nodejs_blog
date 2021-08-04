const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
    // Page home [GET] /
    home(req, res, next) {
        Course.find({})
            //.then(courses => res.json(courses))  /** Render json */
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            }) /** Render home page in this code */
            .catch(next)
    };

    // Page search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
