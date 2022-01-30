// local reviews data
const reviews = [
  {
    id: 1,
    name: "Parvati Aghoram",
    text: "‘I am happy that I can walk again’. I have been dr ashutosh’s patient for diabetic foot ulcer . During this time I have received excellent care. he is an excellent interventionist and he is fully aware of the medical procedures. He gives enough time to listen to all the queries during consultations and over the phone. His advice has always been so rewarding to me. he has been in several locations that were always easy for me to reach. I would highly recommend this doctor.",
  },
  {
    id: 2,
    name: "Ramamoorthy",
    text: "You gave me renewed hope. Thank you, Dr Ashutosh. I underwent PTBD procedure by him and I must say he is the best doctor for interventional oncology treatment.",
  },
  {
    id: 3,
    name: "Anup Damodar",
    text: "It was a very good experience with Dr ashutosh, one of the most calm and composed doctors I have met till date. He very patiently answered all  my questions regarding my condition and the treatment to be followed. I am very much thankful I am getting treated by him for my IVC narrowing. I would definitely recommend him.",
  },
  {
    id: 4,
    name: "Meenakshi Jain",
    text: "Thank you dr ashutosh for your timely intervention and care of my blocked AV fistula. Even though my situation was a complicated one, after consulting many doctors you finally guided us properly through the situation and I could resume my dialysis as required  .",
  },
  {
    id: 5,
    name: "NM Batliwala",
    text: "dr ashutosh is a very good doctor as well as a great person. I am consulting him for my varicose veins and ulcer which I was suffering since 10 years. Because of his excellent skills not only did my varicose veins disappear but because of the proper after care that he gave for my ulcer I was ultimately pain free  . ",
  },
  {
    id: 6,
    name: "Kalpana Joshi",
    text: "I had a large hemangioma on my hand since birth which looked ugly and had started to pain which is when my family doctor suggested dr ashutosh . I am very happy with his way of approach and his work.  My hemangioma has decreased in size and did not pain since then. Thank you sir.",
  },
  {
    id: 7,
    name: "Sulochana Singh",
    text: "It was a very satisfying experience being guided by Dr Ashutosh for my Varicose veins treatment, right from the manner in which he patiently explained my disease and various treatment options to me and my family to the way in which he carried out the procedure. Dr Ashutosh left a lasting impression on us. His attention to minute details I believe is one of this best qualities.  Thank you doctor for your time and patience.",
  },
];
// select items
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector("#prev_review");
const nextBtn = document.querySelector("#next_review");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  author.textContent = item.name;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.name;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
