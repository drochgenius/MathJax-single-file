require('browser-sync')({
    server: ['test/', '.'],
    files: ['dist/**/*.js', 'test/**/*.html']
});