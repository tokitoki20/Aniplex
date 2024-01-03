let menuButton = document.getElementById("sideMenu");
let myDiv = document.createElement("div")

	menuButton.onclick = function() {
	myDiv.innerHTML = `<div class= "sideMenu1">
	<button  class='toleft'>
		<i class="fa-solid fa-chevron-right"></i>
	</button>
	<div class="logo">
	<img   src="../logos/Aniplex.png">
	</div>
	<div class="search1">
	<i class="fa-solid fa-magnifying-glass"></i>
	<input type="text" placeholder="Search" id="search" />
	</div>
	<!-- Menu Start -->
	<div class="menuContainer">
		
	<div class="menu long">
	<i class="fa-solid fa-house"></i>
	<p>Home </p>
	</div>

	<div class="menu  long drop">
	<div>
	<i class="fa-solid fa-tv"></i>
	<p>Anime </p>
	</div>
	
		<i class="fa-solid fa-chevron-right"></i>
	</div>
	<div class="menu  long drop">
	<div>
	<i class="fa-solid fa-book"></i>
	<p>Manga </p>
	</div>
	<i class="fa-solid fa-chevron-right"></i>
	</div>
	<div class="menu  long drop">
	<div>
	<i class="fa-solid fa-users"></i>
	<p>Industry </p>
	</div>
	<i class="fa-solid fa-chevron-right"></i>
	</div>
	<div class="menu  long drop">
	<div>
	<i class="fa-regular fa-circle-play"></i>
	<p>Trailers </p>
	</div>
	<i class="fa-solid fa-chevron-right"></i>
	</div>
	</div>
	<!-- Menu End -->
	
</div>`
document.body.append(myDiv)

}

let ep;
document.addEventListener("click",function(e){

	 let myAnimeTabClick = document.querySelectorAll(".menu.long.drop")
	if(e.target.classList.contains('toleft') || e.target.parentElement.classList.contains('toleft')) {
		let aa = document.querySelector(".sideMenu1")
		aa.style.setProperty("animation-name","toleft") 
		setTimeout(function(){
		myDiv.remove()
		},350)
	}
					if (e.target === document.querySelector(".pop")){
						e.target.remove()
					}
	if (e.target === myAnimeTabClick[0].children[1]) {
			myAnimeTabClick[0].after()
	} 
})


let myAnimeTab = ["Anime Search","Seasonal Anime","Top Anime"]
let myAnimeTabLinks = ["Anime/animeSearch.html","Anime/seasonalAnime.html","Anime/topAnime.html"]

let myMangaTab = ["Manga Search","Top Manga"]
let myIndutryTab = ["People","characters","Company"]
let myWatchTab = ["Trailers","Watch Episodes"]

let myAnimeTabDiv = document.createElement("div")
let myMangaTabDiv = document.createElement("div")
let myIndustryTabDiv = document.createElement("div")
let myWatchTabDiv = document.createElement("div")

let myUlAnime = document.createElement("ul")
let myUlManga = document.createElement("ul")
let myUlIndustry = document.createElement("ul")
let myUlWatch = document.createElement("ul")

	myUlAnime.classList.add("AnimeTabParent")
	myUlManga.classList.add("AnimeTabParent")
	myUlIndustry.classList.add("AnimeTabParent")
	myUlWatch.classList.add("AnimeTabParent")
myAnimeTab.forEach(function(el,i,arr){
	let myLi = document.createElement("a")
		myLi.href = myAnimeTabLinks[i]
		myLi.classList.add("AnimeTab")
	myLi.append(el)
	myUlAnime.append(myLi)
})
myMangaTab.forEach(function(el){
	let myLi = document.createElement("a")
		myLi.classList.add("AnimeTab")
	myLi.append(el)
	myUlManga.append(myLi)
})
myIndutryTab.forEach(function(el){
	let myLi = document.createElement("a")
		myLi.classList.add("AnimeTab")
	myLi.append(el)
	myUlIndustry.append(myLi)
})
myWatchTab.forEach(function(el){
	let myLi = document.createElement("a")
		myLi.classList.add("AnimeTab")
	myLi.append(el)
	myUlWatch.append(myLi)
})

