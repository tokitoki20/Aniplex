let myOptions = document.querySelector(".OptionTop");


document.addEventListener("click", (e) => {
	if (e.target.parentElement === myOptions){
		let myOpt = Array.from(myOptions.children)
			myOpt.forEach((el) => {
				el.classList.remove("clic")
			})
			e.target.classList.add("clic")
	}
})


fromTopToBottom()

let myPagesTotal;
let oa = 0
async function getData(url= "https://api.jikan.moe/v4/top/anime") {
	try {
		let myFetch  = await fetch(url);
		let myData = await myFetch.json()
		let myFinalData = myData.data
		console.log(myData)
		myPagesTotal = myData.pagination.has_next_page
		console.log(myFinalData)
		myFinalData.forEach((el, i ) => {
				createAnime(el)
				setTimeout(() => {
					el.genres.forEach((el) => {
							let myP = document.createElement("p")
				
							myP.append(el.name)
							document.querySelectorAll(".genre")[oa].append(myP)	
					})

				oa += 1
				}, 1000)
		})

	}catch(reason) {
		console.log(reason)
	}
}


async function getDataSmall(url= "https://api.jikan.moe/v4/top/anime") {
		let oa = 0
	try {
		let myFetch  = await fetch(url);
		let myData = await myFetch.json()
		let myFinalData = myData.data
		console.log(myData)
		myPagesTotal = myData.pagination.has_next_page
		
		myFinalData.forEach((el, i ) => {
				createAnimeSmall(el)
				oa += 1
		})

	}catch(reason) {
		console.log(reason)
	}
}


getData()


let mycc = 0
let myarray = []
for (let i=0; i< 2000; i++){
	mycc += 1000
	myarray.push(mycc)
}

let scrolledPastThreshold = false;
const scrollThreshold = (document.body.scrollHeight - window.innerHeight) * 0.8;
let scrollNumber = 2
let pp = 0
let ppp = 1




let mySortType = document.querySelector(".sortType")
	mySortType.style.marginBottom = "16px"
let mySortTypes = Array.from(document.querySelector(".sortType").children)
let six = document.getElementById("six")
let four = document.getElementById("four")


document.addEventListener( "click" ,(e) => {
	if (e.target.parentElement === six || e.target.parentElement.parentElement === six  ){
				if (myAllAnime.classList.contains("clic")) {
					// sixFn()
					sortType(sixFn,myAllAnime, "https://api.jikan.moe/v4/top/anime")

				}else if (topAiring.classList.contains("clic")) {
					sortType(sixFn,topAiring, "https://api.jikan.moe/v4/top/anime?filter=airing")

	}else if (topTv.classList.contains("clic")) {
					sortType(sixFn,topTv, "https://api.jikan.moe/v4/top/anime?type=tv")

	}else if (topUpcoming.classList.contains("clic")) {
					sortType(sixFn,topUpcoming, "https://api.jikan.moe/v4/top/anime?filter=upcoming")

	}else if (topMovies.classList.contains("clic")) {
					sortType(sixFn,topMovies, "https://api.jikan.moe/v4/top/anime?type=movie")

	}else if (topSpecial.classList.contains("clic")) {
					sortType(sixFn,topSpecial, "https://api.jikan.moe/v4/top/anime?type=special")

	}else if (topONA.classList.contains("clic")) {
					sortType(sixFn,topONA, "https://api.jikan.moe/v4/top/anime?type=ona")

	}else if (topOVA.classList.contains("clic")) {
					sortType(sixFn,topOVA, "https://api.jikan.moe/v4/top/anime?type=ova")

	}else if (mostPopular.classList.contains("clic")) {
					sortType(sixFn,mostPopular, "https://api.jikan.moe/v4/top/anime?filter=bypopularity")

	}else if (mostFavorited.classList.contains("clic")) {
					sortType(sixFn,mostFavorited, "https://api.jikan.moe/v4/top/anime?filter=favorite")

	}
	}


	if (e.target.parentElement === four || e.target.parentElement.parentElement === four ){
				if (myAllAnime.classList.contains("clic")) {
					// sixFn()
					sortType(fourFn,myAllAnime, "https://api.jikan.moe/v4/top/anime")

				}else if (topAiring.classList.contains("clic")) {
					sortType(fourFn,topAiring, "https://api.jikan.moe/v4/top/anime?filter=airing")

	}else if (topTv.classList.contains("clic")) {
					sortType(fourFn,topTv, "https://api.jikan.moe/v4/top/anime?type=tv")

	}else if (topUpcoming.classList.contains("clic")) {
					sortType(fourFn,topUpcoming, "https://api.jikan.moe/v4/top/anime?filter=upcoming")

	}else if (topMovies.classList.contains("clic")) {
					sortType(fourFn,topMovies, "https://api.jikan.moe/v4/top/anime?type=movie")

	}else if (topSpecial.classList.contains("clic")) {
					sortType(fourFn,topSpecial, "https://api.jikan.moe/v4/top/anime?type=special")

	}else if (topONA.classList.contains("clic")) {
					sortType(fourFn,topONA, "https://api.jikan.moe/v4/top/anime?type=ona")

	}else if (topOVA.classList.contains("clic")) {
					sortType(fourFn,topOVA, "https://api.jikan.moe/v4/top/anime?type=ova")

	}else if (mostPopular.classList.contains("clic")) {
					sortType(fourFn,mostPopular, "https://api.jikan.moe/v4/top/anime?filter=bypopularity")

	}else if (mostFavorited.classList.contains("clic")) {
					sortType(fourFn,mostFavorited, "https://api.jikan.moe/v4/top/anime?filter=favorite")

	}
				}
			// fourFn()
	
	

})

							fromTopToBottom()


