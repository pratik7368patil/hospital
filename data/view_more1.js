const data = [
	{
		heading: "Venous Leg Ulcer Varicose Veins and Spider Vein: ",
	},
	{
		id: 1,
		question: "What are varicose veins?",
		answer: "Varicose veins are abnormally enlarged veins that appear most often on the legs. They are typically blue, purple, or skin-colored; and they appear as dilated, twisting and bulging vessels that may be raised above the surface of the skin.",
		imagePath: "../img/lable11.jpg"
	},
	{
		id: 2,
		question: "What are spider veins?",
		answer: "Spider veins (also called telangiectasias) are clusters of tiny blood vessels that develop close to the surface of the skin. They are often red, blue, or purple; and they have the appearance of a spiderweb. They are commonly found on the face and legs.",
		imagePath: "../img/lable12.jpg"
	},
	{
		id: 3,
		question: "What causes varicose & Spider veins?",
		answer: "Spider veins and varicose veins are caused by structural abnormalities of blood vessels. Veins carry blood back to the heart from other parts of the body. They utilize a series of one-way valves to avoid backflow of blood. For a variety of reasons, these valves can become defective, allowing the backflow of blood within veins. The subsequent pooling of blood and pressure increase within the vein, and weakens the blood vessel wall. Spider veins and varicose veins then develop from the engorgement and dilation of the affected blood vessels.",
		imagePath: "../img/lable13.gif"
	},
	{
		id: 4,
		question: "Who gets Varicose & Spider veins?",
		answer: "Spider veins and varicose veins are very common in adults, though women tend to develop them more frequently than men. There are a variety of different risk factors that increase the chances of a person getting spider veins and varicose veins. Risk factors include advanced age, prolonged sitting/standing, obesity, pregnancy, hormone therapy (HT), birth control pills, injury, prior vein surgery, a history of blood clots, and a family history. ",
		imagePath: "../img/lable14.jpg"
	},
	{
		id: 5,
		question: "What are the symptoms of Varicose veins?",
		answer: "Varicose veins often cause no symptoms or signs other than their undesirable cosmetic appearance. However, certain individuals may experience problematic symptoms from varicose veins. Symptoms may include: Swelling, throbbing, aching, burning, itching, heaviness, tingling, or cramping of the legs. These symptoms often worsen after prolonged sitting or standing. Individuals can also develop a brown discoloration of the skin and skin ulcers. ",
		imagePath: "../img/lable15.jpg"
	},
	{
		id: 6,
		question: "What is the prognosis of Varicose veins if left Untreated?",
		answer: "Though spider veins and varicose veins rarely cause serious complications, some individuals may develop skin ulcers. These open wounds usually appear on the lower leg, and they may sometimes lead to soft tissue infections. Some individuals with varicose veins can also develop blood clots within the veins (superficial thrombophlebitis). Localized bleeding from varicose veins also can occur.",
		imagePath: "../img/lable16.jpg"
	},
	{
		id: 7,
		question: "How is Varicose veins Diagnosed?",
		answer: "While primary evaluation for varicose vein is done by confirming the symptoms and physical inspection of the legs by medical professional. However clinically every patient is required to have a full and detailed duplex ultrasound scan carried out by specialist doctor i.e. an interventional radiologist. It is necessary with ultrasound for varicose veins that the medical professional examines each vein in the leg including smaller perforator veins. It has been found that a non-specialist medical professional may overlook the minor veins which may be the real cause of varicose vein. In certain specific conditions wherein varicose veins are thought to be originating from Pelvis, more specific tests are required.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 8,
		question: "What are the treatment options of varicose veins and Which doctor to see?",
		answer: "You should consult an expert as he only can assess your problem and advise if you need to avail dedicated treatment. If you have symptoms as described above, you may meet any of the following set of doctors A) A phlebologist who is a vein specialist B) A vascular medicine doctor, who focuses on the system of blood flow C) An interventional radiologist, who specializes in using imaging tools to see inside the body and do treatments with little or no cutting. It is important to see the right expert because it is equally important to know when to start the treatment. In early disease, depending on the clinical examination and a good doppler study, the expert will usually recommend appropriate stockings for prevention. It is also necessary to know the right time to proceed to intervening into definite treatment to prevent complications. The technique used by Interventional radiologists are some of the most advanced and have proven to have given best results to the patient. Interventional radiologists are specially trained to perform all treatment procedures related to varicose veins. Most treatments performed by them provide immediate relief to the patient and enable resuming normal life with minimal rest period. As per guidelines by National Institute for Health & Care Excellence, United Kingdom interventional procedures by an interventional radiologist should be attempted first before reviewing any other treatment option. You can connect with us for getting an advise for your problem. We will be happy to provide you guidance for the problem.",
		imagePath: "../img/lable18.jpg"
	},
	{
		id: 9,
		question: "What is the post Procedural Care needs to be taken?",
		answer: "Although spider veins and varicose veins may not always be entirely preventable, there are various measures you can take to reduce your chances of developing them. Prevention tips include: exercising regularly, maintain a healthy weight, avoid prolonged sitting or standing, avoid crossing your legs while seated, elevate your legs when resting, and",
		imagePath: "../img/lable19.jpg"
	},
	{
		id: 10,
		question: "What is the approximate stay in Hospital and when can I Resume to work?",
		answer: "We have very fast and competent working team which provide you comfortable atmosphere and ease your nerves. It is usually a day care procedure. Resume to work? You can resume your work very next day of the procedure preferably in 2- 3 days.",
		//imagePath: "../img/card1.jpg"
	},
	{
		heading: "Arterial leg Ulcer-Diabetic Foot Treatment:",
	},
	{
		id: 11,
		question: "What is Peripheral Arterial disease (PAD)?",
		answer: "PAD is a circulatory issue. Narrowed arteries restrict blood flow to the limbs. This occurs more commonly in the lower legs. The limbs do not receive enough blood to keep up with the demands of day-to-day use, resulting in pain when walking. The condition can reduce blood flow to the heart and brain.",
		imagePath: "../img/lable121.jpg"
	},
	{
		id: 12,
		question: "What causes PVD?",
		answer: "The most common cause of PVD is atherosclerosis, the buildup of plaque inside the artery wall. Plaque reduces the amount of blood flow to the limbs. It also decreases the oxygen and nutrients available to the tissue. Blood clots may form on the artery walls, further decreasing the inner size of the blood vessel and block off major arteries. Other causes of PVD may include:",
		list: [
			"Injury to the arms or legs",
			"Irregular anatomy of muscles or ligaments",
			"Infection",
			"People with coronary artery disease (CAD) often also have PVD."
		],
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 13,
		question: "Who is at risk of getting PVD?",
		answer: "Risk factors for peripheral vascular disease include:",
		list: [
			"Family history of heart disease, high blood pressure, high cholesterol, or stroke",
			"Older than 50 years",
			"Overweight or obesity",
			"Inactive (sedentary) lifestyle",
			"Smoking",
			"Diabetes",
			"High blood pressure",
			"High cholesterol or LDL (the 'bad cholesterol'), plus high triglycerides and low HDL (the 'good cholesterol')"
		],
		imagePath: "../img/lable123.jpg"
	},
	{
		id: 14,
		question: "What are the Symptoms of PVD?",
		answer: "",
		list: [
			"Pain in the buttocks, hips, thighs, calves, ankles or feet during walking (a condition called claudication)",
			"Pain in the leg, calves, ankles, or feet at rest",
			"Ulceration or gangrene involving the legs, most commonly in the foot/toes",
			"Nerve damage with pain, tingling, or numbness in the lower leg, ankle, and foot",
			"Weakness in the involved leg",
			"Coldness in the lower leg and foot",
			"Weak or absent pulses in the involved leg",
			"Color changes in the involved leg",
			"Erectile dysfunction in men",
			"In severe cases, \n If the blood supply is very much reduced then you may develop pain even at rest, particularly at night when the legs are raised in bed. Typically, rest pain first develops in the toes and feet rather than in the calves. Sores (ulcers) may develop on the skin of your feet or lower leg if the blood supply to the skin is poor. In a small number of cases, tissue death (gangrene) of a foot may result. However, this is usually preventable (see below)."
		],
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 15,
		question: "What is the prognosis for peripheral arterial disease if left Untreated?",
		answer: "The longer you wait, the fewer treatment options will be available. Many PAD treatment options, such as atherectomy, stenting, and angioplasty, are minimally invasive procedures that can often restore full mobility within a week of treatment. However, these treatment options may not be an option in advanced stages of PAD, when the blockage hardens, is spread over large areas, or is in areas too difficult to access. Severe PAD may require bypass graft surgery, which is an invasive surgical procedure with a longer recovery period and more risks. At its latest stages, amputation of the limb with the blocked blood vessel may be the only option to treat PAD. Some people assume that since their doctor isn’t bringing up peripheral artery disease, it must not be an issue. Risk for PAD increases with age, but can still be found in middle-aged adults. In fact, 1 in 20 adults over the age of 50 have PAD. If you are a smoker, diabetic, or possess any other risk factor for PAD, your chances of experiencing PAD at a younger age are drastically increased.iv PAD symptoms will worsen over time without medical and/or lifestyle interventions. PAD is caused by a buildup of plaque within the arteries. The first symptom of PAD is usually pain after walking for a moderate distance, which resolves after a short period of rest. Because the pain resolves itself, patients with PAD will frequently adopt a more sedentary lifestyle, to avoid the discomfort of physical activity. However, over time, the buildup of plaque will worsen, restricting blood supply further until there is discomfort walking shorter and shorter distances, and eventually, many people even experience pain at rest. The longer you wait, the more expensive, invasive, and inconvenient the treatment will get. In addition to the increased invasiveness and risks associated with bypass graft surgery in the leg and limb amputation, advanced stage PAD treatments also have longer recovery times, extensive hospital stays, and require physical therapy to return to an independent lifestyle. When compared to a minimally invasive treatment like an angioplasty, there is far less expense, and patients can many times return to work and their normal activities in as little as two days.vi PAD can lead to gangrene. Peripheral artery disease occurs as a result of blockage of the blood vessels that supply blood to the lower extremities. This blood carries valuable oxygen to nourish the tissues and keep them healthy. When that blood supply is depleted, tissue decomposes, and can result in gangrene. This gangrenous tissue can be both limb- and life-threatening, and should be treated immediately.PAD can lead to amputation.",
		imagePath: "../img/lable125.jpg"
	},
	{
		id: 16,
		question: "How is PAD Diagnosed?",
		answer: "Along with a complete medical history and physical exam, other tests may include:",
		list: [
			"Ankle-brachial index (ABI). An ABI is a comparison of the blood pressure in the ankle with the blood pressure in the arm using a regular blood pressure cuff and a Doppler ultrasound device. To determine the ABI, the systolic blood pressure (the top number of the blood pressure measurement) of the ankle is divided by the systolic blood pressure of the arm.",
			"Doppler ultrasound flow studies. This uses high-frequency sound waves and a computer to create images of blood vessels, tissues, and organs. Your doctor may use the Doppler technique to measure and assess the flow of blood. Faintness or absence of sound may mean blood flow is blocked.",
			"Magnetic resonance angiography (MRA). This noninvasive test uses a combination of a large magnet, radio frequencies, and a computer to produce detailed images of organs and structures in the body. Your doctor injects a special dye during the procedure so that blood vessels are more visible.",
			"Computerized tomography angiography (CTA). A CTA imaging test shows the doctor an image of the blood vessels, including areas that have narrowed or become blocked.",
			"Angiogram. This is an X-ray of the arteries and veins to detect blockage or narrowing. This procedure involves inserting a thin, flexible tube into an artery in the leg and injecting a contrast dye. The contrast dye makes the arteries and veins visible on the X-ray. \n The above are primarily used to diagnose PVDs. Ankle-Brachial Index is very inexpensive test and should be adopted earlier before getting other tests done."
		],
		//imagePath: "../img/card1.jpg",
	},
	{
		id: 17,
		question: "What is the treatment of PAD and Which Doctor to see?",
		answer: "A major problem with PVD/PAD is that almost 50% of patient do not show symptoms. In cases where the patients do show symptoms, many a times it is brushed aside as the symptoms appear generic and an expert doctor is not consulted in time. \n A delayed diagnosis and delay in treatment can result into extreme complications. If you are experiencing any problem as mentioned in symptoms section above immediately consult an interventional radiologist as they are best trained to treat PVDs. \n If you do not have any symptoms as but have any heart disease, cholesterol, blood pressure, diabetes, or any kidney disease you should regularly get yourself checked for PVD. All people above age 50 years are also highly recommended for evaluation on regular basis. \n You can connect with us to get more information on PVDs. We would be happy to provide advice and guidance.",
		list: [
		    "Medicines A medicine called clopidogrel is usually advised. This does not help with symptoms of PAD but helps to prevent blood clots (thromboses) forming in blood vessels (arteries). It does this by reducing the stickiness of platelets in the bloodstream. If you cannot take clopidogrel then alternative antiplatelet medicines such as low-dose aspirin may be advised. \n A statin medicine is usually advised to lower your cholesterol level. This helps to prevent a build-up of fatty patches (atheroma). \n If you have diabetes then good control of your blood sugar (glucose) level will help to prevent PAD from worsening. \n If you have high blood pressure (hypertension) then you will normally be advised to take medication to lower it. \n Other medicines are sometimes used to try to open up the arteries - for example, cilostazol and naftidrofuryl. One may be given and may help. However, they do not work in all cases. Therefore, there is no point in continuing with these medicines if you do not notice an improvement in symptoms within a few weeks.",
		    "Endovascular Treatment \n The treatment of PAD can reduce your symptoms, improve your quality of life, reduce your risk of a heart attack or stroke, and prevent worsening conditions. Left untreated, PAD can worsen and often become life-threatening. \n Our treatment goal is to restore blood flow to your limbs by minimizing the narrowing of the arteries. We offer minimally-invasive treatment options called:",
 			[	 
 	     		"Angioplasty",
		 		"Stent Placement",
		 		"Atherectomy"
	   		],
		    "ANGIOPLASTY: \n Angioplasty is a minimally invasive procedure that opens narrowed or blocked blood vessels supplying blood to your legs. A balloon-tipped catheter (a thin hollow tube) will be inserted into a blood vessel in your upper thigh area (called the groin). This is often referred to as a “pin-hole incision.” The catheter is positioned in the narrowed or blocked artery by using a continuous x-ray guidance.When the catheter is in place, the balloon inflates for short amount of time. The plaque is compressed outward against the artery wall, widening the artery and restoring the blood flow. Next, the balloon is deflated and the catheter is removed from your body",
		    "STENT PLACEMENT: \n Stents are commonly implanted during the balloon angioplasty procedure. A stent is a flexible, metal, mesh tube that expands to hold open the impacted artery. Stents provide internal structural support to better maintain proper circulation and will remain in the previously blocked vessel.Local anesthesia or moderated sedation is administered at the beginning of the procedure to provide enough sedation to make the procedure as comfortable as possible. You will be awake the entire time! ",
		    "ATHERECTOMY: \n Artherectomy uses a catheter and x-ray guidance, similar to the angioplasty and stent placement. Instead of inserting a balloon, however, the atherectomy catheter has a sharp blade at its end designed to remove and collect plaque from your blood vessel. The catheter is taken out of the vessel once sufficient plaque is removed. "
		],
		imagePath: "../img/lable127a.jpg"

	},
	{
		id: 18,
		question: "What self-help measures can I do?",
		answer: "",
		list : [
			"Stop smoking",
			"Exercise regularly",
			"Lose weight if you are overweight",
			"You should eat a healthy diet and have a good control over sugar levels.",
			"Take care of your feet",
		],
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 19,
		question: "What is the Approximate Stay in hospital?",
		answer: "We have very fast and competent working team which provide you comfortable atmosphere and ease your nerves. Usual time of stay is around 2-3 Days.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 110,
		question: "Resume to work?",
		answer: "You can resume your work after 2-3 days if existing disease allows",
		//imagePath: "../img/card1.jpg"
	}
]
