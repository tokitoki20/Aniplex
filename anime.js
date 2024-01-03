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



let myId = location.href.slice(43)
// console.log(myId)

let myCHaracters;
let mycc = 0
let myarray = []
for (let i=0; i< 1000; i++){
	mycc += 1000
	myarray.push(mycc)
}

let myLength;


let myInfo = `<div class="additionalInfo">
				
				<div>
					<img src="../logos/type.png">
					<div>
						<p>Type</p>
						<p id="type">Type</p>
					</div>
				</div>
				<div>
					<img src="../logos/source.png">
					<div>
						<p>Source</p>
						<p id="source">Source</p>
					</div>
				</div>
				
				<div>
					<img src="../logos/episodes.png">
					<div>
						<p>Episodes</p>
						<p id="episodes">Episodes</p>
					</div>
				</div>
			
				<div>
					<img src="../logos/duration.png">
					<div>
						<p>Duration</p>
						<p id="duration">Duration</p>
					</div>
				</div>
			
			</div>
			<p id="synopsis">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

			</p>
			<div class="studio">
					<img src="../logos/studio.png">
					<div>
						<p>Studio</p>
						<div class="stu" id="studio">
							
							
						</div>
					</div>
				</div>
				<div class="genre">
					<img src="../logos/genres.png">
					<div>
						<p>Genre</p>
						<div class="stu" id="genres">
							
						</div>
					</div>
				</div>

				<div class="whereToWatch">
					<h5>Where To Watch</h5>
					<div class="sites">
						<a id="wit">
							<div>
								<img src="../logos/Witanime.png">
								<div>
										<p>Witanime</p>
										<p>العربية</p>
								</div>
							</div>
								<i class="fa-regular fa-circle-play"></i>
						</a>

						<a id="oct">
							<div>
								<img src="../logos/octanime.png">
								<div>
										<p>Octanime</p>
										<p>العربية</p>
								</div>
							</div>
								<i class="fa-regular fa-circle-play"></i>
						</a>

						<a id="4up">
							<div>
								<img src="../logos/anime4up.png">
								<div>
										<p>Anime4up</p>
										<p>العربية</p>
								</div>
							</div>
								<i class="fa-regular fa-circle-play"></i>
						</a>

						<a>
							<div id="iat">
								<img src="../logos/animeiat.png">
								<div>
										<p>Animeiat</p>
										<p>العربية</p>
								</div>
							</div>
								<i class="fa-regular fa-circle-play"></i>
						</a>
						
					</div>
				</div>`

let myFranchise = `
			<div class="scroll"> 
			<div class="related"> 
			</div>

			</div>

	`
let myCharactersS = `
			<div class="scroll"> 
			<div class="PcharacterContainer"> 
			</div>

			</div>

	`
let myEpisod = `
			<div class="scroll"> 
			<div class="epp"> 
			</div>
			
			</div>

	`
let myRev = `
			<div class="scroll"> 
			<div class="rev"> 
			</div>
			
			</div>

	`
let myRec = `
			<div class="scroll"> 
			<div class="rec"> 
			</div>
			
			</div>

	`
	let myPageAr = []
