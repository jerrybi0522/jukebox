var Jukebox = function(){

	this.songs = ["https://ia801004.us.archive.org/33/items/vocaloid-music-collection-2011/1527%20-%20FREELY%20TOMORROW%20-%20sm15172108.mp3", "https://ia601005.us.archive.org/30/items/vocaloid-music-collection-2010/0891%20-%20World's%20End%20Dancehall%20-%20sm10759623.mp3", "https://ia601900.us.archive.org/22/items/vocaloid-music-collection-2012/1767%20-%2039%20-%20so18274463.mp3", "https://ia601004.us.archive.org/33/items/vocaloid-music-collection-2011/1321%20-%20Kusare%20Gaidou%20to%20Chocolate%20-%20sm13275244.mp3"]

	this.titles = ["Freely Tomorrow", "World's End Dancehall", "39", "Rotten Heresy and Chocolate"]

	this.composers = ["Mitchie-M", "wowaka", "sasakure.UK & DECO*27", "Pinocchio-P"]

	var song = document.getElementById("song1");

	var title = document.getElementById("name1");

	var composer = document.getElementById("composer1")

	var input_title = document.getElementById("title_input");

	var input_composer = document.getElementById("composer_input");

	var input_song = document.getElementById("song_input");

	var i = 0

	this.insert = function(){
		if (input_title.value != "" && input_composer.value != "" && input_song.value != "") {
			this.titles.push(input_title.value);
			this.composers.push(input_composer.value);
			this.songs.push(input_song.value);

			var new_li = document.createElement("LI");
			var text = document.createTextNode(input_title.value);
			new_li.appendChild(text);
			document.getElementById("playlist").appendChild(new_li);

			input_title.value = "";
			input_composer.value = "";
			input_song.value = "";
		}
	}

	this.play = function(){
		song.play();
	}

	this.pause = function(){
		song.pause();
	}

	this.random = function(){
		i = Math.floor(Math.random() * this.songs.length);
		song.setAttribute("src", this.songs[i]);
		this.play();
		title.innerHTML = this.titles[i];
		composer.innerHTML = this.composers[i];
	}

	this.next = function(){
		if (i < this.songs.length - 1){
			i += 1;
		} else {
			i = 0;
		}
		song.setAttribute("src", this.songs[i]);
		this.play();
		title.innerHTML = this.titles[i];
		composer.innerHTML = this.composers[i];
	}

	this.previous = function(){
		if (i > 0) {
			i -= 1;
		} else {
			i = this.songs.length - 1;
		}
		song.setAttribute("src", this.songs[i]);
		this.play();
		title.innerHTML = this.titles[i];
		composer.innerHTML = this.composers[i];
	}
}

$(document).ready(function(){
	$(vocaloid.titles).each(function(i){
		$("#playlist").append("<li>"+vocaloid.titles[i]+"</li>");
	});
});

var vocaloid = new Jukebox();

