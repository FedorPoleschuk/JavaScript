/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
	arr = arguments[0];
	func = Array.from(arguments)
	func.shift();
	func.sort();
	//console.log(func); 
    for (var query = 0; query != func.length; query++ ) {

    	 arr = func[query](arr)
    }
    
    return arr;
}

/**
 * @params {String[]}
 */
function select() {
	fuilds = Array.from(arguments);
	return function (arr){     
    	return arr.map(
    		function(x){
        		var res = {};
          		fuilds.forEach(
          			function(p,i){
          				if (x.hasOwnProperty(p) == true){

			            res[p] = x[p];
          				}
          				
          			}
          		)
        		return res;
        	});
    
}}
/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	
    return function (arr) {
        return arr.filter(function(x){
			if (values.indexOf(x[property]) != -1){
        		return(x);
        	}
    })
}
}



module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