let myInformation; 

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".MenuResult").innerHTML = myInfo;
});
async function animeInfo() {
	try {
		let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/full`)
		let myData = await myFetch.json()
		// console.log(myData.data)
		// console.log(myData.data)
		document.getElementById("img").src = myData.data.images.jpg.large_image_url
		document.getElementById("score").innerHTML = myData.data.score
		document.getElementById("Popularity").innerHTML = myData.data.popularity
		document.getElementById("rank").innerHTML = myData.data.rank
		document.getElementById("premiered").innerHTML = `${myData.data.season} ${myData.data.year}`
		document.getElementById("status").innerHTML = myData.data.status
		document.getElementById("broadcast").innerHTML = myData.data.broadcast.string
		document.getElementById("aired").innerHTML = myData.data.aired.string
		document.getElementById("rating").innerHTML = myData.data.rating
		document.getElementById("title").innerHTML = myData.data.title
		document.getElementById("type").innerHTML = myData.data.type
		document.getElementById("source").innerHTML = myData.data.source
		document.getElementById("episodes").innerHTML = myData.data.episodes
		document.getElementById("duration").innerHTML = myData.data.duration
		document.getElementById("synopsis").innerHTML = myData.data.synopsis

		ep = myData.data.episodes
		myData.data.studios.forEach((el) => {
			let myP = document.createElement("p")
				myP.append(el.name)
		document.getElementById("studio").append(myP)
		})
		myData.data.genres.forEach((el) => {

			let myP = document.createElement("p")
				myP.append(el.name)
		document.getElementById("genres").append(myP)
		})
		
		// document.getElementById("mediaResult").append(div)
		myInformation = document.querySelector(".MenuResult").cloneNode(true)
		// console.log(myInformation)
		// myInfo.innerHTML = document.querySelector(".MenuResult")
		

		document.addEventListener("click", function(e) {


let myrelation;




			if (e.target.id === "franchise" || e.target.parentElement.id === "franchise"){
				document.querySelector(".MenuResult").innerHTML = myFranchise
				document.querySelector(".related").innerHTML = ""


				myData.data.relations.forEach((el,i) => {
					myrelation = el.relation
// console.log(el.entry[0].mal_id)

					if(el.entry.length > 1){
								el.entry.forEach((el,i) => {
					myrelation = el.relation
						console.log(el.mal_id)
								if (el.type === "manga"){
						setTimeout(() => {
								relations(`https://api.jikan.moe/v4/manga/${el.mal_id}/full`,myrelation)
						},myarray[i])
					
					}else {
					myrelation = el.relation
						setTimeout(() => {
								relations(`https://api.jikan.moe/v4/anime/${el.mal_id}/full`,myrelation)
						},myarray[i])
					
					}
					
							},1000)
					}else if (el.entry.length === 1) {
							if (el.entry[0].type === "manga"){
								setTimeout(() => {
								relations(`https://api.jikan.moe/v4/manga/${el.entry[0].mal_id}/full`,myrelation)
						},myarray[i])
					
					}else {
								setTimeout(() => {
								relations(`https://api.jikan.moe/v4/anime/${el.entry[0].mal_id}/full`,myrelation)
						},myarray[i])
					
					}	
					}
							

				})
			}
			

		})
	}catch(reason) {
		console.log(reason)
	}
}

animeInfo()


	document.addEventListener("click",function (e) {
			// console.log(e.target)
			
			
			if (e.target.classList.contains("bb") || e.target.parentElement.classList.contains("bb")){
				document.querySelectorAll('.animeMenu > button').forEach((el) => {
					el.classList.remove("clicked")
				})
				e.target.classList.add("clicked")
				e.target.parentElement.classList.add("clicked")
			}









			if (e.target.id === "information" || e.target.parentElement.id === "information"){
				document.querySelector(".MenuResult").innerHTML = ""
				document.querySelector(".MenuResult").innerHTML = myInformation.innerHTML
				// animeInfo()
			}
















		


























































			if (e.target.id === "characters" || e.target.parentElement.id === "characters"){
				document.querySelector(".MenuResult").innerHTML = ""
				document.querySelector(".MenuResult").innerHTML = myCharactersS


				setTimeout(() => {
					characters()
				},3000) 

			}

		

			if (e.target.id === "episode" || e.target.parentElement.id === "episode"){
				document.querySelector(".MenuResult").innerHTML = ""
				document.querySelector(".MenuResult").innerHTML = myEpisod


		

				episodes(`https://api.jikan.moe/v4/anime/${myId}/videos/episodes?page=1`)
				setTimeout(() => {
					console.log(myLength)
					if (myLength > 1) {
						for(let i = 2 ; i <= myLength; i++){
							setTimeout(() => {
							episodes(`https://api.jikan.moe/v4/anime/${myId}/videos/episodes?page=${i}`)

							},myarray[i])
						}

					}
						

				},2000)
				
			

			
			}





			if (e.target.id === "review" || e.target.parentElement.id === "review"){
				document.querySelector(".MenuResult").innerHTML = ""
				document.querySelector(".MenuResult").innerHTML = myRev
				reviews()
			}











			if (e.target.id === "recommendations" || e.target.parentElement.id === "recommendations"){
				document.querySelector(".MenuResult").innerHTML = ""
				document.querySelector(".MenuResult").innerHTML = myRec
				recommendations()
			}
		})



