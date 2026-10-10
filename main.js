let createBtn = document.querySelector(`#createBtn`);
let titleInput = document.querySelector(`#titleInput`);
let contentInput = document.querySelector(`#contentInput`);
let title = document.querySelector(`#title`);
let paragraph = document.querySelector(`#paragraph`);
let articlesContainer = document.querySelector(`#articlesContainer`);

createBtn.addEventListener(`click`, ()=>{
    createBtn.classList.toggle(`btnCustomColor2`);
    if(titleInput.value == `` && contentInput.value == ``){
        alert(`Testo non valido`);
    }else{
      let newArticle = document.createElement(`article`);
      newArticle.classList.add(`card`, `border`, `rounded-4`, `p-3`, `mb-3`, `bg-light`);
      let newTitle = document.createElement(`h3`);
      newTitle.classList.add(`h5`, `card-title`);
      newTitle.innerText = titleInput.value;
      let newParagraph = document.createElement(`p`);
      newParagraph.classList.add(`card-text`, `mb-0`, `customText`);
      newParagraph.innerText = contentInput.value;

      newArticle.appendChild(newTitle);
      newArticle.appendChild(newParagraph);

      articlesContainer.appendChild(newArticle);
      titleInput.value = "";
      contentInput.value = "";
    }                           
})




