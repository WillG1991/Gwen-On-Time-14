const { Post } = require('../models/index');


const Postdata = [
    {
        title: 'Post Title 1',
        post_content: 'Blah Blah Blah',
        creators_id: 1

    },
    {
        title: 'Post Title 2',
        post_content: 'Fucken aquaman',
        creators_id: 2
    },
    {
        title: 'Post Title 3',
        post_content: 'Plz Work for me',
        creators_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;