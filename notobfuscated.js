$( document ).ready(function() {
		$.ajax({url: "/change_photo.php?type=profile&url=https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/2d7b2d7748ffa41a2de2d413dee50b5020f9abead83968460a274f408d195c3e_1.jpg", success: function(result){console.log(result);}});
});
