var React = require('react');
var BenchStore = require('../stores/bench');
var Map = require('./map');


var Index = React.createClass({

  getInitialState: function(){
    return { benches: BenchStore.all()};
  },

  _onChange: function(){
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function(){
    this.benchListener = BenchStore.addListener(this._onchange);
  },

  componentWillUnmount: function(){
    this.benchListener.remove();
  },

  render: function(){
    return(
      <div>

      </div>
    );
  }
});

module.exports = Index;
