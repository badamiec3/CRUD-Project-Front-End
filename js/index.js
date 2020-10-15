const createForm = document.getElementById("createForm");
const bookOutput = document.getElementById("readDiv");

createForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(this.title);
    const data = {
        title: this.title.value,
        authorName: this.author.value,
        genre: this.genre.value,
        desc: this.desc.value,
        nowRead: this.read.value,
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
                card.method = "post";
                bookOutput.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                const title = document.createElement("input");
                title.id = "titleSlot";
                title.name = "title";
                title.className = "card-title";
                title.value = book.title;
                title.placeholder = "" + book.title;
                title.innerText = book.title;
               // title.style = "background-color: " + wood.colour;
                cardBody.appendChild(title);

                const author = document.createElement("input");
                const authorTitle = document.createElement("p");
                authorTitle.innerText = "Author: ";
                cardBody.appendChild(authorTitle);
                author.value = book.author;
                author.id = "authorSlot";
                author.name = "author";
                author.className = "card-body";
                author.placeholder = "" + book.author;
               // author.style = "background-color: " + wood.colour;
                cardBody.appendChild(author);

                const genre = document.createElement("input");
                const genreTitle = document.createElement("p");
                genreTitle.innerText = "Genre: ";
                cardBody.appendChild(genreTitle);
                genre.value = book.genre;
                genre.id = "genreSlot";
                genre.name = "genre";
                genre.className = "card-body";
                genre.placeholder = "" + book.genre;
               // genre.style = "background-color: " + book.colour;
                cardBody.appendChild(genre);

                const desc = document.createElement("input");
                const descTitle = document.createElement("p");
                descTitle.innerText = "Description: ";
                cardBody.appendChild(descTitle);
                desc.id = "descSlot";
                desc.value = book.desc;
                desc.name = "desc";
                desc.className = "card-body";
                desc.placeholder = "" + book.desc;
               // desc.style = "background-color: " + book.desc;
                cardBody.appendChild(desc);

                const read = document.createElement("input");
                const readTitle = document.createElement("p");
                readTitle.innerText = "Read: ";
                cardBody.appendChild(readTitle);
                read.id = "softSlot";
                read.value = book.read;
                read.name = "read";
                read.className = "card-body";
                read.placeholder = "" + book.read;
              //  read.style = "background-color: " + wood.colour;
                cardBody.appendChild(read);

                cardBody.appendChild(document.createElement("br"));

               // card.style = "background-color: " +  wood.colour;

                const deleteButton = document.createElement("a");
                deleteButton.className = "card-link";
                deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", function () {
                    deleteBook(book.id);
                })
                cardBody.appendChild(deleteButton);

                const updateButton = document.createElement("button");
                updateButton.className = "card-link";
                updateButton.innerText = "Update";
                updateButton.type = "submit";
                card.appendChild(updateButton);
                

                card.addEventListener("submit", function(event) {
                    event.preventDefault();
                    console.log(this.title);
                    const data = {
                        title: this.title.value,
                        authorName: this.author.value,
                        genre: this.genre.value,
                        desc: this.desc.value,
                        nowRead: this.read.value,
                    }
                 
                    fetch("http://localhost:8081/updateBook?id="+ book.id, { 
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




  