async function relations(myUrl,myrelation) {
	try {
		let myFetch = await fetch(myUrl)
		let myData = await myFetch.json()
		console.log(myData.data)

		let myDiv = document.createElement("a")
			myDiv.classList.add("ani")
			myDiv.href = `animeInfo.html#${myData.data.mal_id}`
			myDiv.target = "_blank"

						// myDiv.classList.add(myrelation)
					let myIDiv = document.createElement("div")
						myIDiv.classList.add("cs")
				
					let myImg = document.createElement("img")
						myImg.src = myData.data.images.jpg.large_image_url

					let myLogo = document.createElement("img")
						myLogo.src = "../logos/malLogo.png"
					let myNote = document.createElement("p")
						myNote.append(myData.data.score)
					let myTitle = document.createElement("p")
						myTitle.append(myData.data.title)
					// let myRelationName = document.createElement("p")
					// 	myRelationName.append(myrelation)
					let myDivv = document.createElement("div")
						myDivv.classList.add("myDivv")
					let myTexts = document.createElement("div")

					let myY;
					if (myData.data.type === "TV" || myData.data.type === "Special" || myData.data.type === "ONA" || myData.data.type === "OVA" || myData.data.type === null || myData.data.type === "Movie"){
						if (myData.data.aired.prop.from.year === null && myData.data.aired.prop.to.year === null) {
						myY = ""
					}else if (myData.data.aired.prop.from.year !== null && myData.data.aired.prop.to.year !== null){
						myY = `<div><i class="fa-solid fa-calendar"></i></div> ${myData.data.aired.prop.from.year} - ${myData.data.aired.prop.to.year} `
					}else if (myData.data.aired.prop.from.year !== null && myData.data.aired.prop.to.year === null) {
						myY = `<div><i class="fa-solid fa-calendar"></i></div> ${myData.data.aired.prop.from.year}`

					}
					}else if (myData.data.type === "Manga" || myData.data.type === "Light Novel") {
							if (myData.data.published.prop.from.year === null) {
						myY = ""
					}else if (myData.data.published.prop.from.year !== null && myData.data.published.prop.to.year !== null){
						myY = `<div><i class="fa-solid fa-calendar"></i></div> ${myData.data.published.prop.from.year} - ${myData.data.published.prop.to.year} `
					}else if (myData.data.published.prop.from.year !== null && myData.data.published.prop.to.year === null) {
						myY = `<div><i class="fa-solid fa-calendar"></i></div> ${myData.data.published.prop.from.year}`

					}
					}
					

					let myYear = document.createElement("div")
						myYear.innerHTML = myY
										
									
					let myT;
						if (myData.data.type === "TV" || myData.data.type === "Special" || myData.data.type === "ONA" || myData.data.type === "OVA"){
							myT = `: ${myData.data.episodes}`
						}else if (myData.data.type === "Manga" || myData.data.type === "Light Novel") {
							if (myData.data.chapters === null) {
								myT = `: N/A`
							}else {
								myT = `: ${myData.data.chapters} `

							}
						}else if (myData.data.type === "Movie" || myData.data.type === "Music" || myData.data.type === "Other") {
							myT = " "
						}

					let myTypes = document.createElement("div")
											myTypes.innerHTML = `
																<div><i class="fa-solid fa-tv" ></i></div> ${myData.data.type} ${myT}
						
														` 

								if (myData.data.type === null){
										myTypes.innerHTML = `	
														` 
							
						}
					let myType = document.createElement("div")
					let myTop = document.createElement("div")
					let myBottom = document.createElement("div")
						myIDiv.append(myImg)

						myDiv.append(myIDiv)
						myTop.append(myTitle)
						// myTop.append(myRelationName)
						myTexts.append(myTop)
						myTexts.append(myBottom)
						myBottom.append(myYear)
						myBottom.append(myTypes)
						myDiv.append(myTexts)
						
						document.querySelector(".related").append(myDiv)
					

	}catch(reason) {
		console.log(reason)
	}
}




