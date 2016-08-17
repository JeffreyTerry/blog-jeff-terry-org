var _ = require('underscore'),
    request = require('request');

module.exports = function(app, config){
    var Poet = require('poet');
    var poet = Poet(app, {
      posts: __dirname + '/../public/posts/',
      postsPerPage: 10,
      metaFormat: 'json'
    });

    poet.addRoute('/post/:post', function (req, res, next) {
      var post = poet.helpers.getPost(req.params.post);
      if (post) {
        // Do some fancy logging here
        res.render('post', {posts: poet.helpers.getPosts(), most_recent_posts: poet.helpers.getPosts(0, 4), post: post});
      } else {
        res.render('404');
      }
    }).init();

    app.get( '/', function ( req, res ) {
        res.render('home/home', {posts: poet.helpers.getPosts(), most_recent_posts: poet.helpers.getPosts(0, 4)});
    });
};


