
		let mySeasons = document.querySelectorAll(".season");
async function season() {
	try {
		let myFetch = await fetch("https://api.jikan.moe/v4/seasons");
		let myData = await myFetch.json();
		let myDataSeason = myData.data
		// console.log(myDataSeason)

		
		if (myDataSeason[0].seasons.length === 4){

			mySeasons[3].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1]
			mySeasons[3].children[1].innerHTML = myDataSeason[0].year
			mySeasons[3].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1])
			mySeasons[3].classList.add(myDataSeason[0].year)

			mySeasons[2].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2]
			mySeasons[2].children[1].innerHTML = myDataSeason[0].year
			mySeasons[2].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2])
			mySeasons[2].classList.add(myDataSeason[0].year)

			mySeasons[1].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3]
			mySeasons[1].children[1].innerHTML = myDataSeason[0].year
			mySeasons[1].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3])
			mySeasons[1].classList.add(myDataSeason[0].year)

			mySeasons[0].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 4]
			mySeasons[0].children[1].innerHTML = myDataSeason[0].year
			mySeasons[0].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 4])
			mySeasons[0].classList.add(myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 4] + myDataSeason[0].year)
		}
		if (myDataSeason[0].seasons.length === 3){
			

			mySeasons[3].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1]
			mySeasons[3].children[1].innerHTML = myDataSeason[0].year
			mySeasons[3].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1])
			mySeasons[3].classList.add(myDataSeason[0].year)

			mySeasons[2].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2]
			mySeasons[2].children[1].innerHTML = myDataSeason[0].year
			mySeasons[2].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2])
			mySeasons[2].classList.add(myDataSeason[0].year)



			mySeasons[1].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3]
			mySeasons[1].children[1].innerHTML = myDataSeason[0].year
			mySeasons[1].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3])
			mySeasons[1].classList.add(myDataSeason[0].year)


			mySeasons[0].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] 
			mySeasons[0].children[1].innerHTML = myDataSeason[1].year
			mySeasons[0].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] )
			mySeasons[0].classList.add(myDataSeason[1].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 3] + myDataSeason[0].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] + myDataSeason[1].year)

		}
		if (myDataSeason[0].seasons.length === 2){
			mySeasons[3].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1]
			mySeasons[3].children[1].innerHTML = myDataSeason[0].year
			mySeasons[3].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1])
			mySeasons[3].classList.add(myDataSeason[0].year)


			mySeasons[2].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2]
			mySeasons[2].children[1].innerHTML = myDataSeason[0].year
			mySeasons[2].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2])
			mySeasons[2].classList.add(myDataSeason[0].year)


			mySeasons[1].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1]
			mySeasons[1].children[1].innerHTML = myDataSeason[1].year
			mySeasons[1].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1])
			mySeasons[1].classList.add(myDataSeason[1].year)


			mySeasons[0].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2]
			mySeasons[0].children[1].innerHTML = myDataSeason[1].year
			mySeasons[0].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2] )
			mySeasons[0].classList.add(myDataSeason[1].year)



			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1] + myDataSeason[0].year)
			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 2] + myDataSeason[0].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] + myDataSeason[1].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2] + myDataSeason[1].year)

		}
		if (myDataSeason[0].seasons.length === 1){
			
			mySeasons[3].children[0].innerHTML = myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1]
			mySeasons[3].children[1].innerHTML = myDataSeason[0].year
			mySeasons[3].classList.add(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1] )
			mySeasons[3].classList.add(myDataSeason[0].year)

			mySeasons[2].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1]
			mySeasons[2].children[1].innerHTML = myDataSeason[1].year
			mySeasons[2].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] )
			mySeasons[2].classList.add(myDataSeason[1].year)

			mySeasons[1].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2]
			mySeasons[1].children[1].innerHTML = myDataSeason[1].year
			mySeasons[0].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2] )
			mySeasons[0].classList.add(myDataSeason[1].year)
			

			mySeasons[0].children[0].innerHTML = myDataSeason[1].seasons[myDataSeason[1].seasons.length - 3]
			mySeasons[0].children[1].innerHTML = myDataSeason[1].year
			mySeasons[0].classList.add(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 3])
			mySeasons[0].classList.add(myDataSeason[1].year)

			// console.log(myDataSeason[0].seasons[myDataSeason[0].seasons.length - 1] + myDataSeason[0].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 1] + myDataSeason[1].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 2] + myDataSeason[1].year)
			// console.log(myDataSeason[1].seasons[myDataSeason[1].seasons.length - 3] + myDataSeason[1].year)

		}
	}catch (reason) {
		console.log(reason)
	}
}

