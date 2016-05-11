var mongoose			= require('mongoose');
var Schema				= mongoose.Schema;

var TeamSchema = new Schema ({
	teamName:			{type: String, required: true},
	teamNumber:			{type: Number, required: true},
	opr:				{typr: Float},
	dpr:				{type: Float},
	oprUpdateTime:		{type: Data},
	dprUpdateTime:		{type: Date}
	
});

TeamSchema.pre('save', function(next){
	now = new Data();
	this.dprUpdateTime = now;
	
});