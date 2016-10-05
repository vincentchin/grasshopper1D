class Grasshopper {
	constructor(id) {
		
		this.container = document.querySelector(id)
		this.spaces = this.container.querySelectorAll('.space')
		this.field = ["p", "p", "p", "p", " ", "g", "g", "g", "g"]
		this.ending = ["g", "g", "g", "g", " ", "p", "p", "p", "p"]

		for (var i=0; i < this.spaces.length; i++) {
			(function($this, index){
				$this.spaces[index].addEventListener('click', function(){
					$this.hop(index)
				})
			}(this, i));
		}
	}

	resetGame() {
		this.field = ["p", "p", "p", "p", " ", "g", "g", "g", "g"]
		this.updateField()
	}

	updateField() {
		for (var e=0; e<this.field.length; e++) {
			if (this.field[e] === "p") {
				this.spaces[e].className = "space pink-grasshopper"
			} else if (this.field[e] === "g") {
				this.spaces[e].className = "space green-grasshopper"
			} else {
				this.spaces[e].className = "space"
			}
		}
		this.checkWin()
	}

	checkWin() {
		var finished = this.ending.join(""),
			current = this.field.join("");
		if (finished === current) {
			alert("You win!");
			this.resetGame()
			return
		}	
	}

	swap(a, b) {
		var jumper = this.field[a]
		this.field[a] = this.field[b]
		this.field[b] = jumper
		this.updateField()
	}


	hop(i) {

		if (this.field[i - 2] === " " && this.field[i - 1] !== " ") {
			this.swap(i, i - 2)
			return
		} else if (this.field[i - 1] === " ") {
			this.swap(i, i - 1)
			return
		}

		if (this.field[i + 2] === " " && this.field[i + 1] !== " ") {
			this.swap(i, i + 2)
			return
		} else if (this.field[i + 1] === " ") {
			this.swap(i, i + 1)
			return
		}

	}
}