season()

let myPagesTotal;




let mycc = 0
let myarray = []
for (let i=0; i< 1000; i++){
	mycc += 800
	myarray.push(mycc)
}

let animeTvArray = []
let animeOvaArray = []
let animeOnaArray = []
let animeMovieArray = []
let animeSpecialArray = []

let i = 2
let j = 2

let myYearSeason = location.href.slice(52).split("-")
let mySeasonss = myYearSeason[0]
let myYear = myYearSeason[1]
console.log(mySeasonss)
console.log(myYear)


let myResult = document.querySelector(".resultSeason")


async function seasonNow(url, type) {
    try {
        const myFetch = await fetch(url);
        const myData = await myFetch.json();
        const myDataSeason = myData.data;
        console.log(myData);
        myPagesTotal = myData.pagination.last_visible_page;
        console.log(myPagesTotal);
        myDataSeason.forEach((el) => {
            if (el.type === "TV") {
                animeTvArray.push(el);
                createAnime(el);
            }
            if (el.type === "OVA") {
                animeOvaArray.push(el);
            }
            if (el.type === "ONA") {
                animeOnaArray.push(el);
            }
            if (el.type === "Movie") {
                animeMovieArray.push(el);
            }
            if (el.type === "Special") {
                animeSpecialArray.push(el);
            }
        });
    } catch (reason) {
        console.log(reason);
    }
}

function fetchSeasonData(url, type) {
    seasonNow(url, type);

    setTimeout(() => {
        if (myPagesTotal > 1) {
            for (let i = 2; i <= myPagesTotal; i++) {
                setTimeout(() => {
                    seasonNow(`${url}?page=${i}`, type);
                }, myarray[i]);
            }
        }
    }, 2000);
}

const locationHref = location.href;
if (locationHref === "http://localhost:3000/Anime/seasonalAnimeOther.html#Airing") {
    fetchSeasonData("https://api.jikan.moe/v4/seasons/now", "TV");
} else if (locationHref === "http://localhost:3000/Anime/seasonalAnimeOther.html#Upcoming") {
    fetchSeasonData("https://api.jikan.moe/v4/seasons/upcoming", "TV");
} else if (locationHref === "http://localhost:3000/Anime/seasonalAnimeOther.html") {
    fetchSeasonData("https://api.jikan.moe/v4/seasons/now?sort", "TV");
} else {
    const seasonUrl = `https://api.jikan.moe/v4/seasons/${myYearSeason[1]}/${myYearSeason[0]}`;
    fetchSeasonData(seasonUrl, "TV");
}



let sortArray = ["Members","Score","Start Date","Title"]
		let mySortDiv = document.createElement("div")
			mySortDiv.classList.add("mySortDiv")
			sortArray.forEach((el) => {
				let mySort = document.createElement("p")
					mySort.append(el)
					mySortDiv.append(mySort)
			})
	function sortAppend() {

		sort.append(mySortDiv)
	}
	function sortRemove() {
		mySortDiv.remove()
	}

let sort = document.getElementById("sort")
let myArchive = document.getElementById("archive");
	if ( location.href === `http://localhost:3000/Anime/seasonalAnimeOther.html#Upcoming` || location.href === `http://localhost:3000/Anime/seasonalAnimeOther.html#Airing` ){
	myArchive.innerHTML =  `Season Year <i class="fa-solid fa-caret-down"></i>`
	}else {

	myArchive.innerHTML =  `${myYearSeason[0]} ${myYearSeason[1]} <i class="fa-solid fa-caret-down"></i>`
	}
let myTypess = document.querySelector(".seasonType")
let myTypes = Array.from(document.querySelector(".seasonType").children) 
let mySortType = document.querySelector(".sortType")
let mySortTypes = Array.from(document.querySelector(".sortType").children)
let six = document.getElementById("six")
let four = document.getElementById("four")

