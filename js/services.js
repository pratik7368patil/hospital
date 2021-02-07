const data = [
	{
		id: 1,
		image: "./img/card1.jpg",
		title: "Aortic Aneurysm/Dissection",
		content: "Interventional radiology has become an integral part of patient care services offered at many secondary...",
		link: "./src/gosomewhere1.html"
	},
	{
		id: 2,
		image: "./img/card2.jpg",
		title: "Interventional Neuroradiology",
		content: "No matter what kind of neurovascular challenge you face, we are prepared to support...",
		link: "./src/gosomewhere2.html"
	},
	{
		id: 3,
		image: "./img/card3.jpg",
		title: "Hepatobiliary",
		content: "Our Interventional Radiology team of interventionalists have dedicated their professional lives to...",
		link: "./src/gosomewhere3.html"
	},
	{
		id: 4,
		image: "./img/card4.jpeg",
		title: "Women's Health: Why choose us?",
		content: "The emergence of interventional radiology procedures has provided significant benefit to the management of certain...",
		link: "./src/gosomewhere4.html"
	},
	{
		id: 5,
		image: "./img/card5.png",
		title: "Arteriovenous Malformations",
		content: "Children and adults with vascular malformations are best managed with a multidisciplinary team of specialists...",
		link: "./src/gosomewhere5.html"
	},
	{
		id: 6,
		image: "./img/card6.jpg",
		title: "Emergency care",
		content: "Interventional radiology has become an integral part of patient care services offered at many secondary and...",
		link: "./src/gosomewhere6.html"
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