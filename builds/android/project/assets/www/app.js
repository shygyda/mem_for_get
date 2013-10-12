/* Application initialization class */
function Application() {
    /* Module objects used in application */
    this.modules = {};
};

/* Load required modules */
Application.prototype.loadModules = function(callback) {
    var _this_ = this;
    /* Wait for scripts to load */
    $.when(
        $.getScript("js/main-view.js"),
        $.getScript("js/note-view.js"),
        $.getScript("js/storage.js")
    ).done(function() {
        _this_.modules.Database = new Storage();
        _this_.modules.MainView = new MainView(_this_.modules.Database);
        _this_.modules.NoteView = new NoteView(_this_.modules.Database);
        return callback();
    });
}

/* Init */
App = new Application();
$(document).on("pageinit", function() {
    App.loadModules(function() {
        /*Module objects initialization */
        App.modules.MainView.showListView();

        for(var index in App.modules) {            
            if("addEventListeners" in App.modules[index]) {
                App.modules[index].addEventListeners();
            }
        }
    });
});
