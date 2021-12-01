const main = document.querySelector('.root');
const addButton = document.querySelector('.add-button');
const form_ = document.querySelector('.form');
class Book {
    constructor(title, author, pages, read) {
            this.author = author;
            this.title = title;
            this.pages = pages;
            this.read = read;
        }
        // Setters
    setAuthor(author) {
        this.author = author;
    }
    setTitle(title) {
        this.title = title;
    }
    setPages(pages) {
        this.pages = pages;
    }
    setRead(read) {
            this.read = read;
        }
        // Getters
    getAuthor() {
        return this.author;
    }
    getTitle() {
        return this.title;
    }
    getPages() {
        return this.pages;
    }
    getRead() {
        return this.read;
    }
};

const completeOrNot = (read) => {
    read.classList.toggle('status');
    const status = document.getElementsByClassName('status');
    if (status.length > 0) {
        read.setAttribute('value', "Not Completed");
    } else {
        read.setAttribute('value', "Completed");
    };
};

const edit = (list, deleteDIV, harry) => {

    while (list.firstChild) {
        console.log('hello world')
        list.removeChild(list.firstChild);
    };
    //title
    let editTitle = document.createElement('input');
    editTitle.classList.toggle('col');
    editTitle.classList.toggle('col-1');
    editTitle.classList.toggle('title');
    editTitle.classList.toggle('input');
    editTitle.setAttribute('data-label', 'Title');
    editTitle.value = harry.getTitle();
    list.appendChild(editTitle);

    //author
    let editAuthor = document.createElement('input');
    editAuthor.classList.toggle('col');
    editAuthor.classList.toggle('col-2');
    editAuthor.classList.toggle('author')
    editAuthor.classList.toggle('input');
    editAuthor.setAttribute('data-label', 'Author');
    editAuthor.value = harry.getAuthor();
    list.appendChild(editAuthor);
    editAuthor.style['margin-left'] = '1rem';

    //pages
    let editPages = document.createElement('input');
    editPages.classList.toggle('col');
    editPages.classList.toggle('col-3');
    editPages.classList.toggle('input');
    editPages.setAttribute('data-label', 'Pages');
    editPages.value = harry.getPages()
    list.appendChild(editPages);
    editPages.style['margin-left'] = '1rem';
    editPages.style.width = '80px';


    //read
    let editRead = document.createElement('input');
    editRead.classList.toggle('read');
    editRead.classList.toggle('custom-btn');
    editRead.classList.toggle('btn-1');
    editRead.classList.toggle('col');
    editRead.classList.toggle('col-4');
    editRead.setAttribute('type', 'button');
    editRead.setAttribute('value', harry.getRead());
    editRead.setAttribute('data-label', 'Read');
    editRead.addEventListener('click', () => completeOrNot(editRead));
    list.appendChild(editRead);
    editRead.style['margin-left'] = '1rem';

    //edit
    let doneDIV = document.createElement('div');
    let doneDOM = document.createElement('img');
    doneDIV.appendChild(doneDOM)
    doneDOM.setAttribute('src', './edit.png');
    doneDOM.classList.toggle('col');
    doneDOM.classList.toggle('col-5');
    list.appendChild(doneDIV);
    doneDIV.style['margin-left'] = '2rem';


    //delete
    delet = deleteDIV;
    delet.style['margin-left'] = '4rem';

    list.appendChild(delet);

};

