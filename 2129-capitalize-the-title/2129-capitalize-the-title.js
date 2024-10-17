/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = title.split(' ');

    let capitalizedWords = words.map((word) => {
        if (word.length > 2) { 
            return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    });   
    
    return capitalizedWords.join(" ");  
};
