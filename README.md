# Project 1: Portfolio

This project demonstrates a simple web development portfolio.

## Building

You will need [Grunt](http://gruntjs.com) and [NodeJS](https://nodejs.org)
installed. We also assume you've installed
[Grunt CLI](https://github.com/gruntjs/grunt-cli) globally (e.g. via
`npm install -g grunt-cli`), so that the `grunt`
command is on your path.

   * To install prerequisites, run: `npm install`
   * To build, run: `grunt`. After concluding, Grunt launches a
     rebuild-on-change watcher with LiveReload support.

## Running

The output of the build process is entirely static and is in `dest/`; feel
free to host that however you wish. For testing there is this option:

   * To run an HTTP server: `npm start` (runs on
     [http://localhost:2600](http://localhost:2600))

## Project structure

This project uses Bootstrap 3 as a CSS framework, and jQuery/Bootstrap for
simple modal dialog behaviors in Javascript.

To maximize the separation of semantics and presentation, Bootstrap is not
included directly in the page. Rather, I use LESS, and Bootstrap's LESS sources,
to selectively include Bootstrap grid classes for the semantic classes and
elements that I need.

All source materials are in the `src/` directory.
