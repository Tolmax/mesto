const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_about');

let profName = document.querySelector('.profile__name');
let profJobtitle = document.querySelector('.profile__job-title');

function openPopup() {
    nameInput.value = profName.textContent;
    jobInput.value = profJobtitle.textContent;
    popupElement.classList.add('popup_opened');
}       
popupOpenButtonElement.addEventListener('click', openPopup)

function closePopup() {
    popupElement.classList.remove('popup_opened');
}
popupCloseButtonElement.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
    profName.textContent = nameInput.value;
    profJobtitle.textContent = jobInput.value;
    closePopup();
    evt.preventDefault();
  }
formElement.addEventListener('submit', handleFormSubmit);