function scrolling() {
	let currentScroll = window.scrollY || window.pageYOffset;
  	if (six.children[0].classList.contains("clicc")) {
  			if (currentScroll >= (document.body.scrollHeight - window.innerHeight) * 0.8 && !scrolledPastThreshold) {
    			if (myAllAnime.classList.contains("clic")){
    				
    				dropMore(getDataSmall)

    			}else if (topAiring.classList.contains("clic")) {

    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?filter=airing&&`)
    			}else if (topMovies.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?type=movie&&`)
    			}else if (topTv.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?type=tv&&`)
    			}else if (topONA.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?type=ona&&`)
    			}else if (topOVA.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?type=ova&&`)
    			}else if (topSpecial.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?type=special&&`)
    			}else if (topUpcoming.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?filter=upcoming&&`)
    			}else if (mostPopular.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?filter=bypopularity&&`)
    			}else if (mostFavorited.classList.contains("clic")) {
    				
    				dropMore(getDataSmall,`https://api.jikan.moe/v4/top/anime?filter=faovite&&`)
    			}
    		console.log("page is above 80%")
    		scrolledPastThreshold = true;


  }
	 
  

  	}else if (four.children[0].classList.contains("clicc")) {
  			if (currentScroll >= (document.body.scrollHeight - window.innerHeight) * 0.8 && !scrolledPastThreshold) {
    				console.log("page is above 80%")
    				if (myAllAnime.classList.contains("clic")){
    				
    				dropMore(getData)

    			}else if (topAiring.classList.contains("clic")) {

    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?filter=airing&&`)
    			}else if (topMovies.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?type=movie&&`)
    			}else if (topTv.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?type=tv&&`)
    			}else if (topONA.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?type=ona&&`)
    			}else if (topOVA.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?type=ova&&`)
    			}else if (topSpecial.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?type=special&&`)
    			}else if (topUpcoming.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?filter=upcoming&&`)
    			}else if (mostPopular.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?filter=bypopularity&&`)
    			}else if (mostFavorited.classList.contains("clic")) {
    				
    				dropMore(getData,`https://api.jikan.moe/v4/top/anime?filter=faovite&&`)
    			}
    		scrolledPastThreshold = true;
    		// dropMore(getData,`https://api.jikan.moe/v4/top/anime?filter=airing&&`)
    				    		
    				
    				// scrolledPastThreshold = false;
  				// if (topAiring.classList.contains("clic")) {

	  			// 	}

  }
	 

  
		
  	}
  if (currentScroll <= (document.body.scrollHeight - window.innerHeight) * 0.8 && scrolledPastThreshold) {
    // Page is approximately 70% scrolled
    		scrolledPastThreshold = false;
    		console.log("Page is  under 70% scrolled.");
    
  }
}

window.addEventListener("scroll",scrolling)

				setTimeout(() => {
						fromTopToBottom()
				},1100) 







