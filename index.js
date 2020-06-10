console.log("Welcome to Pustak Library");
function Book(name, author, type) {
    name = this.name
    author = this.author
    type = this.type
}

// Display Constructor
function Display()
{

}

// Add Method to display prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody')
    let uistring = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
tableBody.innerHTML += uistring;
}


Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm')
    LibraryForm.reset();
}

// Add Submit Event Listner

let LibraryForm = document.getElementById('LibraryForm')
LibraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    // console.log("You have submitted form.");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    // let type = document.getElementById('').value;
    // motivation , fiction , biography

    let motivation = document.getElementById('motivation');
    let fiction = document.getElementById('fiction');
    let biography = document.getElementById('biography');


    if (motivation.checked) {
        type = motivation.value;
    }
    else if (fiction.checked) {
        type = fiction.value;
    }
    else if (biography.checked) {
        type = biography.value;
    }
    console.log(name, author, type)
    
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
}