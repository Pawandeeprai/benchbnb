var React = require('react');
var ReactDOM = require('react-dom');

var ApiUtil = require('./util/apiutil');
var BenchStore = require('./stores/bench');
var ApiActions = require('./actions/api_actions');

var Index = require('./components/index');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Index />,
    document.getElementById('content')
  );
});

window.BenchStore = BenchStore;
