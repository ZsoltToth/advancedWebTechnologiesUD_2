const axios = require('axios');

axios.get('http://localhost:3001/authors/13')
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{console.log(err)});

var book42 = {};
axios.get('http://localhost:3001/books/42')
    .then((res)=>{
        book42 = res.data;
        console.log(res.data);
        res.data.authors.forEach((authorId)=>{
            axios.get(`http://localhost:3001/authors/${authorId}`)
                .then((r)=>{console.log(r.data)})
                .catch((e)=>{console.log(e)});
        });
    })
    .catch((err)=>{console.log(err)})
    .finally(()=>{
        console.log(book42);
    });