async function characters() {
	try {
			let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/characters`)
			let myData = await myFetch.json()
			let myCharacters = myData.data
			// console.log(myCharacters)
				let myPDiv = document.createElement("div")
				myPDiv.classList.add("PcharacterContainer")
			myCharacters.forEach((el) => {

				// console.log(el.character.images.jpg.image_url)
			let myDiv = document.createElement("a")
				myDiv.href = `../Industry/charactersInfo.html#${el.character.mal_id}`
				myDiv.classList.add("characterContainer")

			let myCharAndName = document.createElement("div")
			let myImg = document.createElement("img")
				myImg.src = el.character.images.jpg.image_url
			let myName = document.createElement("p")
				myName.append(el.character.name)
			let main = document.createElement("p")
				main.append(el.role)
			myCharAndName.append(myImg)
			myCharAndName.append(myName)
			myCharAndName.append(main)

			// let myActorDiv = document.createElement("div")
			// let myImgDiv = document.createElement("div")
			// let myImg2 = document.createElement("img")
			// 	myImg2.src = el.voice_actors[0].person.images.jpg.image_url

			// let myNameAndJap = document.createElement("div")
			// let myAName = document.createElement("p")
			// 	/*if (el.voice_actors.length === 0){
			// 		console.log("no")
			// 	myAName.append("-")
			// 	}else {
			// 	myAName.append(el.voice_actors[0].person.name)

			// 	}*/
				
			// let myJap = document.createElement("p")
			// 	myJap.append(el.voice_actors[0].language)

				// myImgDiv.append(myImg2)
				// myNameAndJap.append(myAName)
				// // myNameAndJap.append(myJap)
				// myActorDiv.append(myImgDiv)
				// myActorDiv.append(myNameAndJap)
				myDiv.append(myCharAndName)
				myPDiv.append(myDiv)
				// myDiv.append(myActorDiv)
				document.querySelector(".scroll").append(myPDiv)
			})

	}catch(reason) {
		console.log(reason)
	}
}

async function episodes(url) {
	try {

			let myFetch = await fetch(url)
			let myData = await myFetch.json()
			let myCHaracters = myData.data
				 myLength = myData.pagination.last_visible_page
			// console.log(myLength)
			console.log(myCHaracters)

				myCHaracters.forEach((el) => {
						let myEpisodeDiv = document.createElement("div")
							myEpisodeDiv.classList.add("episode")

			let myEpisodeImgDiv = document.createElement("div")
			let myImg = document.createElement("img")
				myImg.src = el.images.jpg.image_url
			let myI = document.createElement("i")
				myI.classList.add("fa-regular")
				myI.classList.add("fa-circle-play")
			
			let myEp = document.createElement("p")
				myEp.append(el.episode)

			let myTitlle = document.querySelector("h3#title").innerText.replaceAll(" ", "-")
			let myEpNumber = el.episode.slice(7).trim()
			let myTitles = document.createElement("div")
				myTitles.classList.add("titi")
				function append() {
					console.log(`https://witanime.lat/episode/${myTitlle}-الحلقة-${myEpNumber}`)
					let myEpisode = document.createElement("p")
						myEpisode.classList.add("eee")
						if (el.title === "Untitled"){
							myEpisode.append("-")
						}else {
							myEpisode.append(el.title)

						}
					let myButton = document.createElement("a")
						myButton.classList.add("eee")
						myButton.href = `https://witanime.lat/episode/${myTitlle}-الحلقة-${myEpNumber}`
						myButton.target = `_blank`
						let myIm = document.createElement("img")
							myIm.src = "../logos/witanime.png"
						myButton.append(myIm)
						myButton.append("Watch Now!")

				  myTitles.append(myEpisode);
				  myTitles.append(myButton);

				}
			myEpisodeDiv.addEventListener("mouseenter",(e) => {
				if (e.target === myEpisodeDiv || myEpisodeDiv.contains(e.target)) {
    append();
  }					

			})
	myEpisodeDiv.addEventListener("mouseleave", () => {
  // Remove elements with class "eee" inside myEpisodeDiv
  const elementsToRemove = myEpisodeDiv.querySelectorAll(".eee");
  // const elementsToRemove = myEpisodeDiv.querySelectorAll(".eee");
  elementsToRemove.forEach((element) => {
    element.remove();
  });
});



			

			// document.querySelector('.eee').remove();
			myEpisodeDiv.append(myEpisodeImgDiv)
			myEpisodeDiv.append(myTitles)


			myEpisodeImgDiv.append(myImg)
			myEpisodeImgDiv.append(myI)
			myEpisodeImgDiv.append(myEp)

			// myTitles.append(myEp)
			
			document.querySelector(".epp").append(myEpisodeDiv)


				})
			
	}catch(reason) {
		console.log(reason)
	}
}



