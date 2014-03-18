var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    renderHomeView: function() {
       $('body').html(this.homeTpl());
    },

    // initialize: function() {
    //     this.store = new MemoryStore();
    //     $('.search-key').on('keyup', $.proxy(this.findByName, this));
    // }
    initialize: function() {
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.renderHomeView();
    }
};

app.initialize();