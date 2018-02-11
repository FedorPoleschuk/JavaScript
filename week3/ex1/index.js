/**
 * @param {String} date
 * @returns {Object}
 */

var correctType=['years','months','days','hours','minutes'];


Number.prototype.padLeft = function(base,chr){
   var  len = (String(base || 10).length - String(this).length)+1;
   return len > 0? new Array(len).join(chr || '0')+this : this;
}
    

function typeErr(value, type){
	if (value < 0){
		throw new TypeError
	}
	if (correctType.indexOf(type) === -1){
		throw new TypeError
	}
}

function dateExport(date){
        dateEx = [ 	date.getFullYear(),
        			(date.getMonth()+1).padLeft(),
                    date.getDate().padLeft()
                    ].join('-')+
                    ' ' +
                  [ date.getHours().padLeft(),
                    date.getMinutes().padLeft()].join(':');
        return dateEx;
}

function changeDate(date, value, type){

	if (correctType.indexOf(type) == 0){
		value = date.getFullYear() + value;
		date = date.setFullYear(value);
	}
	if (correctType.indexOf(type) == 1){
		value = date.getMonth() + value;
		date = date.setMonth(value);
		
	}  
	if (correctType.indexOf(type) == 2){
		value = date.getDate() + value;
		date = date.setDate(value);		
	} 
	if (correctType.indexOf(type) == 3){
		value = date.getHours() + value;
		date = date.setHours(value);		
	}
	if (correctType.indexOf(type) == 4){
		value = date.getMinutes() + value;
		date = date.setMinutes(value);		
	} 

};





module.exports = function (date) {

	_date = new Date(date);


return {
	get value() {
            return dateExport(_date);
        },
	
	add: function(value,type){
			typeErr(value,type);
			changeDate(_date,value,type);
			return this;
		},
	subtract: function(value,type){
			typeErr(value,type);
			changeDate(_date,-value,type);
			return this;
		}
}


};
