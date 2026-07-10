
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		//imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgSrc: './images/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
	    //imgSrc:	'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgSrc:	'./images/MagnusChase.jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		//imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
        imgSrc: './images/Dawn.jpg',
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

let bookContainer = document.querySelector('#book');


function listParts() {

    articles.forEach((article) => {
        let  html = bookTemplate(article);
        bookContainer.innerHTML += html
});
}

 function bookTemplate(article) {
     return `
        <div id="leftSide">    
            <p><strong><em>${article.date}</em></strong></p>
            <p><strong>${article.ages}</strong></p>
            <p><strong>${article.genre}</strong></p>
            <p><strong></strong> <span aria-label="4 out of 5 stars" role="img">${article.stars}</span></p>
        </div> 
        <div class="vertical-divider-line"></div>
        <div id="rightSide">
            <h2>${article.title}</h2>
            <img class = 'coverImg' src="${article.imgSrc}" alt="${article.imgAlt}">
            <p class ='desc'>${article.description}</p>              
        </div>   
     `;
 }

function init() {
    book.innerHTML = '';
    listParts();
}

init();