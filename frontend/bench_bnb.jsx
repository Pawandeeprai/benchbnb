var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ApiUtil = require('./util/apiutil');
var BenchStore = require('./stores/bench');
var ApiActions = require('./actions/api_actions');

var Index = require('./components/index');
var Search = require('./components/search');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Route>{routes}</Route>,
    document.getElementById('content')
  );
});

window.BenchStore = BenchStore;
