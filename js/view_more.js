const data = [
	{
		id: 1,
		question: "What are varicose veins?",
		answer: "Varicose veins are abnormally enlarged veins that appear most often on the legs. They are typically blue, purple, or skin-colored; and they appear as dilated, twisting and bulging vessels that may be raised above the surface of the skin.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 2,
		question: "What are spider veins?",
		answer: "Spider veins (also called telangiectasias) are clusters of tiny blood vessels that develop close to the surface of the skin. They are often red, blue, or purple; and they have the appearance of a spiderweb. They are commonly found on the face and legs.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 3,
		question: "What causes varicose & Spider veins?",
		answer: "Spider veins and varicose veins are caused by structural abnormalities of blood vessels. Veins carry blood back to the heart from other parts of the body. They utilize a series of one-way valves to avoid backflow of blood. For a variety of reasons, these valves can become defective, allowing the backflow of blood within veins. The subsequent pooling of blood and pressure increase within the vein, and weakens the blood vessel wall. Spider veins and varicose veins then develop from the engorgement and dilation of the affected blood vessels.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 4,
		question: "Who gets Varicose & Spider veins?",
		answer: "Spider veins and varicose veins are very common in adults, though women tend to develop them more frequently than men. There are a variety of different risk factors that increase the chances of a person getting spider veins and varicose veins. Risk factors include advanced age, prolonged sitting/standing, obesity, pregnancy, hormone therapy (HT), birth control pills, injury, prior vein surgery, a history of blood clots, and a family history. ",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 5,
		question: "What are the symptoms of Varicose veins?",
		answer: "Varicose veins often cause no symptoms or signs other than their undesirable cosmetic appearance. However, certain individuals may experience problematic symptoms from varicose veins. Symptoms may include: Swelling, throbbing, aching, burning, itching, heaviness, tingling, or cramping of the legs. These symptoms often worsen after prolonged sitting or standing. Individuals can also develop a brown discoloration of the skin and skin ulcers. ",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 6,
		question: "What is the prognosis of Varicose veins if left Untreated?",
		answer: "Though spider veins and varicose veins rarely cause serious complications, some individuals may develop skin ulcers. These open wounds usually appear on the lower leg, and they may sometimes lead to soft tissue infections. Some individuals with varicose veins can also develop blood clots within the veins (superficial thrombophlebitis). Localized bleeding from varicose veins also can occur.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 7,
		question: "How is Varicose veins Diagnosed?",
		answer: "While primary evaluation for varicose vein is done by confirming the symptoms and physical inspection of the legs by medical professional. However clinically every patient is required to have a full and detailed duplex ultrasound scan carried out by specialist doctor i.e. an interventional radiologist. It is necessary with ultrasound for varicose veins that the medical professional examines each vein in the leg including smaller perforator veins. It has been found that a non-specialist medical professional may overlook the minor veins which may be the real cause of varicose vein. In certain specific conditions wherein varicose veins are thought to be originating from Pelvis, more specific tests are required.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 8,
		question: "What are the treatment options of varicose veins and Which doctor to see?",
		answer: "You should consult an expert as he only can assess your problem and advise if you need to avail dedicated treatment. If you have symptoms as described above, you may meet any of the following set of doctors A) A phlebologist who is a vein specialist B) A vascular medicine doctor, who focuses on the system of blood flow C) An interventional radiologist, who specializes in using imaging tools to see inside the body and do treatments with little or no cutting. It is important to see the right expert because it is equally important to know when to start the treatment. In early disease, depending on the clinical examination and a good doppler study, the expert will usually recommend appropriate stockings for prevention. It is also necessary to know the right time to proceed to intervening into definite treatment to prevent complications. The technique used by Interventional radiologists are some of the most advanced and have proven to have given best results to the patient. Interventional radiologists are specially trained to perform all treatment procedures related to varicose veins. Most treatments performed by them provide immediate relief to the patient and enable resuming normal life with minimal rest period. As per guidelines by National Institute for Health & Care Excellence, United Kingdom interventional procedures by an interventional radiologist should be attempted first before reviewing any other treatment option. You can connect with us for getting an advise for your problem. We will be happy to provide you guidance for the problem.",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 9,
		question: "What is the post Procedural Care needs to be taken?",
		answer: "Although spider veins and varicose veins may not always be entirely preventable, there are various measures you can take to reduce your chances of developing them. Prevention tips include: exercising regularly, maintain a healthy weight, avoid prolonged sitting or standing, avoid crossing your legs while seated, elevate your legs when resting, and",
		imagePath: "../img/card1.jpg"
	},
	{
		id: 10,
		question: "What is the approximate stay in Hospital and when can I Resume to work?",
		answer: "We have very fast and competent working team which provide you comfortable atmosphere and ease your nerves. It is usually a day care procedure. Resume to work? You can resume your work very next day of the procedure preferably in 2- 3 days.",
		imagePath: "../img/card1.jpg"
	}
]

const generateQuestion = (queObject) => {
	let block = document.createElement('li');
	let imgMain = document.createElement('div');
	let img = document.createElement('img');
	img.src = queObject.imagePath;
	img.setAttribute('class', 'card-img-top img-fluid image-center mg');

	imgMain.appendChild(img);

	let que = document.createElement('h3');
	que.innerText = queObject.id + ". " + queObject.question;
	let para = document.createElement('p');
	para.innerText = queObject.answer;
	para.setAttribute('class', 'main-text text-muted');
	block.appendChild(que);
	block.appendChild(imgMain);
	block.appendChild(para);

	return block;
}


// to generate inner list we can add list in object in data and check for each if it exists then 
// create that list and add to dom accordingly

const setAllQuestions = (data) => {
	let mainCollapse = document.querySelector('#collapse_1'); // get element form dom where we need to append our questions
	for(let i=0; i < data.length; i++) {
		mainCollapse.appendChild(generateQuestion(data[i]));
	}
}

setAllQuestions(data);