const addBookToDom = (title, author, pages, read, inputContainer) => {
    const table = document.querySelector('.responsive-table');
    const list = document.createElement('li');
    table.appendChild(list);
    list.classList.toggle('table-row');

    let harry = new Book(title.value, author.value, pages.value, read.value);
    console.log(harry)

    //title
    let titleDOM = document.createElement('div');
    titleDOM.classList.toggle('col');
    titleDOM.classList.toggle('col-1');
    titleDOM.classList.toggle('title');
    titleDOM.setAttribute('data-label', 'Title');
    titleDOM.innerHTML = harry.getTitle()
    list.appendChild(titleDOM);

    //author
    let authorDOM = document.createElement('div');
    authorDOM.classList.toggle('col');
    authorDOM.classList.toggle('col-2');
    authorDOM.classList.toggle('author')
    authorDOM.setAttribute('data-label', 'Author');
    authorDOM.innerHTML = harry.getAuthor()
    list.appendChild(authorDOM);

    //pages
    let pagesDOM = document.createElement('div');
    pagesDOM.classList.toggle('col');
    pagesDOM.classList.toggle('col-3');
    pagesDOM.setAttribute('data-label', 'Pages');
    pagesDOM.innerHTML = harry.getPages();

    list.appendChild(pagesDOM);

    //read
    let readDOM = document.createElement('input');
    readDOM.classList.toggle('read');
    readDOM.classList.toggle('custom-btn');
    readDOM.classList.toggle('btn-1');
    readDOM.classList.toggle('col');
    readDOM.classList.toggle('col-4');
    readDOM.setAttribute('type', 'button');
    readDOM.setAttribute('value', harry.getRead());
    readDOM.setAttribute('data-label', 'Read');
    readDOM.addEventListener('click', () => completeOrNot(readDOM));

    list.appendChild(readDOM);

    //edit
    let editDIV = document.createElement('div');
    let editDOM = document.createElement('img');
    editDIV.appendChild(editDOM)
    editDOM.setAttribute('src', './edit.png');
    editDIV.classList.toggle('col');
    editDIV.classList.toggle('col-5');

    list.appendChild(editDIV);

    //delete
    let deleteDIV = document.createElement('div');
    let deleteDOM = document.createElement('img');
    deleteDIV.appendChild(deleteDOM);
    deleteDOM.setAttribute('src', './delete.png');
    deleteDIV.classList.toggle('col');
    deleteDIV.classList.toggle('col-5');
    deleteDIV.addEventListener('click', () => list.remove());

    list.appendChild(deleteDIV);
    inputContainer.remove();


    editDIV.addEventListener('click', () => edit(list, deleteDIV, harry));
};

const createTable = () => {
    if ((document.getElementsByClassName('input-cntn').length) > 0) {
        alert('Fill out the remaining input first');
        return;
    }
    let inputContainer = document.createElement('div');
    main.appendChild(inputContainer);
    inputContainer.classList.toggle('input-cntn')

    //title input
    let title = document.createElement('input');
    inputContainer.appendChild(title);
    title.classList.toggle('title');
    title.classList.toggle('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title')

    //author input
    let author = document.createElement('input');
    inputContainer.appendChild(author);
    author.classList.toggle('author');
    author.classList.toggle('input');
    author.setAttribute('type', 'text');
    author.setAttribute('placeholder', 'Author');

    //pages input
    let pages = document.createElement('input');
    inputContainer.appendChild(pages);
    pages.classList.toggle('pages');
    pages.classList.toggle('input');
    pages.setAttribute('type', 'number');
    pages.setAttribute('placeholder', 'No of Pages')
    pages.style.width = '120px';

    //read input
    let read = document.createElement('input');
    inputContainer.appendChild(read);
    read.classList.toggle('read');
    read.classList.toggle('custom-btn');
    read.classList.toggle('btn-1')
    read.setAttribute('type', 'button');
    read.setAttribute('value', "Completed");
    read.addEventListener('click', () => completeOrNot(read));



    //button
    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', "Add");
    inputContainer.appendChild(button);
    button.classList.toggle('custom-btn');
    button.addEventListener('click', () => addBookToDom(title, author, pages, read, inputContainer))
};

function addBookToLibrary() {
    console.log('here')
    createTable()
};


addBookToLibrary.prototype = Object.create(Book.prototype);


form_.addEventListener('click', addBookToLibrary);