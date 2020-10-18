const createForm = document.getElementById("createForm");
const bookOutput = document.getElementById("readDiv");

createForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(this.title);
    console.log(this.desc);
    const data = {
        title: this.title.value,
        authorName: this.author.value,
        genre: this.genre.value,
        desc: this.desc.value,
        nowRead: this.read.checked,
        colour: this.colour.value,
    }

    fetch("http://localhost:8081/createBook", { 
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => { 
        return response.json(); 
    }).then(data => { 
        renderBook();
        this.reset();
    }).catch(error => console.log(error));
});

function renderBook() {
    fetch("http://localhost:8081/getBook")
        .then(response => response.json())
        .then(arrayOfBook => {
            console.log("Book: ", arrayOfBook);
            bookOutput.innerHTML = '';
            arrayOfBook.forEach(function(book) {
                console.log(book);

                const card = document.createElement("form");
                card.className = "card";
                card.class = "card";
                card.id = "bigCard";
                card.method = "post";
                bookOutput.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                cardBody.id = "bodyOfCard";
                card.appendChild(cardBody);

                const title = document.createElement("input");
                title.id = "titleSlot";
                title.class = "card-title";
                title.name = "title";
                title.className = "card-title";
                title.value = book.title;
                title.placeholder = "" + book.title;
                title.innerText = book.title;
                title.style = "background-color: " + book.colour;
                cardBody.appendChild(title);
                cardBody.appendChild(document.createElement("br"));

                const author = document.createElement("input");
                const authorTitle = document.createElement("p");
                authorTitle.style = "font-style: italic";
                authorTitle.innerText = "Author: ";
                cardBody.appendChild(authorTitle);
                author.value = book.authorName;
                author.id = "authorSlot";
                author.name = "author";
                author.className = "card-body";
                author.style = "background-color: " + book.colour;
                cardBody.appendChild(author);
                cardBody.appendChild(document.createElement("br"));

                const genre = document.createElement("input");
                const genreTitle = document.createElement("p");
                genreTitle.style = "font-style: italic";
                genreTitle.innerText = "Genre: ";
                cardBody.appendChild(genreTitle);
                genre.value = book.genre;
                genre.id = "genreSlot";
                genre.name = "genre";
                genre.className = "card-body";
                genre.style = "background-color: " + book.colour;
                cardBody.appendChild(genre);
                cardBody.appendChild(document.createElement("br"));

                const desc = document.createElement("input");
                const descTitle = document.createElement("p");
                descTitle.style = "font-style: italic";
                descTitle.innerText = "Description: ";
                cardBody.appendChild(descTitle);
                desc.id = "descSlot";
                desc.value = book.desc;
                desc.name = "desc";
                desc.className = "card-body";
                desc.style = "background-color: " + book.colour;
                cardBody.appendChild(desc);
                cardBody.appendChild(document.createElement("br"));

                const read = document.createElement("input");
                const readTitle = document.createElement("p");
                readTitle.style = "font-style: italic";
                readTitle.innerText = "Read: ";
                cardBody.appendChild(readTitle);
                read.type = "checkbox"
                read.id = "readSlot";
                read.checked = book.nowRead;
                read.name = "read";
                read.className = "card-body";
                cardBody.appendChild(read);

                cardBody.appendChild(document.createElement("br"));


                const colour = document.createElement("input");
                const colourTitle = document.createElement("p");
                colourTitle.style = "font-style: italic";
                colourTitle.innerText = "Colour: ";
                cardBody.appendChild(colourTitle);
                colour.id = "colourSlot";
                colour.value = book.colour;
                colour.type = "color";
                colour.name = "colour";
                colour.className = "card-body";
                colour.placeholder = "" + book.colour;
                colour.style = "background-color: " + book.colour;
                cardBody.appendChild(colour);

                cardBody.appendChild(document.createElement("br"));
                cardBody.appendChild(document.createElement("br"));

                card.style = "background-color: " +  book.colour;

                const deleteButton = document.createElement("a");
                deleteButton.className = "card-link";
                deleteButton.id = "buttonDel";
                deleteButton.src = "url = ('https://b.kisscc0.com/20190405/ljw/kisscc0-rubbish-bins-waste-paper-baskets-recycling-bin-w-primary-trashcan-full-5ca7f9537ac661.4475366615545122115029.png')";
                deleteButton.addEventListener("click", function () {
                    deleteBook(book.id);
                })
                
                const deleteDiv = document.createElement("div");
                deleteDiv.id = "deleteButtonDiv";
                deleteButton.appendChild(deleteDiv);
                cardBody.appendChild(deleteButton);
                const updateButton = document.createElement("button");
                updateButton.id = "updateButtonTwo";
                updateButton.className = "btn btn-danger btn-lg";
                updateButton.innerText = "Update";
                updateButton.type = "submit";
                cardBody.appendChild(updateButton);
                

                card.addEventListener("submit", function(event) {
                    event.preventDefault();
                    console.log(this.title);
                    const data = {
                        title: this.title.value,
                        authorName: this.author.value,
                        genre: this.genre.value,
                        desc: this.desc.value,
                        nowRead: this.read.checked,
                        colour: this.colour.value,
                    }
                 
                    fetch("http://localhost:8081/updateBook/?id="+ book.id, { 
                        method: "PUT",
                        body: JSON.stringify(data),
                        headers: {
                            "Accept":"application/json",
                            'Content-Type': "application/json"
                        }
                    }).then(response => {   
                        return response.json(); 
                    }).then(data => { 
                        console.log(data);
                    }).catch(error => console.log(error));

                  location.reload();
                  bookOutput.appendChild(document.createElement("br"));
                 
                });               
            });
        }).catch(error => console.error(error));
}

renderBook();

function deleteBook(id) {
    fetch("http://localhost:8081//removeBook/" + id, {
      method: "DELETE"
    }).then(response => {
       console.log(response);
       renderBook();
 }).catch(error => console.error(error));
}




  










