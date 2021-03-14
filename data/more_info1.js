const data = [
	{
		heading: "Aortic Aneurysm/Dissection"
	},
	{
		id: 1,
		question: "What is an Abdominal Aortic Aneurysm?",
		answer: "The aorta is the main artery from the heart and carries blood to the organs and limbs. An aortic aneurysm is an enlargement of the aorta. \nIn the abdominal aorta an aneurysm is defined as an enlargement of the aorta of at least 1.5 times its normal diameter, or greater than 3 cm diameter in total.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 2,
		question: "What causes Abdominal Aortic Aneurysm?",
		answer: "Most are caused be atherosclerosis ('furring/hardening of the arteries'). Rarely the artery wall is weakend by hereditary conditions \nmain risk factors for AAA include smoking, high blood pressure, increasing age and a family history of aneurysms.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 3,
		question: "What are the symptoms of Aortic Aneurysm?",
		answer: "Most aneurysms do not produce any symptoms.\nOccasionally they can cause abdominal or back pain, or even a pulsating sensation in the abdomen. However, pain in a patient with a known aneurysm can be a sign of impending rupture and urgent medical attention should be sought.\nMost aneurysms are found incidentally (by chance) when tests are carried out for other reasons or are picked up by screening.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 4,
		question: "What is the prognosis if left Untreated?",
		answer: "The most serious risk is that the aneurysmal blood vessel can eventually enlarge until it bursts. This bleeding is usually life threatening and urgent surgery is needed. 80% of patients with a ruptured AAA will not survive. Unfortunately, even with emergency surgery, only about half survive beyond 30 days. Rupture can be avoided if the aneurysm is repaired before this occurs.\nThe risk of rupture increases with the size of the aneurysm. An aneurysm of 6 cm in diameter has an annual risk of rupture of 25%. Symptoms of rupture can include; Sudden severe abdominal or back pain. This may be accompanied by signs of shock (collapse, light headedness/dizziness, rapid heart beat, fainting, nausea and vomiting, excessive thirst, sweating). Immediate medical attention must be sought.",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 5,
		question: "How are Aortic Aneurysms Diagnosed and which Doctor to see?",
		answer: "If there is a high risk of an aneurysm/dissection or you have been detected to have one, you could consult an Interventional Radiologist .\n"+
				"A detailed physical examination and blood investigation should be done for assessing the fitness of the patient for treatment.\n"+
				"If there is no contraindication a computed tomography angiography (64 slice minimum) should be performed.\n"+
				"A CT scan will give the location, exact dimensions and relationship of the aneurysm to the main branch arteries of the body. This will help plan whether treatment is required and what sort of treatment should be planned.\n"+
				"In few cases if a CT scan cannot be performed or if additional information is required, then a digital subtraction angiogram (DSA) or a magnetic resonance imaging (MRI) may be done.\n"+
				"Size is an important criterion for aneurysms. The normal aorta in the chest measures 2.5-3.2 cms, and in the abdominal aorta measures 1.8-2.3 cms. If the thoracic or abdominal aneurysm is less than 4.5 cms in its maximum diameter, then medical management is advised with regular radiologic follow up. If the size is greater than 4.5cms then treatment should be planned.\n"+
				"In cases of dissections, detailed discussion and planning has to be done to decide the treatment, which are now successfully treated by the endovascular method.\n",
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 6,
		question: "What are the Treatment options available?",
		answer: "Your doctor may recommend surveillance (watch and wait) or Surgical Repair.   The decision will depend on the size and type of aneurysm, the short and long term benefits/risks of surgical repair; and your physical fitness.   The main surgical options are:"+
				"\n1.	Conventional open surgery \n 2.	Endovascular repair ",
		 list: [
				"Surveillance:",
				"Current guidelines from the Vascular Society and the National Screening Committee recommend that patients with symptomatic aneurysms of less than 4.5 cm in diameter should be followed up with ultrasonography every 6 months, and aneurysms of 4.5–5.5 cm in diameter should be followed up every 3 or 6 months.",
				"Elective surgery is generally recommended for patients with aneurysms larger than 5.5 cm in diameter and with aneurysms larger than 4.5 cm in diameter that have increased by more than 0.5 cm in the past 6 months.",
				"At a diameter of less than 5.5 cm it has been generally accepted that the risk of rupture is lower than the risk of open surgery. The risk of surgery however varies with the method of repair chosen and from individual to individual.",
				"Open surgery: \nTraditionally abdominal aortic aneurysms have been repaired surgically. This is major abdominal surgery. ",
				[
					"A large incision is made in the abdomen and the aorta is clamped to stop the blood flow through it (and consequently the organs it supplies). ",
					"This allows the surgeon to cut into the aneurysm and a synthetic tube (graft) is sewn onto the aorta to replace the abnormal blood vessel. ",
					"The clamp is then removed and blood flow is restored. ",
					"The operation is almost always carried out under general anaesthsia with the patient asleep. ",
					"As this is major surgery, patients usually have to spend some time in the intensive care unit after the operation to recover.",
				],
				"Risks of open surgery",
				[
					"Most patients will recover from the operation and go home without any significant problems.",
					"However, as with all surgery there is a risk of serious complications. The main complications are bleeding (this can be severe especially in an emergency repair); complications related to the clamping of the aorta and subsequent lack of blood to the tissues (called ischaemia) such as kidney failure, risk to the legs, bowel and spinal ischaemia with a very small risk of paralysis",
				]	
			],
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 7,
		question: "What is Endovascular aortic aneurysm repair (EVAR)?",
		answer: "",
		list: [
				"Relatively new technique (approx 10 yrs) but is now widely accepted as an alternative to open surgery. It is carried out in most large centres.",
				"It is minimally invasive surgery and usually only involves a small incision in each groin.",
				"The graft that has been pre-packed into a thin catheter/tube and is introduced through the artery in the groin.",
				"It is advanced under x-ray guidance into the aneurysm and then it is then deployed where it expands to fit into the inside of the aorta.",
				"Unlike open surgery where the aorta is effectively replaced by the graft, in EVAR the graft re-lines the inside of the vessel.",
		],
		//imagePath: "../img/card17.jpg"
	},
	{
		id: 8,
		question: "What are the Advantages and Disadvantages of EVAR",
		answer: "",
		list: [
				"Advantages of EVAR are:\n The 30 day post operative mortality following aneurysm repair is significantly lower with EVAR compared with open surgery (two thirds lower in the EVAR 1 trial).",
				[
					"Reduced time under anaesthesia",
					"Less pain after surgery",
					"Less blood loss and immediate complications",
					"Shorter stay in hospital with faster recovery",
				],
				
				"Disadvantages are: \n The EVAR graft may not form a complete seal in the aorta and blood will then continue to flow into the aneurysm. This is called an endoleak.",
				[
					"Most endoleaks do not require any specific treatment except monitoring to ensure the aneurysm does not expand further.",
					"Some endoleaks will require further procedures to correct and occasionally open surgery is needed.",
					"Because some endoleaks can develop later on, patients who have had EVAR need continued follow up scans and clinic visits. This may be for years.",
					"Open surgical repair does not usually require any special follow up.",
				]
		],
		//imagePath: "../img/card1.jpg"
	},
	{
		id: 10,
		question: "What is the approximate stay in Hospital and when can I Resume to work?",
		answer: "We have very fast and competent working team which provide you comfortable atmosphere and ease your nerves. Usual time of stay is around 2-3 Days."+
		        "Resume to work? \n You can resume your work very next day of the procedure preferably in 2- 3 days.",
		//imagePath: "../img/card1.jpg"
	}
]
