module.exports = function(grunt) {
	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
          hostname: 'localhost',
          port: 3000,
          livereload: true
        }
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {                         
					'assets/css/main.css': 'assets/scss/main.scss',       
				}
			}
		},
		uglify: {
		options: {
			banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
		},
			build: {
				src: 'bundle.js',
				dest: 'bundle.min.js'
			}
		},
		browserify: {
			build: {
				src: 'index.js',
				dest: 'bundle.js'
			}
		},
		watch: {
			scripts: {
				files: ['*.html', 'assets/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
  
  	grunt.loadNpmTasks('grunt-browserify');
	
	grunt.registerTask('default', ['sass','browserify', 'uglify', 'connect', 'watch']);
};