const axios = require('axios');

axios.get('http://localhost:3001/authors/13')
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{console.log(err)});

var book42 = {};
fetchBook42 = async () => {
    book42 = {};
    await axios.get('http://localhost:3001/books/42')
        .then((res) => {
            book42 = res.data;
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            console.log(book42);
        });

    authorRequests = [];
    book42.authors.forEach((authorId) => {
        authorRequests.push(
            axios.get(`http://localhost:3001/authors/${authorId}`)
                .then((res)=>{return res.data})
                .catch((err)=>{console.log(err)})
        );
    });
    bookAuthors = await Promise.all(authorRequests);
//    console.log(bookAuthors);
    book42.authors = bookAuthors;
    console.log(book42);
};
fetchBook42();
