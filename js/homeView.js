var HomeView = function() {
	
	this.initializate = function() {
		this.element = $('<div class="content"/>');
		this.element.on('click', '.getCapture', this.changePicture);
	};

	this.render = function() {
       this.element.html(HomeView.template());
       return this;
    };

    this.changePicture = function(event) {
	    event.preventDefault();
	    if (!navigator.camera) {
	        app.showAlert("La camara no funciona", "Error");
	        return;
	    }
	    var options =   {   quality: 50,
	                        destinationType: Camera.DestinationType.DATA_URL,
	                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
	                        encodingType: 0, // 0=JPG 1=PNG
	                        cameraDirection: 1 
	                    };
	 
	    navigator.camera.getPicture(
	        function(imageData) {
	            $('#smallImage').attr('src',"data:image/jpeg;base64," + imageData);
	            $('#smallImage').show();
	        },
	        function() {
	            app.showAlert('Error haciendo foto', 'Error');
	        },
	        
	        options);
	 
	    return false;
	};

	this.initializate();
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
