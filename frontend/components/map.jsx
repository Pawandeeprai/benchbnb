var React = require('react');
var BenchStore = require('../stores/bench');

var ApiUtil = require('../util/apiutil');


var Map = React.createClass({


  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.map.addListener('idle', this._onIdle);
    this.listener = BenchStore.addListener(this._onchange);
  },

  _onIdle: function(){
    var bounds = this.map.getBounds();
    ApiUtil.fetchBenches(bounds);
  },


  _onchange: function(){
    BenchStore.all().forEach(
      function(bench){
        new google.maps.Marker({
          position: {lat: bench.lat , lng: bench.long},
          map: this.map,
          title: "bench"
        });
      }.bind(this)
    );
  },

  render: function(){
    return (
      <div ref="map" className="map">I am a google map?</div>
    );
  },


});


module.exports = Map;
