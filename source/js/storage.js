/* Class that uses local storage as database*/
function Storage() {

};

/* Save object in local storage as string */
Storage.prototype.saveItem = function(object) {
    localStorage.setItem(new Date().getTime(), JSON.stringify(object));    
};

/* Get unordered list of all items */
Storage.prototype.getItems = function() {
    var items = [];
    for(var index in localStorage) {
        items.push(JSON.parse(localStorage.getItem(index)));
    }
    return items;
};