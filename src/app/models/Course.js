const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoId: { type: String },
    createdAt: { type: Date, default: Date.now },
    slug: { type: String, slug: "name" } // Base on mongoose-slug-generator
}, {
    timestamps: true
});
// timestamps lấy updatedAt, createdAt

module.exports = mongoose.model('Course', Course);
