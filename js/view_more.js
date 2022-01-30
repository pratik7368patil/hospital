let srNo = 1;

function generateCollapseField(queObject, num, isChild) {
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "card-header dynamic-card-head");
  mainDiv.setAttribute("id", `question${queObject.id}heading`);

  let question = document.createElement("h2");
  question.setAttribute("class", "mb-0");

  let button = document.createElement("button");
  button.setAttribute(
    "class",
    `btn btn-link btn-ablock text-left collapse-link ${
      isChild ? "style-view-more-collapse-inner" : "style-view-more-collapse"
    }`
  );
  button.setAttribute("type", "button");
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", `#questioncollapse${queObject.id}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `questioncollapse${queObject.id}`);
  button.innerText = (num ? num + ". " : "") + queObject.question;
  srNo++;

  question.appendChild(button);
  mainDiv.appendChild(question);

  return mainDiv;
}

function generateInnerCollapseField(queObject, parent) {
  let mainAboveAns = document.createElement("div");
  mainAboveAns.setAttribute("id", `questioncollapse${queObject.id}`);
  mainAboveAns.setAttribute("class", "collapse");
  mainAboveAns.setAttribute(
    "aria-labelledby",
    `question${queObject.id}heading`
  );
  mainAboveAns.setAttribute("data-parent", parent);

  return mainAboveAns;
}

function generateHeadCard() {
  let mainCard = document.createElement("div");
  mainCard.setAttribute("class", "card dynamic-card");

  return mainCard;
}

const generateCollapseQuestion = (queObject, num, parent) => {
  let mainCard = generateHeadCard();

  let mainDiv = generateCollapseField(queObject, num, true);
  mainCard.appendChild(mainDiv);

  let mainAboveAns = generateInnerCollapseField(queObject, parent);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  // creating DOM element based on it's type
  if (queObject.videoPath) {
    let videoContent = `<object width="100%" height="333">
            <param name="movie" value="${queObject.videoPath}">
            <embed src="${queObject.videoPath}" type="application/x-shockwave-flash" width="100%" height="333">
          </object>`;
    let videoMain = document.createElement("div");
    videoMain.innerHTML = videoContent;
    cardBody.appendChild(videoMain);
  } else if (queObject.imagePath) {
    let imgMain = document.createElement("div");
    let img = document.createElement("img");
    img.src = queObject.imagePath;
    img.setAttribute("class", "card-img-top img-fluid image-center mg");
    imgMain.appendChild(img);
    cardBody.appendChild(imgMain);
  }

  let para = document.createElement("p");
  para.innerText = queObject.answer;
  para.setAttribute("class", "main-text lead text-md-left text-muted txt-1");
  cardBody.appendChild(para);

  // add list items here

  function makeList(item, listType) {
    let olELe = document.createElement(listType);
    for (let i = 0; i < item.length; i++) {
      let liEle = document.createElement("li");
      liEle.setAttribute("class", "lead text-md-left text-muted");
      if (Array.isArray(item[i])) {
        olELe.appendChild(makeList(item[i], "ul"));
      } else {
        liEle.innerText = item[i];
      }
      if (liEle.innerText) {
        olELe.appendChild(liEle);
      }
    }
    return olELe;
  }

  if (queObject.list) {
    cardBody.appendChild(makeList(queObject.list, "ol"));
  }

  mainAboveAns.appendChild(cardBody);
  mainCard.appendChild(mainAboveAns);

  return mainCard;
};

// to generate inner list we can add list in object in data and check for each if it exists then
// create that list and add to dom accordingly

const setAllQuestions = (data) => {
  let mainCollapse = document.querySelector("#collapse-data"); // get element form dom where we need to append our questions
  let headMain = generateHeadCard();
  let headingField;
  let headingQuestions;
  let parent;
  for (let i = 0; i < data.length; i++) {
    if (data[i].heading) {
      let id = Math.floor(Math.random() * 342659);
      parent = `#questioncollapse${id}`;
      headingField = generateCollapseField(
        { id: id, question: data[i].heading },
        null,
        false
      );
      headingQuestions = generateInnerCollapseField(
        { id: id },
        "#collapse-data"
      );
      headingField.appendChild(headingQuestions);
      mainCollapse.appendChild(headingField);
      srNo = 1;
    } else {
      if (headingQuestions) {
        headingQuestions.appendChild(
          generateCollapseQuestion(data[i], srNo, parent)
        );
      }
    }
  }
};

setAllQuestions(data);
