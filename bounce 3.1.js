			var name = "catch"
			var upSpeed = 1
			var leftSpeed = 1
			var south = true
			var angle = 0
			var angleVariable = 5;
			const VERSION = 3.1


			// To use for external websites like Twitter"
			// Activate Following Codews
			// Deactivate Auto Activation Code Below it
			// document.getElementById(name).addEventListener("click", function(event){
			//     event.preventDefault(activate())
			// });
			// function activate(){
			// 	document.getElementById(name).style.rIndex = "99999"
			// 	document.getElementById(name).style.position = "fixed"
			// 	document.getElementById(name).style.left = "0px"
			// 	document.getElementById(name).style.top = "0px"
			// 	setInterval(push, 20)
			// }

			// Auto Activation, comment out for above
			setInterval(push, 20)

			function bounceUp(){
				var up = document.getElementById(name).style.marginTop.replace("px","")
				if(up > window.innerHeight){
					south = false
				}
				if(up < 0){
					south = true
				}
				if(south == true){
					up = Number(up) + upSpeed
				} else {
					up = Number(up) - upSpeed
				}
				up = up + "px"
				rundown(up)
			}

			var east = true
			function bounceLeft(){
				var left = document.getElementById(name).style.marginLeft.replace("px","")
				if(left > window.innerWidth){
					east = false
				}
				if(left < 0){
					east = true
				}
				if(east == true){
					left = Number(left) + leftSpeed
				} else {
					left = Number(left) - leftSpeed
				}
				left = left + "px"
				runright(left)
			}

			function push(){
				document.getElementById(name).style.transform = ("rotate(" + angle + "deg)")
				angle = angle + angleVariable
				bounceUp()
				bounceLeft()
			}


			function rundown(value){
				document.getElementById(name).style.marginTop = value
			}


			
			function runright(value){
				document.getElementById(name).style.marginLeft = value
			}