let tv = document.getElementById("tv")
let ova = document.getElementById("ova")
let ona = document.getElementById("ona")
let movie = document.getElementById("movie")
let special = document.getElementById("special")

document.addEventListener("click",(e) => {

		if (e.target.classList.contains("myArchiveSeason")){
		myArchive.innerHTML = `${e.target.children[0].id} ${e.target.children[1].id} <i class="fa-solid fa-caret-down"></i>`
		window.open(`seasonalAnimeOther.html#${e.target.children[0].id}-${e.target.children[1].id}` , "_self")

	}else if (e.target.parentElement.classList.contains("myArchiveSeason")){
		myArchive.innerHTML = `${e.target.parentElement.children[0].id} ${e.target.parentElement.children[1].id} <i class="fa-solid fa-caret-down"></i>`
		window.open(`seasonalAnimeOther.html#${e.target.parentElement.children[0].id}-${e.target.parentElement.children[1].id}`, "_self")

	}
	if (e.target === myArchive || myArchive.contains(e.target)){
		myArchive.children[0].classList.toggle("down")
		archive()
	}
	if (e.target === sort || sort.contains(e.target)){
			sort.classList.toggle("dropped")
		if (sort.classList.contains("dropped")){
			sort.children[0].classList.toggle("down")
			sortAppend()

		}else {
			sortRemove()
		}
		}
	if (e.target.parentElement.classList.contains("mySortDiv")){
		sort.innerHTML = `${e.target.innerHTML} <i class="fa-solid fa-caret-down"></i>`
		console.log(e.target.innerHTML)

	}

		if (e.target.innerHTML === "Members"){
				if (myResult.classList.contains("ova")){
					members(animeOvaArray) 
					myResult.innerHTML = ""

				}
				if (myResult.classList.contains("tv")){
					myResult.innerHTML = ""
					members(animeTvArray) 
				}
				if (myResult.classList.contains("ona")){
					myResult.innerHTML = ""
					members(animeOnaArray) 
				}
				if (myResult.classList.contains("movie")){
					myResult.innerHTML = ""
					members(animeMovieArray) 
				}
				if (myResult.classList.contains("special")){
					myResult.innerHTML = ""
					members(animeSpecialArray) 
				}

		}
		
		
		if (e.target.innerHTML === "Title"){
				if (myResult.classList.contains("ova")){
					myResult.innerHTML = ""
					titles(animeOvaArray) 

				}
				if (myResult.classList.contains("tv")){
					myResult.innerHTML = ""
					titles(animeTvArray) 
				}
				if (myResult.classList.contains("ona")){
					myResult.innerHTML = ""
					titles(animeOnaArray) 
				}
				if (myResult.classList.contains("movie")){
					myResult.innerHTML = ""
					titles(animeMovieArray) 
				}
				if (myResult.classList.contains("special")){
					myResult.innerHTML = ""
					titles(animeSpecialArray) 
				}

		}
		
		if (e.target.innerHTML === "Score"){
			console.log("yessss")
					myResult.innerHTML = ""
				if (myResult.classList.contains("ova")){
					score(animeOvaArray) 

				}
				if (myResult.classList.contains("tv")){
					console.log("yes2")
					myResult.innerHTML = ""
					score(animeTvArray) 
				}
				if (myResult.classList.contains("ona")){
					myResult.innerHTML = ""
					score(animeOnaArray) 
				}
				if (myResult.classList.contains("movie")){
					myResult.innerHTML = ""
					score(animeMovieArray) 
				}
				if (myResult.classList.contains("special")){
					myResult.innerHTML = ""
					score(animeSpecialArray) 
				}

		}
		
if (e.target.innerHTML === "Start Date"){
				if (myResult.classList.contains("ova")){
					myResult.innerHTML = ""
					startDate(animeOvaArray) 

				}
				if (myResult.classList.contains("tv")){
					myResult.innerHTML = ""
					startDate(animeTvArray) 
				}
				if (myResult.classList.contains("ona")){
					myResult.innerHTML = ""
					startDate(animeOnaArray) 
				}
				if (myResult.classList.contains("movie")){
					myResult.innerHTML = ""
					startDate(animeMovieArray) 
				}
				if (myResult.classList.contains("special")){
					myResult.innerHTML = ""
					startDate(animeSpecialArray) 
				}

		}
		



	if (myTypess.contains(e.target)){
		myTypes.forEach((el) => {
			el.classList.remove("clic")
		})
		e.target.classList.add("clic")
	}
	if (e.target.parentElement === six  ){
		mySortTypes.forEach((el) => {

			el.children[0].classList.remove("clicc")
		})
		e.target.classList.add("clicc")
	}
	if (e.target.parentElement.parentElement === six ){
		mySortTypes.forEach((el) => {

			el.children[0].classList.remove("clicc")
		})
		e.target.parentElement.classList.add("clicc")
	}

	if (e.target.parentElement === four ){
		mySortTypes.forEach((el) => {
			el.children[0].classList.remove("clicc")
		})
		e.target.classList.add("clicc")
	}
	if (e.target.parentElement.parentElement === four ){
		mySortTypes.forEach((el) => {
			el.children[0].classList.remove("clicc")
		})
		e.target.parentElement.classList.add("clicc")
	}


	if (e.target  === tv) {
		myResult.innerHTML = ""
		myResult.classList.add("tv")
		animeTvArray.forEach((el) => {
					myResult.classList.remove("ona")
		myResult.classList.remove("ova")
		myResult.classList.remove("movie")
		myResult.classList.remove("special")
		myResult.classList.add("tv")
						// createAnime(el)

		})
			if (document.getElementById("sort").childNodes[0].textContent.trim() === "Start Date") {
		myResult.innerHTML = ""
			startDate(animeTvArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Members") {
		myResult.innerHTML = ""
			members(animeTvArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Title") {
		myResult.innerHTML = ""
			titles(animeTvArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Score") {
		myResult.innerHTML = ""
			score(animeTvArray)
		}
	}

	if (e.target  === ova) {
		myResult.innerHTML = ""
		myResult.classList.add("ova")
				myResult.classList.remove("tv")
		myResult.classList.remove("ona")
		myResult.classList.remove("movie")
		myResult.classList.remove("special")
		// myResult.classList.add("ona")
		// animeOvaArray.forEach((el) => {
		// 	createAnime(el)
				

		// })
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Start Date") {
		myResult.innerHTML = ""
			startDate(animeOvaArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Members") {
		myResult.innerHTML = ""
			members(animeOvaArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Title") {
		myResult.innerHTML = ""
			titles(animeOvaArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Score") {
		myResult.innerHTML = ""
			score(animeOvaArray)
		}
		

	}

if (e.target  === ona) {
		myResult.classList.remove("tv")
		myResult.classList.remove("ova")
		myResult.classList.remove("movie")
		myResult.classList.remove("special")
		myResult.classList.add("ona")
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Start Date") {
		myResult.innerHTML = ""
			startDate(animeOnaArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Members") {
		myResult.innerHTML = ""
			members(animeOnaArray)
		}

		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Title") {
		myResult.innerHTML = ""
			titles(animeOnaArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Score") {
		myResult.innerHTML = ""
			score(animeOnaArray)
		}
		
		// animeOnaArray.forEach((el) => {
		// 				createAnime(el)
	

		// })

	}
function members(typeofArray) {
		myResult.innerHTML = ""
		document.querySelector(".resultSeason").innerHTML = ""
		typeofArray.sort((a,b) => b.members - a.members )
		typeofArray.forEach((el) => {
				createAnime(el)

		})

}

function titles(typeofArray) {
		myResult.innerHTML = ""
		document.querySelector(".resultSeason").innerHTML = ""
		typeofArray.sort((a,b) => {
						return a.title.localeCompare(b.title)
					})
		typeofArray.forEach((el) => {
			createAnime(el)

		})

}



function score(typeofArray) {
		document.querySelector(".resultSeason").innerHTML = ""
		myResult.innerHTML = ""
		typeofArray.sort((a,b) => b.score - a.score)
		typeofArray.forEach((el) => {
			createAnime(el)

		})

}

function startDate(typeofArray) {
		document.querySelector(".resultSeason").innerHTML = ""
		myResult.innerHTML = ""
		typeofArray.sort((a, b) => {
  							const dateA = new Date(a.aired.from);
  							const dateB = new Date(b.aired.from);
  							return dateA - dateB;
					})
		typeofArray.forEach((el) => {
			createAnime(el)
				

		})

}

if (e.target  === movie) {
		myResult.innerHTML = ""
				myResult.classList.remove("tv")
		myResult.classList.remove("ova")
		myResult.classList.remove("ona")
		myResult.classList.remove("special")
		myResult.classList.add("movie")
		// animeMovieArray.forEach((el) => {
		// 				createAnime(el)

				

		// })
			if (document.getElementById("sort").childNodes[0].textContent.trim() === "Start Date") {
		myResult.innerHTML = ""
			startDate(animeMovieArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Members") {
		myResult.innerHTML = ""
			members(animeMovieArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Title") {
		myResult.innerHTML = ""
			titles(animeMovieArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Score") {
		myResult.innerHTML = ""
			score(animeMovieArray)
		}

	}

if (e.target  === special) {
		myResult.innerHTML = ""
				myResult.classList.remove("ona")
		myResult.classList.remove("ova")
		myResult.classList.remove("movie")
		myResult.classList.remove("special")
		myResult.classList.add("special")
		// animeSpecialArray.forEach((el) => {
		// 				createAnime(el)

				

		// })
					if (document.getElementById("sort").childNodes[0].textContent.trim() === "Start Date") {
		myResult.innerHTML = ""
			startDate(animeSpecialArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Members") {
		myResult.innerHTML = ""
			members(animeSpecialArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Title") {
		myResult.innerHTML = ""
			titles(animeSpecialArray)
		}
		if (document.getElementById("sort").childNodes[0].textContent.trim() === "Score") {
		myResult.innerHTML = ""
			score(animeSpecialArray)
		}

	}

})

async function archive() {
	try {
		let myFetch = await fetch("https://api.jikan.moe/v4/seasons");
		let myData = await myFetch.json();
		let myDataSeason = myData.data
		// console.log(myDataSeason)
			let  myArchiveDiv = document.createElement("div")
				 myArchiveDiv.classList.add("myArchiveDiv")
			

		myDataSeason.forEach((el) => {
			let year = el.year
			el.seasons.forEach((el) => {
				let myArchiveSeason = document.createElement("a")
					myArchiveSeason.classList.add("myArchiveSeason")
				let mySeason = document.createElement("p")
					mySeason.append(el)
					mySeason.id = el
				let myYear = document.createElement("p")
					myYear.append(year)
					myYear.id = year
					myArchiveSeason.append(mySeason)
					myArchiveSeason.append(myYear)

					myArchiveSeason.href = `http://localhost:3000/Anime/seasonalAnimeOther.html#${el}-${year}`
					myArchiveDiv.append(myArchiveSeason)
					myArchive.append(myArchiveDiv)
				// console.log(`${el} ${year}`)

			})
		})

	}catch (reason) {
		console.log(reason)
	}
}



function createAnime(el) {
	let myDiv = document.createElement("a")
						myDiv.href = `../Anime/animeInfo.html#${el.mal_id}`
						myDiv.classList.add("AnimeSeason")
					let myImg = document.createElement("img")
						myImg.src = el.images.jpg.large_image_url
					let myTitle = document.createElement("p")
						myTitle.append(el.title)
					myDiv.append(myImg)
					myDiv.append(myTitle)
					myResult.append(myDiv)
			
}


// document.addEventListener("click", (e) => {
// 	if (e.target.parentElement === mySeasons[0]) {
// 		window.open(`seasonalAnimeOther.html#${mySeasons[0].classList[1]}-${mySeasons[0].classList[2]}`,"_self")

// 	}
// 	if (e.target.parentElement === mySeasons[1]) {
// 		window.open(`seasonalAnimeOther.html#${mySeasons[1].classList[1]}-${mySeasons[1].classList[2]}`,"_self")

// 	}
// 	if (e.target.parentElement === mySeasons[2]) {
// 		window.open(`seasonalAnimeOther.html#${mySeasons[2].classList[1]}-${mySeasons[2].classList[2]}`,"_self")

// 	}
// 	if (e.target.parentElement === mySeasons[3]) {
// 		window.open(`seasonalAnimeOther.html#${mySeasons[3].classList[1]}-${mySeasons[3].classList[2]}`,"_self")

// 	}

// })

