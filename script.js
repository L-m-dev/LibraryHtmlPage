let library = [];

//DOM references:

let bookContainer = document.querySelector('.book-container');
let titleDom = document.querySelector('#title');
let authorDom = document.querySelector('#author');
let pageNumberDom = document.querySelector('#pageNumber');
let hasReadDom = document.querySelector('#hasRead');
let toggleButton = document.querySelectorAll('.toggle-read');
let removeButtonDom = document.querySelectorAll('.remove-button');

function Book(title, author, pageNumber, isRead){
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pageNumber, hasRead){
    if(hasRead == true){
        hasRead = 'Yes';
    }else{
        hasRead = 'No';
    }
    let b = new Book(title, author, pageNumber, hasRead);
    library.push(b);  
    
refreshHtmlList();  
}

function refreshHtmlList(){
    bookContainer.textContent = '';
    if(library.length>0){
        library.forEach((book, index)=>{
            createCardElement(book, index);
 
        })
    }
    toggleButton = document.querySelectorAll('.toggle-read');
    removeButtonDom = document.querySelectorAll('.remove-button');
    reattach();
}

function createCardElement(obj, objIndex){
    let bookCard = document.createElement('div');
    bookCard.className = 'card';
    let authorDom = document.createElement('p');
    let titleDom = document.createElement('p');
    let pageNumberDomE = document.createElement('p');
    let isReadDom = document.createElement('p');

    if(obj.isRead == 'Yes'){
        obj.isRead = 'Yes';
    } else { obj.isRead = 'No'; 

    }
 
    authorDom.textContent = `Author: ${obj.author}`;
    titleDom.textContent = `Title: ${obj.title}`;
    pageNumberDomE.textContent = `Pages: ${obj.pageNumber}`;
    isReadDom.textContent = `Finished? ${obj.isRead}`;

    const readButton = document.createElement('button');
    readButton.className = 'toggle-read';
    readButton.textContent = 'TOGGLE READ STATUS';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'REMOVE BOOK';

    const idAttribute = document.createAttribute('data-index');
    idAttribute.value = objIndex;
   
    bookCard.setAttributeNode(idAttribute);
    bookCard.appendChild(authorDom);
    bookCard.appendChild(titleDom);
    bookCard.appendChild(pageNumberDomE);
    bookCard.appendChild(isReadDom);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
    bookContainer.append(bookCard);

    toggleButton = document.querySelectorAll('.toggle-read');
    removeButtonDom = document.querySelectorAll('.remove-button'); 

}

 

const addBookButton = document.querySelector('#add-book');

addBookButton.addEventListener('click', () =>{

 
console.log(hasReadDom.checked +' inside ');

    addBookToLibrary(titleDom.value, authorDom.value, pageNumberDom.value, hasReadDom.checked);

 document.querySelector('#form').reset();

})

let b = new Book('Tale of Being Stuck', 'Johnny', 290, 'Yes');
library.push(b);

let c = new Book('Wealth and Sailing', 'Maritimus Bottar', 400, 'No');
library.push(c);

refreshHtmlList();

function reattach(){
toggleButton.forEach((e)=>{
  e.addEventListener('click', (e)=>{
   toggleRead(e.target.parentNode.attributes[1].value);
   removeButtonDom = document.querySelectorAll('.remove-button'); 
 




   
});});
removeButtonDom.forEach((e)=>{
    console.log(e);
    e.addEventListener('click', (e) =>{    console.log(e);

         removeBook(e.target.parentNode.attributes[1].value)});
});

}



function toggleRead(i){

    toggleButton = document.querySelectorAll('.toggle-read');

    let bookObj = library[i];

    if(bookObj.isRead == 'Yes'){
        bookObj.isRead = 'No';
    } else {
        bookObj.isRead = 'Yes';
    }
     refreshHtmlList();

}

function removeBook(i){

    toggleButton = document.querySelectorAll('.remove-button');

    console.log(library);
 
    library.splice(i, 1);
    console.log(library);

     refreshHtmlList();

}