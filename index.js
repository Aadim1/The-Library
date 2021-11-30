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

const addBookToDom = (title, author, pages, read, inputContainer) => {

    /*<li class="table-row">
      <div class="col col-1" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-3" data-label="Amount">$350</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>
    </li>*/
    const table = document.querySelector('.responsive-table');
    const list = document.createElement('li');
    table.appendChild(list);
    list.classList.toggle('table-row');

    let harry = new Book(title.value, author.value, pages.value, read.value);
    console.log(harry)

    //title
    let titleDOM = document.createElement('div');
    inputContainer.appendChild(title);
    titleDOM.classList.toggle('col');
    titleDOM.classList.toggle('col-1');
    titleDOM.classList.toggle('title');
    titleDOM.setAttribute('data-label', 'Title');
    titleDOM.innerHTML = harry.getTitle()
    list.appendChild(titleDOM);

    //author
    let authorDOM = document.createElement('div');
    inputContainer.appendChild(author);
    authorDOM.classList.toggle('col');
    authorDOM.classList.toggle('col-2');
    authorDOM.classList.toggle('author')
    authorDOM.setAttribute('data-label', 'Author');
    authorDOM.innerHTML = harry.getAuthor()
    list.appendChild(authorDOM);

    //pages
    let pagesDOM = document.createElement('div');
    inputContainer.appendChild(pages);
    pagesDOM.classList.toggle('col');
    pagesDOM.classList.toggle('col-3');
    pagesDOM.setAttribute('data-label', 'Pages');
    pagesDOM.innerHTML = harry.getPages();
    list.appendChild(pagesDOM);

    //read
    let readDOM = document.createElement('input');
    inputContainer.appendChild(read);
    readDOM.classList.toggle('read');
    readDOM.classList.toggle('custom-btn');
    readDOM.classList.toggle('btn-1');
    readDOM.classList.toggle('col');
    readDOM.classList.toggle('col-4');
    readDOM.setAttribute('type', 'button');
    readDOM.setAttribute('value', harry.getRead());
    readDOM.setAttribute('data-label', 'Read');
    readDOM.addEventListener('click', () => completeOrNot(read));
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
}






const removeTable = (p, harry) => {
    // p.remove();
    console.log(harry)
    harry.setAuthor('Aadim')
    p.innerHTML = harry.author;
}

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