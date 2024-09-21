





let searchbtn = document.getElementById("searchbtn")


searchbtn.onclick = function(){
    bookcollect()
}

async function bookcollect(){
    let input = document.getElementById("input")
    let search = document.getElementById("search")
   
    let title = input.value
    search.style.display = "none"
    decks.style.display = "grid"
    try{
        let response = await fetch(`https://openlibrary.org/search.json?title=${title}`)
        let data = await response.json()
        if (!data == ok) {
            throw new Error("Failed to fetch the title of book from OpenLibrary")
        }

        let docs = data.docs
        let len = docs.length
        let mid = Math.floor(len / 5);
        for (let i = 0; i < mid; i++) {
            try{
                let key = docs[i].key

                let books = await fetch(`https://openlibrary.org${key}.json`)
                if (!books.ok){
                    throw new Error("Failed to fetch book")
                }
                let bookdata = await books.json()
                console.log(bookdata)
                let cover = bookdata.covers[0]
                try{
                    let imgurl = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`
                    let booklist = {
                        title: bookdata.title,
                        author: docs[i].author_name[0],
                        image: imgurl,

                    }
                    let div = document.createElement("div")
                    let book = `        
                    <img src="${booklist.imgurl}" alt="${booklist.title} cover">
                    <h3>${booklist.title}</h3>
                    <p>By: ${booklist.author}</p>
        
                    `
                    let decks = document.getElementById("decks")

                    div.innerHTML = book
                    decks.appendChild(div)
                }
                catch (error) {
                    console.log(error)
                }
                
            }
            catch (error) {
                console.log(error)
            }

        }
    }
    catch (error) {
        console.log(error)
    }
}
   
// // Lord of the rings

async function home(){
    
}





