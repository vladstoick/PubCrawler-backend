// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RouteSchema = new Schema({
  title: String
});

RouteSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Route', RouteSchema);