let myAllAnime = document.getElementById("all")
let topAiring = document.getElementById("topAiring")
let topUpcoming = document.getElementById("topUpcoming")
let topTv = document.getElementById("topTV")
let topMovies = document.getElementById("topMovies")
let topOVA = document.getElementById("topOVA")
let topONA = document.getElementById("topONA")
let topSpecial = document.getElementById("topSpecial")
let mostPopular = document.getElementById("popular")
let mostFavorited = document.getElementById("favorited")


function whatWillHappen(url, typeofanime ) {

		document.querySelector(".resultTop").innerHTML = ""
		if ( typeofanime.classList.contains("clic") && six.children[0].classList.contains("clicc") ){
				sixFn(url)
	}

			if (typeofanime.classList.contains("clic") && four.children[0].classList.contains("clicc")){
					fourFn(url)
			}

}





		 
function animebutton(type,sort , typeofFunction , url) {
		document.querySelector(".resultTop").innerHTML = ""
				if ( type.classList.contains("clic") && sort.children[0].classList.contains("clicc") ){
				typeofFunction(url)
	}
}


function sortType(sort , type, url) {
		document.querySelector(".resultTop").innerHTML = ""
				if ( type.classList.contains("clic")){
				sort(url)
	}
}


// function scrolling(type,sort,url,typeofFunction) {
// 			if ( type.classList.contains("clic") && sort.children[0].classList.contains("clicc") ){
// 				typeofFunction(url)
// 	}
// }








document.addEventListener("click", (e) => {
		if (e.target === myAllAnime) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(myAllAnime, six , sixFn , "https://api.jikan.moe/v4/top/anime")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(myAllAnime, four , fourFn , "https://api.jikan.moe/v4/top/anime")
				}
		}else if (e.target === topAiring) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topAiring, six , sixFn , "https://api.jikan.moe/v4/top/anime?filter=airing")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topAiring, four , fourFn , "https://api.jikan.moe/v4/top/anime?filter=airing")
				}

		}else if (e.target === topUpcoming) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topUpcoming, six , sixFn , "https://api.jikan.moe/v4/top/anime?filter=upcoming")
				}else if (four.children[0].classList.contains("clicc")){
				animebutton(topUpcoming, four , fourFn , "https://api.jikan.moe/v4/top/anime?filter=upcoming")
				}
		}else if (e.target === topTv) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topTv, six , sixFn , "https://api.jikan.moe/v4/top/anime?type=tv")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topTv, four , fourFn , "https://api.jikan.moe/v4/top/anime?type=tv")
				}
			
		}else if (e.target === topMovies) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topMovies, six , sixFn , "https://api.jikan.moe/v4/top/anime?type=movie")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topMovies, four , fourFn , "https://api.jikan.moe/v4/top/anime?type=movie")
				}
			
		}else if (e.target === topOVA) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topOVA, six , sixFn , "https://api.jikan.moe/v4/top/anime?type=ova")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topOVA, four , fourFn , "https://api.jikan.moe/v4/top/anime?type=ova")
				}
			
		}else if (e.target === topONA) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topONA, six , sixFn , "https://api.jikan.moe/v4/top/anime?type=ona")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topONA, four , fourFn , "https://api.jikan.moe/v4/top/anime?type=ona")
				}
			
		}else if (e.target === topSpecial) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(topSpecial, six , sixFn , "https://api.jikan.moe/v4/top/anime?type=special")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(topSpecial, four , fourFn , "https://api.jikan.moe/v4/top/anime?type=special")
				}
			
		}else if (e.target === mostPopular) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(mostPopular, six , sixFn , "https://api.jikan.moe/v4/top/anime?filter=bypopularity")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(mostPopular, four , fourFn , "https://api.jikan.moe/v4/top/anime?filter=bypopularity")
				}
			
		}else if (e.target === mostFavorited) {
				if (six.children[0].classList.contains("clicc")) {
				animebutton(mostFavorited, six , sixFn , "https://api.jikan.moe/v4/top/anime?filter=favorite")
				}else if (four.children[0].classList.contains("clicc")){

				animebutton(mostFavorited, four , fourFn , "https://api.jikan.moe/v4/top/anime?filter=favorite")
				}
			
		}

})


























