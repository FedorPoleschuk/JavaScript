/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    // Заводим переменную под нормализированые хэштеги
    
     lowerHashtags=[];
    //переменная под итоговую строку
     string='';
//все элементы строчные
    for ( i = 0; i < hashtags.length; i++) {
        lowerHashtag = hashtags[i].toLowerCase();
        lowerHashtags.push(lowerHashtag)
        }
   
 	 uniqueArray = lowerHashtags.filter(function(item, pos, self){return self.indexOf(item) == pos;})
	
	 string = uniqueArray.join(', ')
	 // console.log(string)
 	return(string);
 

};
