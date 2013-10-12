/* Main page view */
function MainView(database) {
    this.database = database;
};

/* Show list view with notes on main page */
MainView.prototype.showListView = function(listID) {
    if(listID === undefined) {
        listID = "#main-list";
    }
        
    var items = this.database.getItems();
    var listView = $(listID);
    /* Clear ListView */
    listView.empty();

    /* Create formatted list items */
    $.each(items, function(index, value) {
        var listItem = $("<li></li>");
        listItem.append($("<h1></h1>").text(value.title));
        listItem.append($("<p></p>").text(value.message));
        listView.append(listItem);
    });

    listView.listview("refresh");
};

MainView.prototype.addEventListeners = function() {
    var _this_ = this;
    $(document).on("pageshow", "#start-page", function(e) {
        e.preventDefault();
        _this_.showListView();
    });
};