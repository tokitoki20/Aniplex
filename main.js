let menuButton = document.getElementById("sideMenu");
let myDiv = document.createElement("div")

	menuButton.onclick = function() {
	myDiv.innerHTML = `<div class= "sideMenu1">
	<button  class='toleft'>
		<i class="fa-solid fa-chevron-right"></i>
	</button>
	<div class="logo">
	<img   src="logos/Aniplex.png">
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


document.addEventListener("click",function(e){

	let myAnimeTabClick = document.querySelectorAll(".menu.long.drop")
	if(e.target.classList.contains('toleft') || e.target.parentElement.classList.contains('toleft')) {
		let aa = document.querySelector(".sideMenu1")
		aa.style.setProperty("animation-name","toleft") 
		setTimeout(function(){
		myDiv.remove()
		},350)
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
					console.log(myFive)
						mySeachDiv.classList.add("searching")
					myFive.forEach(function(el){

						let myP = document.createElement("p")
						let myImg = document.createElement("img")
						let myAnimeDiv = document.createElement("a")

						let myGenreDiv = document.createElement("div")
						let myContentInfo = document.createElement("div")
						let myScoreDiv = document.createElement("div")
							myScoreDiv.classList.add("scoreDiv")
						let myMalimg = document.createElement('img')
							myMalimg.src = "logos/malLogo.png"
						let myScoreNote = document.createElement("p")
							myScoreNote.append(el.score)
						let myGenreArray = []
						el.genres.forEach((el) => {
								myGenreArray.push(el.name)
						})

						myScoreDiv.append(myMalimg)
						myScoreDiv.append(myScoreNote)
						myAnimeDiv.id = el.mal_id
							
							myAnimeDiv.href = `Anime/animeInfo.html#${myAnimeDiv.id}`
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


let myDivs = document.querySelector(".me2").children

let myCounter = 0


setInterval(() => {
	myCounter -= 52
	document.querySelector(".me2").style.setProperty('transform',`translateX(${myCounter}vw)`) 
	myDivs[1].style.width = '50vw'

	setTimeout(() => {
		document.querySelector(".me2").style.transition = '0s'
	
	} ,1020)

	setTimeout(() => {
	myDivs[0].style.width = '25vw'
		document.querySelector(".me2").append(myDivs[0])
	} ,1030)
	setTimeout(() => {
		myCounter = 0
	document.querySelector(".me2").style.setProperty('transform',`translateX(${myCounter}vw)`) 

	},1030)

	setTimeout(() => {
		document.querySelector(".me2").style.transition = '1s'
	},1300)
},4000)

async function getData1() {
	try {
		let myUrl = await fetch("https://api.jikan.moe/v4/seasons/now");
		let myData = await myUrl.json()
		let myD = myData.data
		let myNew = myD.filter((el) => {
			return el.score > 8
		})
		// console.log(myNew)
		myNew.length = 6
		myNew.forEach((el, i , arr) => {
				myDivs[i].id = el.mal_id
				myDivs[i].style.setProperty("background-image", `url(${el.images.jpg.large_image_url})`)
				let myDiv = document.createElement("div")
					myDiv.classList.add("animeinf")

				let myTitle = document.createElement("p")
					myTitle.append(el.title)
				let myGenre = document.createElement("p")
				let myGenreArray = []
					el.genres.forEach((el) => {
								myGenreArray.push(el.name)
						})
				let myAccessButton = document.createElement("a")

					myAccessButton.append(" > See Details")
					myAccessButton.classList.add("goToAnime")
					myAccessButton.id = el.mal_id
					myAccessButton.href = `Anime/animeInfo.html#${el.mal_id}`

				myGenre.append(myGenreArray.join(","))
				myDiv.append(myTitle)
				myDiv.append(myGenre)
				myDiv.append(myAccessButton)

				myDivs[i].append(myDiv)

				// let myGenre = document.createElement("p") 			
		})
		document.addEventListener("click", (e) => {
			console.log(e.target.id)
		})
	}
	catch(reason) {
		console.log(reason)
	}
}

setTimeout(getData1, 1000)



document.addEventListener("click",function(e) {
	if (e.target.classList.contains("animeSearchDiv") || e.target.parentElement.classList.contains("animeSearchDiv") || e.target.parentElement.classList.contains("scoreDiv") || e.target.parentElement.tagName === "DIV" || e.target.contains("scoreDiv")) {
		 myId = e.target.id
		 // console.log(myId)
	}
})
	









let myAnimeSeason = document.querySelector(".anime-list");
async function season() {
	try {
		let myFetch = await fetch("https://api.jikan.moe/v4/seasons/now");
		let myData = await myFetch.json()
			console.log(myData)
		let myDataUse = myData.data
			myDataUse.length = 20
			console.log(myDataUse)
			myDataUse.forEach((el) => {
				// console.log(el.season.slice(0,1).toUpperCase())
			document.querySelector(".sea").innerHTML = `${el.season.slice(0,1).toUpperCase()}${el.season.slice(1)} ${el.year}`
				let myParentDiv = document.createElement("a")
					myParentDiv.href = `Anime/animeInfo.html#${el.mal_id}`
					myParentDiv.classList.add("anime-parent")
				let myDiv = document.createElement("div")
					myDiv.classList.add("animeDiv")
				let myImg = document.createElement("img")
				let myNote = document.createElement("div");
					myNote.classList.add("note")
				let myNoteImg = document.createElement("img")
					myNoteImg.src = `logos/Star.png`
				let myNoteTitle = document.createElement("p")
					myNoteTitle.append(el.score)
					myNote.append(myNoteImg)
					myNote.append(myNoteTitle)

					myImg.src = el.images.jpg.large_image_url
				let myTitle = document.createElement("p")
					myTitle.append(el.title)
					myDiv.append(myImg)
					myDiv.append(myTitle)
					myDiv.append(myNote)
					myParentDiv.append(myDiv)
				myAnimeSeason.append(myParentDiv)
			})
	}	
	catch(reason) {
		reason
	}
}

setTimeout(season , 2000)




let myButtonLeft = document.getElementById("left")
let myButtonRight = document.getElementById("right")

let myCCounter = 0

myButtonLeft.addEventListener("click", function (e) {

	setTimeout(() => { 
			document.querySelector(".anime-list").prepend(...Array.from(document.querySelector(".anime-list").children).slice(6));
					document.querySelector(".anime-list").style.transition = '0s'
					myCCounter -= 725
					document.querySelector(".anime-list").style.setProperty('transform',`translateX(${myCCounter}px)`) 
	} ,20)

	setTimeout(() => {
		document.querySelector(".anime-list").style.transition = '1s'
	},100)

	setTimeout(() => {
		myCCounter += 725
					document.querySelector(".anime-list").style.setProperty('transform',`translateX(${myCCounter}px)`) 
	} ,300)
	
	setTimeout(() => {
		myCCounter = 0
					document.querySelector(".anime-list").style.setProperty('transform',`translateX(${myCCounter}px)`) 
	} ,500)
	
	

})

myButtonRight.addEventListener("click", function (e) {

		myCCounter -= 725
	document.querySelector(".anime-list").style.setProperty('transform',`translateX(${myCCounter}px)`) 
	setTimeout(() => {
		document.querySelector(".anime-list").style.transition = '0s'
	
	} ,1020)

	setTimeout(() => {

			document.querySelector(".anime-list").append(...Array.from(document.querySelector(".anime-list").children).slice(0, 4));
	} ,1030)
	setTimeout(() => {
		myCCounter = 0
		document.querySelector(".anime-list").style.setProperty('transform',`translateX(${myCCounter}px)`) 

	},1035)

	setTimeout(() => {
		document.querySelector(".anime-list").style.transition = '1s'
	},1080)
	
	

})





let myAnimeEpisodeDiv = document.querySelector(".episodes-list");


async function episode() {
	try {
		let myFetch = await fetch("https://api.jikan.moe/v4/watch/episodes");
		let myData = await myFetch.json()
			// console.log(myData)
		let myDataUse = myData.data
			myDataUse.length = 20
			// console.log(myDataUse)
			myDataUse.forEach((el) => {
				let myParentDiv = document.createElement("div")
					myParentDiv.href = `Anime/animeInfo.html#${el.mal_id}`
					myParentDiv.classList.add("episode-parent")
				let myEpisodeImg = document.createElement("img")
					myEpisodeImg.src = el.entry.images.jpg.large_image_url

				let myDiv = document.createElement("div")
					myDiv.classList.add("episodeDiv")

				let myAnimeTitle = document.createElement("p")
					myAnimeTitle.append(el.entry.title)
				
				let myAnimeEpisode = document.createElement("p")
					myAnimeEpisode.append(el.episodes[0].title)

				let mybutton = document.createElement("button")
					mybutton.id = "watch"
					mybutton.onclick = function () {
						let myurl= `${el.entry.title} ${el.episodes[0].title}`

						// console.log(myurl.replaceAll(" ", "-").replaceAll("Episode", "االحلقة"))
						window.open(`https://witanime.org/${myurl.replaceAll(" ", "-").replaceAll("Episode", "الحلقة")}` , "_blank")
					}
					mybutton.append("Watch Now!")
					myParentDiv.appendChild(myEpisodeImg)
					myDiv.appendChild(myAnimeTitle)
					myDiv.appendChild(myAnimeEpisode)
					myDiv.appendChild(mybutton)
					myParentDiv.appendChild(myDiv)

				myAnimeEpisodeDiv.append(myParentDiv)
			})
	}	
	catch(reason) {
		reason
	}
}

setTimeout(episode,3000)





let myButtonLeft1 = document.getElementById("left1")
let myButtonRight1 = document.getElementById("right1")

let myCCCounter = 0

myButtonLeft1.addEventListener("click", function (e) {

	setTimeout(() => { 
			document.querySelector(".episodes-list").prepend(...Array.from(document.querySelector(".episodes-list").children).slice(17));
					document.querySelector(".episodes-list").style.transition = '0s'
					myCCCounter -= 725
					document.querySelector(".episodes-list").style.setProperty('transform',`translateX(${myCCCounter}px)`) 
	} ,20)

	setTimeout(() => {
		document.querySelector(".episodes-list").style.transition = '1s'
	},100)

	setTimeout(() => {
		myCCCounter += 725
					document.querySelector(".episodes-list").style.setProperty('transform',`translateX(${myCCCounter}px)`) 
	} ,300)
	
	setTimeout(() => {
		myCCCounter = 0
					document.querySelector(".episodes-list").style.setProperty('transform',`translateX(${myCCCounter}px)`) 
	} ,500)
	
	

})

myButtonRight1.addEventListener("click", function (e) {

		myCCCounter -= 725
	document.querySelector(".episodes-list").style.setProperty('transform',`translateX(${myCCCounter}px)`) 
	setTimeout(() => {
		document.querySelector(".episodes-list").style.transition = '0s'
	
	} ,1020)

	setTimeout(() => {

			document.querySelector(".episodes-list").append(...Array.from(document.querySelector(".episodes-list").children).slice(0, 3));
	} ,1030)
	setTimeout(() => {
		myCCCounter = 0
		document.querySelector(".episodes-list").style.setProperty('transform',`translateX(${myCCCounter}px)`) 

	},1035)

	setTimeout(() => {
		document.querySelector(".episodes-list").style.transition = '1s'
	},1080)
	
	

})










let mySelectBox = document.querySelector('.select-box');
let myOptions = ["Top Airing", "Most Favorite","Top Upcoming"];
let myOptionsDiv = document.createElement("div")
	myOptionsDiv.classList.add("dropBox")
	
	myOptions.forEach((el) => {

		let myOption = document.createElement("p")
			myOption.append(el)
			myOptionsDiv.append(myOption)
	})

let myTopAnime = document.querySelector(".top-anime");
let myLink = document.getElementById("topAnime")

async function getTop(url) {
	try {

		let myFetch = await fetch(url)
		let myData = await myFetch.json()
		let myDataUse = myData.data
			myDataUse.length = 5
			myDataUse.forEach((el,i) => {
				myTopAnime.children[i].href = `Anime/animeInfo.html#${el.mal_id}`
				myTopAnime.children[i].children[1].children[0].src = el.images.jpg.large_image_url
				myTopAnime.children[i].children[1].children[1].children[0].innerHTML = el.title
				myTopAnime.children[i].children[1].children[1].children[2].children[1].innerHTML = el.score
			
				let myGenreArray = []

						el.genres.forEach((el) => {
								myGenreArray.push(el.name)
						})
				myTopAnime.children[i].children[1].children[1].children[1].innerHTML = myGenreArray.join(",")
				// myTopAnime.children[i].children[1].children[1].children[0] = el.
			})
	}catch(reason) {
		console.log(reason)
	}
}
getTop("https://api.jikan.moe/v4/top/anime?filter=airing")

document.addEventListener("click",(e) => {
	if (e.target === mySelectBox || e.target === mySelectBox.children[0] || e.target === mySelectBox.children[1]) {
		mySelectBox.classList.toggle("drop")
		if (mySelectBox.classList.contains("drop")) {
			mySelectBox.append(myOptionsDiv)
		}else {
			myOptionsDiv.remove()
		}
	}
	if (e.target === myOptionsDiv.children[0]) {
		mySelectBox.children[0].innerHTML =  e.target.innerHTML
		myOptionsDiv.remove()
		document.querySelector(".top-anime").style.removeProperty("animation")
		setTimeout(() => {
			document.querySelector(".top-anime").style.animation = "fromRight .5s ease-in forwards"

		},1)
		getTop("https://api.jikan.moe/v4/top/anime?filter=airing")

	}
	if (e.target === myOptionsDiv.children[1]) {
		mySelectBox.children[0].innerHTML =  e.target.innerHTML
		myOptionsDiv.remove()
		document.querySelector(".top-anime").style.removeProperty("animation")
		setTimeout(() => {
			document.querySelector(".top-anime").style.animation = "fromRight .5s ease-in forwards"

		},1)
		getTop("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
	}
	if (e.target === myOptionsDiv.children[2]) {
		mySelectBox.children[0].innerHTML =  e.target.innerHTML
		myOptionsDiv.remove()
		document.querySelector(".top-anime").style.removeProperty("animation")
		setTimeout(() => {
			document.querySelector(".top-anime").style.animation = "fromRight .5s ease-in forwards"

		},1)
		getTop("https://api.jikan.moe/v4/top/anime?filter=upcoming")
	}
})





let myDate = new Date()
let myWeekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"] 
let myAnimeToday = document.querySelector(".todayAnime")
let myDay = myDate.getDay()
console.log(myWeekDays[myDay])
async function schedule() {
	try {

		let myFetch = await fetch(`https://api.jikan.moe/v4/schedules/${myWeekDays[myDay]}`);
		let myData = await myFetch.json()
		let myFive = myData.data
			myFive.length = 5
			myFive.reverse()
			console.log(myFive)
			myFive.forEach((el,i) => {
				myAnimeToday.children[i].children[0].src = el.images.jpg.large_image_url
				myAnimeToday.children[i].href = `Anime/animeInfo.html#${el.mal_id}`
				let myNote = document.createElement("div");
					myNote.classList.add("note")
				let myNoteImg = document.createElement("img")
					myNoteImg.src = `logos/Star.png`
				let myNoteTitle = document.createElement("p")
					if (el.score === null) {
					myNoteTitle.append("N/A")
					}else {
					myNoteTitle.append(el.score)
					}

					myNote.append(myNoteImg)
					myNote.append(myNoteTitle)
					myAnimeToday.children[i].append(myNote)
					let myInfoDiv = document.createElement("div") 
						myInfoDiv.classList.add("myInfoDiv")
					let myInfoP = document.createElement("h3")
						myInfoP.append(el.title)
					let myTime = document.createElement("p")
						myTime.append(`${el.broadcast.timezone} ${el.broadcast.time}`)
					let myGenreDiv = document.createElement("div")
					let myGenreArray = []
						el.genres.forEach((el) => {
								myGenreArray.push(el.name)
						})
						myGenreArray.forEach((el) => {
							let myP = document.createElement("p")
								myP.append(el)
							myGenreDiv.append(myP)

						})
					// let mySynopsis = document.createElement("p")
						// console.log(el.synopsis.length)
						// mySynopsis.append(el.synopsis.slice(0 , 200))
						myInfoDiv.append(myInfoP)
						myInfoDiv.append(myTime)
						myInfoDiv.append(myGenreDiv)
						// myInfoDiv.append(mySynopsis)
						myAnimeToday.children[i].children[0].after(myInfoDiv)

// document.addEventListener("click",(e) => {
// 	if (e.target.parentElement.classList.contains("anime1") || e.target.parentElement.classList.contains("anime2") || e.target.parentElement.classList.contains("anime3") || e.target.parentElement.classList.contains("anime4") || e.target.parentElement.classList.contains("anime5")){
// 			e.target.parentElement.append(myInfoDiv)
// 	}
// })
			})
	}catch(reason) {   
		console.log(reason)
	}
}

setTimeout(schedule,5000)











async function trailers() {
	try {

		let myFetch = await fetch(`https://api.jikan.moe/v4/watch/promos`);
		let myData = await myFetch.json()
		let mytwo = myData.data
			mytwo.length = 2
			console.log(mytwo)
			mytwo.forEach((el, i) => {

				document.querySelectorAll(".videos")[i].children[0].src = el.trailer.images.large_image_url
				document.querySelectorAll(".inf")[i].children[0].innerHTML = el.entry.title
				document.querySelectorAll(".inf")[i].children[1].innerHTML = el.title
				document.querySelectorAll(".videos")[i].id = el.trailer.embed_url
				document.querySelectorAll(".videos")[i].children[1].children[0].id = el.trailer.embed_url
				
					
				
				
			})

		
	}catch(reason) {   
		console.log(reason)
	}
}

setTimeout(trailers ,6000)

	document.addEventListener("click" , (e) => {

				
				if (e.target.parentElement.classList.contains("watch")) {
					let myFrameDiv = document.createElement("div")
					myFrameDiv.classList.add("frame")
				let myFrame = document.createElement("iframe")
					myFrame.src = e.target.id || e.target.parentElement.id
					myFrameDiv.append(myFrame)
					document.body.append(myFrameDiv)
						
						
				}
				if(e.target.classList.contains("frame")) {
					e.target.remove()  
				}
			})


let myAnimeName = ["witanime","animelek","okanime","animesilver","anime4up","gateanime","shahiid-anime","octanime","arabanime","animerco"]
let myAnimeSites = ["logos/witanime.png","logos/animelek.png","logos/okanime.png","logos/animesilver.png","logos/anime4up.png","logos/gateanime.png","logos/shahiid-anime.png","logos/octanime.png","logos/arabanime.png","logos/animerco.png"]
let myLogos = ["https://witanime.com", "https://animelek.tv/", "https://okanime.tv/", "https://www.animesilver.net/","https://anime4up.tv/","https://e.gateanime.com/","https://shahiid-anime.net/","https://www.octanime.tv/","https://www.arabanime.net/","https://animerco.org"]




let mySites = document.querySelector(".animeSites");

myAnimeName.forEach((el,i) => {
	let mySiteDiv = document.createElement("div")
		mySiteDiv.classList.add("mysiteAnime")

	let myImgAndTextDiv = document.createElement("div")

	let myTextDiv = document.createElement("div")

	let myImg = document.createElement("img")
		myImg.src = myAnimeSites[i]

	let myH3 = document.createElement("h3")
		myH3.append(el)

	let myP = document.createElement("p")
		myP.append("العربية")

	let myLink = document.createElement("a")
		myLink.append("View")
		myLink.href = myLogos[i]
		myLink.target = "_blank"

		mySiteDiv.append(myImgAndTextDiv)
		mySiteDiv.append(myLink)

		myImgAndTextDiv.append(myImg)
		myImgAndTextDiv.append(myTextDiv)

		myTextDiv.append(myH3)
		myTextDiv.append(myP)

		mySites.append(mySiteDiv)

})




let myRecom = document.querySelector(".RecommendationsParent");

async function reco() {
	try {

		let myFetch = await fetch(`https://api.jikan.moe/v4/recommendations/anime`);
		let myData = await myFetch.json()
		let myfive = myData.data
			myfive.length = 5
			console.log(myfive)
			myfive.forEach((el,i) => {
				myRecom.children[i].children[0].children[0].src = el.entry[0].images.jpg.large_image_url
				myRecom.children[i].children[0].children[1].src = el.entry[1].images.jpg.large_image_url
				let myDiv = document.createElement("p")
					let myT = el.content
						// console.log(myT)
					myDiv.append(myT)
				myRecom.children[i].append(myDiv)
			})
			console.log(myfive)

			
				


		
	}catch(reason) {   
		console.log(reason)
	}
}

setTimeout(reco ,7000)

document.addEventListener("mouseover", (e) => {
		if (e.target.id === "show") {
				setTimeout(() => {
		e.target.parentElement.children[2].style.display = "block"

	},250)
		}
})
document.addEventListener("mouseout", (e) => {
		if (e.target.id === "show") {
		e.target.parentElement.children[2].style.display = "none"
		}
})









let myButtonLeft3 = document.getElementById("left3")
let myButtonRight3 = document.getElementById("right3")

let myCCCCounter = 0

myButtonLeft3.addEventListener("click", function (e) {

	setTimeout(() => { 
			document.querySelector(".RecommendationsParent").prepend(...Array.from(document.querySelector(".RecommendationsParent").children).slice(4));
					document.querySelector(".RecommendationsParent").style.transition = '0s'
					myCCCCounter -= 393
					document.querySelector(".RecommendationsParent").style.setProperty('transform',`translateX(${myCCCCounter}px)`) 
	} ,20)

	setTimeout(() => {
		document.querySelector(".RecommendationsParent").style.transition = '1s'
	},40)

	setTimeout(() => {
		myCCCCounter += 393
					document.querySelector(".RecommendationsParent").style.setProperty('transform',`translateX(${myCCCCounter}px)`) 
	} ,60)
	
	setTimeout(() => {
		myCCCCounter = 0
					document.querySelector(".RecommendationsParent").style.setProperty('transform',`translateX(${myCCCCounter}px)`) 
	} ,200)
	
	

})

myButtonRight3.addEventListener("click", function (e) {

		myCCCCounter -= 393
	document.querySelector(".RecommendationsParent").style.setProperty('transform',`translateX(${myCCCCounter}px)`) 
	setTimeout(() => {
		document.querySelector(".RecommendationsParent").style.transition = '0s'
	
	} ,1020)

	setTimeout(() => {

			document.querySelector(".RecommendationsParent").append(...Array.from(document.querySelector(".RecommendationsParent").children).slice(0,1));
	} ,1030)
	setTimeout(() => {
		myCCCCounter = 0
		document.querySelector(".RecommendationsParent").style.setProperty('transform',`translateX(${myCCCCounter}px)`) 

	},1035)

	setTimeout(() => {
		document.querySelector(".RecommendationsParent").style.transition = '1s'
	},1080)
	
	

})


