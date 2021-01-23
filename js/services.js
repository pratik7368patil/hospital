const data = [
	{
		id: 1,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 2,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 3,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 4,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 5,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 6,
		image: "./img/card1.jpg",
		title: "Card Title",
		content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "./src/gosomewhere1.html"
	},
]

function generateCard(obj) {
	let container = document.createElement('div');
	container.setAttribute("class", "col-md-4 pb-2");

	let card = document.createElement('div');
	card.setAttribute("class", "card new-card");

	let image = document.createElement('img');
	image.src = obj.image;
	image.alt = "image" + obj.id;
	image.setAttribute("class", "customimg");
	card.appendChild(image);

	let cardBody = document.createElement('div');
	cardBody.setAttribute("class", "card-body");

	let title = document.createElement('h5');
	title.innerText = obj.title;
	title.setAttribute("class", "card-title");
	cardBody.appendChild(title);

	let para = document.createElement('p');
	para.innerText = obj.content;
	para.setAttribute("class", "card-text text-muted");
	cardBody.appendChild(para);

	let link = document.createElement('a');
	link.href = obj.link;
	link.innerText = "More Info";
	cardBody.appendChild(link);

	card.appendChild(cardBody);
	container.appendChild(card);

	return container;
}

(function() {
	const servicesMain = document.getElementById('services-content');

	let noRow = 2;
	let idx = 0;

	while(noRow > 0) {
		let createRow = document.createElement('div');
		createRow.setAttribute("class", "row mt-4");

		for(let i = idx; i < data.length; i++) {
			if(i != 0 && i != 3 && i%3 == 0) {
				break;
			}
			createRow.appendChild(generateCard(data[i]));
			idx++;
		}
		idx++;
		servicesMain.appendChild(createRow);
		noRow--;
	}
})();