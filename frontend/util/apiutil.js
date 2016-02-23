var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax ({
      url: "api/benches",
      data: {bounds: bounds.toJSON()},
      success: function(benches){
        ApiActions.receiveAll(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