document.addEventListener("click",function(e){
	let myAnimeTabClick = document.querySelectorAll(".menu.long.drop")

	if (e.target === myAnimeTabClick[0].children[1]) {
			e.target.classList.toggle("dropped")
			if (!myAnimeTabClick[0].children[1].classList.contains("dropped")) {
				myUlAnime.remove()
				e.target.style.removeProperty("transform")
			}
		}
		if (e.target.classList.contains("dropped") && e.target === myAnimeTabClick[0].children[1]){
			e.target.style.setProperty("transform","rotate(270deg)")
			myAnimeTabClick[0].after(myUlAnime)
			myAnimeTabClick[1].children[1].style.removeProperty("transform")
			myAnimeTabClick[2].children[1].style.removeProperty("transform")
			myAnimeTabClick[3].children[1].style.removeProperty("transform")
			myUlManga.remove()
			myUlIndustry.remove()
			myUlWatch.remove()

		}

	if (e.target === myAnimeTabClick[1].children[1]) {
			e.target.classList.toggle("dropped")
			if (!myAnimeTabClick[1].children[1].classList.contains("dropped")) {
				myUlManga.remove()
				e.target.style.removeProperty("transform")
			}
		}
		if (e.target.classList.contains("dropped") && e.target === myAnimeTabClick[1].children[1]){
			e.target.style.setProperty("transform","rotate(270deg)")
			myAnimeTabClick[1].after(myUlManga)
			myUlAnime.remove()
			myUlIndustry.remove()
			myUlWatch.remove()
			myAnimeTabClick[0].children[1].style.removeProperty("transform")
			myAnimeTabClick[2].children[1].style.removeProperty("transform")
			myAnimeTabClick[3].children[1].style.removeProperty("transform")

		}

	if (e.target === myAnimeTabClick[2].children[1]) {
			e.target.classList.toggle("dropped")
			if (!myAnimeTabClick[2].children[1].classList.contains("dropped")) {
				myUlIndustry.remove()
				e.target.style.removeProperty("transform")
			}
		}
		if (e.target.classList.contains("dropped") && e.target === myAnimeTabClick[2].children[1]){
			e.target.style.setProperty("transform","rotate(270deg)")
			myAnimeTabClick[2].after(myUlIndustry)
			myUlAnime.remove()
			myUlManga.remove()
			myUlWatch.remove()
			myAnimeTabClick[1].children[1].style.removeProperty("transform")
			myAnimeTabClick[0].children[1].style.removeProperty("transform")
			myAnimeTabClick[3].children[1].style.removeProperty("transform")


		}

	if (e.target === myAnimeTabClick[3].children[1]) {
			e.target.classList.toggle("dropped")
			if (!myAnimeTabClick[3].children[1].classList.contains("dropped")) {
				myUlWatch.remove()
				e.target.style.removeProperty("transform")
			}
		}
		if (e.target.classList.contains("dropped") && e.target === myAnimeTabClick[3].children[1]){
			e.target.style.setProperty("transform","rotate(270deg)")
			myAnimeTabClick[3].after(myUlWatch)
			myUlAnime.remove()
			myUlManga.remove()
			myUlIndustry.remove()
			myAnimeTabClick[1].children[1].style.removeProperty("transform")
			myAnimeTabClick[2].children[1].style.removeProperty("transform")
			myAnimeTabClick[0].children[1].style.removeProperty("transform")
		}



})

let mySeachDiv = document.createElement("div")
document.addEventListener("click", function (e) {
	if (e.target.tagName === "INPUT") {
		let mySearch = document.getElementById("search")
		mySearch.oninput = function () {
		let myQuery = mySearch.value
			mySeachDiv.innerHTML = ""

		let myUrl = `https://api.jikan.moe/v4/anime?q=${myQuery}`
			async function getData() {
				try {
					let myFetch = await fetch(myUrl)
					let myData = await myFetch.json()
						myData.data.length = 5
					let myFive = myData.data
					// console.log(myFive)
						mySeachDiv.classList.add("searching")
					myFive.forEach(function(el){

						let myP = document.createElement("p")
						let myImg = document.createElement("img")
						let myAnimeDiv = document.createElement("a")
							myAnimeDiv.href = `../Anime/animeInfo.html#${el.mal_id}`
						let myGenreDiv = document.createElement("div")
						let myContentInfo = document.createElement("div")
						let myScoreDiv = document.createElement("div")
							myScoreDiv.classList.add("scoreDiv")
						let myMalimg = document.createElement('img')
							myMalimg.src = "../logos/malLogo.png"
						let myScoreNote = document.createElement("p")
							myScoreNote.append(el.score)
						let myGenreArray = []
						el.genres.forEach((el) => {
								myGenreArray.push(el.name)
						})

						myScoreDiv.append(myMalimg)
						myScoreDiv.append(myScoreNote)
						// myAnimeDiv.id = el.mal_id
							myAnimeDiv.target = "_blank"
						// myId = myAnimeDiv.id;

							
						
						myGenreDiv.append(myGenreArray.join(","))
						myGenreDiv.style.setProperty("margin-bottom","15px")
							myAnimeDiv.classList.add("animeSearchDiv")
							myImg.src = el.images.jpg.small_image_url
							myP.append(el.title)
							myAnimeDiv.append(myImg)
							myContentInfo.append(myP)
							myContentInfo.append(myGenreDiv)
							myContentInfo.append(myScoreDiv)
							myAnimeDiv.append(myContentInfo)
							mySeachDiv.append(myAnimeDiv)
							mySearch.parentElement.append(mySeachDiv)
					})
				}catch (reason) {
					console.log(reason)
				}
			}
			setTimeout(getData, 50)


		}
	}
})