async function reviews(url) {
	try {

			let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/reviews`)
			let myData = await myFetch.json()
			console.log(myData)
			let myReviews = myData.data
				myReviews.forEach((el) => {
				let myReviewDiv = document.createElement("div")
					myReviewDiv.classList.add("reviewDiv")
			let myImgDiv = document.createElement("div")
			let myImg = document.createElement("img")
				myImg.src = el.user.images.jpg.image_url

				myImgDiv.append(myImg)

			let myTextsAllDiv = document.createElement("div")
				myTextsAllDiv.classList.add("TextAllDiv")
			let myTextsDiv = document.createElement("div")

			let myReviewNameAndScoreDiv = document.createElement("div")
				myReviewNameAndScoreDiv.classList.add("reviewNameAndScore")
			let myReviewName = document.createElement("p")
				myReviewName.append(el.user.username)
			let myReviewScore = document.createElement("p")
				myReviewScore.id = "sc"
				myReviewScore.innerHTML = `
													<i class="fa-solid fa-star"></i> ${el.score}
				`
				// myReviewScore.append(el.user.username)
			
				myReviewNameAndScoreDiv.append(myReviewName)
				myReviewNameAndScoreDiv.append(myReviewScore)

			let myDateAndEpisode = document.createElement("div")
				myDateAndEpisode.classList.add("myDateAndEpisode")
			let myDate = document.createElement("p")
				let myDa = new Date(el.date)
					let monthNames = [
										  "January",
										  "February",
										  "March",
										  "April",
										  "May",
										  "June",
										  "July",
										  "August",
										  "September",
										  "October",
										  "November",
										  "December"
									];

				myDate.append(`${monthNames[myDa.getMonth()]} ${myDa.getDate()}, ${myDa.getDate()}`)
			let myEpisodeWatched = document.createElement("p")
				if (el.episodes_watched === null){
						myEpisodeWatched.innerHTML = `
						<span>-</span> of  ${ep} episodes
				`	
				}else {
						myEpisodeWatched.innerHTML = `
								<span>${el.episodes_watched}</span> of  ${ep} episodes
						`	
				}


			let myReviewText = document.createElement("p")
				myReviewText.id = "aa"
				myReviewText.append(`${el.review.slice(0,55)}...`)
			let myStatusAndShowDiv = document.createElement("div")
				myStatusAndShowDiv.classList.add("myStatusAndShowDiv")
			let myStatus = document.createElement("p")
				myStatus.innerHTML = `
													<i class="fa-solid fa-star"></i>${el.tags[0]}
				`
				if (el.tags[0] === "Recommended") {
					myStatus.style.setProperty("background-color","#70e000")
				}else if (el.tags[0] === "Not Recommended") {
					myStatus.style.setProperty("background-color","#bf0603")

				}else  {
					myStatus.style.setProperty("background-color","#bcb8b1")
					myStatus.style.setProperty("color","#101010")
					
				}
			let myShow = document.createElement("button")
				myShow.append("Show More")
				myDateAndEpisode.append(myDate)
				myDateAndEpisode.append(myStatus)
				myDateAndEpisode.append(myEpisodeWatched)

				myTextsDiv.append(myReviewNameAndScoreDiv)
				myTextsDiv.append(myDateAndEpisode)
				myTextsAllDiv.append(myTextsDiv)
				myTextsAllDiv.append(myReviewText)
				myTextsAllDiv.append(myStatusAndShowDiv)




				myStatusAndShowDiv.append(myShow)

				myReviewDiv.append(myImgDiv)
				myReviewDiv.append(myTextsAllDiv)

				myShow.addEventListener("click",() => {
					let myDiv = document.createElement("div")
						myDiv.classList.add("pop")
					let	myReview = myReviewDiv.cloneNode(true)
						console.log(myReview)
						console.log(myReview.querySelector(".TextAllDiv > p"))
						myReview.classList.add("clone")

						myDiv.append(myReview)
						document.body.append(myDiv)
						setTimeout(() => {
							if (document.querySelector(".TextAllDiv").contains(document.getElementById("aa"))){
								console.log(el.review)
								document.querySelector(".clone > .TextAllDiv > #aa").innerHTML = el.review
								document.querySelector(".clone > .TextAllDiv > .myStatusAndShowDiv").remove()
								document.querySelector(".clone > .TextAllDiv > div > .reviewNameAndScore > p:nth-of-type(2)").innerHTML = `
													<i class="fa-solid fa-star"></i> Score ${el.score}
				`
							}

						},100)
						
						console.log(document.querySelector(".TextAllDiv").contains(document.getElementById("aa")))
				}) 
						document.querySelector(".rev").append(myReviewDiv)


				})
			


							
	}catch(reason) {
		console.log(reason)
	}
}



async function recommendations(url) {
	try {

			let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/recommendations`)
			let myData = await myFetch.json()
			console.log(myData)
			let myReviews = myData.data
				myReviews.forEach((el) => {
					let myRecom = document.createElement("a")
						myRecom.href = `animeInfo.html#${el.entry.mal_id}`
				myRecom.classList.add("myRecom")
			let myImg = document.createElement("img")
				myImg.src = el.entry.images.jpg.large_image_url
				myImg.addEventListener("mouseenter",() => {
					myImg.parentElement.style.setProperty("background-image", "var(--linearGradient)")
				})
				myImg.addEventListener("mouseleave",() => {
					myImg.parentElement.style.removeProperty("background-image")
				})
			// let myTextsDiv = document.createElement("div")
			let myVote = document.createElement("p")
				if (el.votes <= 1) {
					myVote.innerHTML = ` ${el.votes} Vote`	
				}else {
					myVote.innerHTML = ` ${el.votes} Votes`	
				}
			let myTitle = document.createElement("p")
				myTitle.append(el.entry.title)

				myRecom.append(myImg)
				myRecom.append(myVote)
				myRecom.append(myTitle)

				// myRecom.append(myTextsDiv)
				document.querySelector(".rec").append(myRecom)		
				})
			

							
	}catch(reason) {
		console.log(reason)
	}
}
let embed;

