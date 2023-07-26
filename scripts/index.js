const popupOpenButtonElement = document.querySelector('.menu__open-popup');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupSubmitButtonElement = document.querySelector('.popup__submit');

const formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

let profName = document.querySelector('.profile__name');
let profJobtitle = document.querySelector('.profile__job-title');

function openPopup() {
    nameInput.value = profName.textContent;
    jobInput.value = profJobtitle.textContent;
    console.log('OPEN');
    popupElement.classList.add('popup_is-opened');
}       
popupOpenButtonElement.addEventListener('click', openPopup)

function closePopup() {
    console.log('CLOSE');
    popupElement.classList.remove('popup_is-opened');
}
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitButtonElement.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
    profName.textContent = nameInput.value;
    profJobtitle.textContent = jobInput.value;
    evt.preventDefault();
  }
formElement.addEventListener('submit', handleFormSubmit);

