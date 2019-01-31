// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var bullets = require('./bespoke-bullets-patched');

var sfeirevents = require('bespoke-theme-sfeirevents');
var classes = require('bespoke-classes');
var scale = require('bespoke-scale');
var nav = require('bespoke-nav');
var overview = require('bespoke-overview');

var hash = require('bespoke-hash');
var multimedia = require('bespoke-multimedia');
var cursor = require('bespoke-cursor');
var extern = require('bespoke-extern');
var progress = require('bespoke-progress');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  sfeirevents(),
  classes(),
  scale('transform'),
  nav(),
  overview(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  multimedia(),
  cursor(3000),
  extern(bespoke),
  progress(),
]);
