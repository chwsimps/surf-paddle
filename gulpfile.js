var gulp = require('gulp');

gulp.task('default', function() {

  gulp.task('deploy', function() {

    gulp.src('/')
      .pipe(prompt.prompt({
          type: 'confirm',
          name: 'task',
          message: 'This will deploy to GitHub Pages. Have you already built your application and pushed your updated master branch?'
      }, function(res){
        if (res.task){
          console.log('Attempting: "git subtree push --prefix dist origin gh-pages"');
          exec('git subtree push --prefix dist origin gh-pages', function(err, stdout, stderr) {
              console.log(stdout);
              console.log(stderr);
          });
        } else { console.log('Please do this first and then run `gulp deploy` again.'); }
      }));

  });

});
