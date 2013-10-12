/* Note viewing and editing view */
function NoteView(database) {
    this.database = database;
}

NoteView.prototype.addEventListeners = function() {
    /* _this_ points to current NoteView object */
    var _this_ = this;

    /* Create all required handlers */
    $(document).on("pageinit", "#add-private-note", function() {
        var okButton = "#private-note-form .ui-block-a button";
        var cancelButton = "#private-note-form .ui-block-b button";

        /* Remove previous handlers */
        $(document).off("click", okButton);
        /* Set new handler */
        $(document).on("click", okButton, function(e) {
            /* Prevent default behaviour */
            e.preventDefault();  

            /* Save note in database and return to main page */         
            var note = {};
            note.title = $("#private-note-title").val();   
            note.message = $("#private-note-message").val();
            
            if(note.title != "" && note.message != "") {                
                _this_.database.saveItem(note);
            } 

            $.mobile.changePage($("#start-page"));
        }); 

        $(document).off("click", cancelButton);
        $(document).on("click", cancelButton, function(e) {
            e.preventDefault();
            $.mobile.changePage($("#start-page")); 
        }); 
    });
};