function  fourFn(url) {
	oa = 0
	document.querySelector(".resultTop").innerHTML = ""
				getData(url)				
				setInterval(() => {
							
							fromTopToBottom()

						}, 1000)

				mySortTypes.forEach((el) => {
			el.children[0].classList.remove("clicc")
		})
		four.children[0].classList.add("clicc")
}

function  sixFn(url) {
		oa = 0
		document.querySelector(".resultTop").innerHTML = ""
				getDataSmall(url)	
				
				setInterval(() => {
							
							fromTopToBottom2()

						}, 1000)
				mySortTypes.forEach((el) => {

					el.children[0].classList.remove("clicc")
		
				})
		six.children[0].classList.add("clicc")
}



function createAnime(el) {
	const content = el.type === "Movie" ? `<p>${el.aired.prop.from.year}</p> <p>${el.status}</p>` : "OVA" ? `<p>${el.aired.prop.from.year}</p> <p>${el.status}</p>` : "ONA" ? `<p>${el.aired.prop.from.year}</p> <p>${el.status}</p>` :
  `<p>${el.season} ${el.year}</p>
   <p>${el.status}</p>`;

		let myAnime = `<a class="animeTop" href="animeInfo.html#${el.mal_id}">
	<div class="newTop">

		<div><img src="../logos/uno.png"></div>
		<div class="img-title-genre">
		<img src="${el.images.jpg.large_image_url}" />
			<div> 
				<h4>${el.title}</h4>
				<div class="genre">
				</div>
				
			</div>
		</div>

	</div>
	<div class="newBottom">
		<div>
			<img src="../logos/malLogo.png">
			<p>${el.score}</p>
		</div>
		<div>

			<p>${el.type}</p>
			<p>${el.episodes}</p>
		</div>
		<div>
			${content}
		</div>
	</div>
</a>`

				document.querySelector(".resultTop").innerHTML += myAnime
}

function createAnimeSmall(el) {
		let myAnime = `<a class="animeTopSmall" href="animeInfo.html#${el.mal_id}">
	<div class="newTop">

		<div><img src="../logos/uno.png"></div>
		<div class="img-title">
				<img src="${el.images.jpg.large_image_url}" />
				<h4>${el.title}</h4>
		</div>

	</div>

	
</a>`

				document.querySelector(".resultTop").innerHTML += myAnime
}

function fromTopToBottom() {
	let myTop = document.querySelectorAll(".animeTop");
	console.log(myTop)
			let j = 4
		for (let i = 0; i<myTop.length; i++){
				if (i === 0) {
					console.log("yes raha 0")
					myTop[0].children[0].children[0].children[0].src = "../logos/uno.png"
				}else if (i === 1) {
					console.log("yes raha 1")
					console.log(i)
					myTop[1].children[0].children[0].children[0].src = "../logos/dos.png"
				}if (i === 2) {
					console.log("yes raha 2")
					console.log(i)
					myTop[2].children[0].children[0].children[0].src = "../logos/tres.png"
				}else if (i > 2) {
						myTop[i].children[0].children[0].innerHTML = `<p>${j} </p>`
						j++
				}
		}
}

function fromTopToBottom2() {
	let myTop = document.querySelectorAll(".animeTopSmall");
	
			let j = 4
		for (let i = 0; i<myTop.length; i++){
				if (i === 0) {
					console.log("yes raha 0")
					myTop[0].children[0].children[0].children[0].src = "../logos/uno.png"
				}else if (i === 1) {
					console.log("yes raha 1")
					console.log(i)
					myTop[1].children[0].children[0].children[0].src = "../logos/dos.png"
				}if (i === 2) {
					console.log("yes raha 2")
					console.log(i)
					myTop[2].children[0].children[0].children[0].src = "../logos/tres.png"
				}else if (i > 2) {
						myTop[i].children[0].children[0].innerHTML = `<p>${j} </p>`
						j++
				}
		}
}


function dropMore(fn,site = "https://api.jikan.moe/v4/top/anime?") {
	console.log("Page is 70% scrolled.");
    		// scrolledPastThreshold = true;
			setTimeout(() => {
				console.log(myPagesTotal)
				if (myPagesTotal){
					
						setTimeout(() => {
						fn(`${site}page=${scrollNumber}`)

						}, myarray[pp])
						setInterval(() => {
							
							fromTopToBottom()

						}, myarray[ppp])

				}
			scrollNumber = scrollNumber + 1
			pp += 1
			},1000)
}