async function promo(url) {
	try {

			let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/videos`)
			let myData = await myFetch.json()
			let myPromos = myData.data.promo
			console.log(myPromos)
				myPromos.forEach((el) => {

					let div = document.createElement("div")
				div.classList.add("vi")
				div.setAttribute("url",el.trailer.embed_url )
			let myImg = document.createElement("img")
				myImg.setAttribute("url",el.trailer.embed_url )
				myImg.src = el.trailer.images.large_image_url
			let i = document.createElement("i")
				i.setAttribute("url",el.trailer.embed_url )
				i.classList.add("fa-regular")
				i.classList.add("fa-circle-play")
				div.append(myImg)
				div.append(i)

			document.querySelector(".mediaResult").append(div)
				document.addEventListener("click",(e) => {

					if (e.target === div|| div.contains(e.target) )  {
							console.log()
			let myDiv = document.createElement("div")
				myDiv.classList.add("frame")
			let myiframe = document.createElement("iframe")
				myiframe.src = div.getAttribute("url")
				myDiv.append(myiframe)
				document.body.append(myDiv)
		

			}
			if (e.target === document.querySelector(".frame")){
				e.target.remove()
			}

				})
				})


							
	}catch(reason) {
		console.log(reason)
	}
}


promo()

document.addEventListener("click", (e) => {
	if (e.target === document.querySelector("div.logo") || e.target === document.querySelector("div.logo > img") ) {
			location.open("../home.html")
			console.log("yes")
		}
})


let myMediaMenu = document.querySelector(".mediaMenu")
let mediaArray = myMediaMenu.children
let med = [...mediaArray]

let trailerBtn = document.getElementById("trail")
let photosBtn = document.getElementById("photos")
	
	trailerBtn.addEventListener("click", (e) => {
		document.getElementById("mediaResult").innerHTML = ""
		promo()
		med.forEach((el) => {
			el.classList.remove("ccl")
		})
				trailerBtn.classList.add("ccl")
	})

	photosBtn.addEventListener("click", (e) => {
		document.getElementById("mediaResult").innerHTML = ""
		photos()
		med.forEach((el) => {
			el.classList.remove("ccl")
		})
				photosBtn.classList.add("ccl")
	})

document.addEventListener("click",(e) => {
	if (e.target.tagName === "IMG" && e.target.parentElement === document.querySelector(".mediaResult > div")) {
			console.log(e.target)

		let myDiv = document.createElement("div")
			myDiv.classList.add("pop")
		let myImg = document.createElement("img")
			myImg.src = e.target.src
			myDiv.append(myImg)
			document.body.append(myDiv)
	}
})


async function photos(url) {
	try {

			let myFetch = await fetch(`https://api.jikan.moe/v4/anime/${myId}/pictures`)
			let myData = await myFetch.json()
			let myPromos = myData.data
			console.log(myPromos)
						let myDiv = document.createElement("div")
							myDiv.classList.add("imgContainer")
				myPromos.forEach((el) => {
						let myImg = document.createElement("img")
							myImg.src = el.jpg.large_image_url
							myDiv.append(myImg)
				})
						document.querySelector(".mediaResult").append(myDiv)


							
	}catch(reason) {
		console.log(reason)
	}
}
