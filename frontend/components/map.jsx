var React = require('react');
var BenchStore = require('../stores/bench');


var Map = React.createClass({

  componentDidMount: function(){
  var mapDOMNode = this.refs.map;
  var mapOptions = {
    center: {lat: 37.7758, lng: -122.435},
    zoom: 13
  };
  this.map = new google.maps.Map(mapDOMNode, mapOptions);
},

  render: function(){
    return (
      <div ref="map" className="map">I am a google map?</div>
    );
  }


});

module.exports = Map;
