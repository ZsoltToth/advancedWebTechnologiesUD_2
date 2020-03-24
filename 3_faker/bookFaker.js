const faker = require('faker');
const fs = require('fs');

//console.log(`${faker.name.firstName()} ${faker.name.lastName()}`);

generateAuthor = () =>{
    return {
        name : `${faker.name.firstName()} ${faker.name.lastName()}`,
        nationality : faker.address.country()
    };
};
var authors = [];
for(let i = 0; i < 100; i++){
    author = generateAuthor();
    author.id = i;
    authors.push(author);
}
//console.log(authors);

generateBook = (id) => {
    titleLength = Math.round(Math.random() * 3) + 1;
    authorCnt = Math.round(Math.random() * 2) + 1;
    bookAuthors = [];
    //console.log(authorCnt);
    for(let i = 0; i < authorCnt; i++){
    bookAuthors.push(faker.random.arrayElement(authors).id);
    }
    return {
        id : id,
        title : faker.lorem.words(titleLength),
        teaser: faker.lorem.paragraph(),
        authors : bookAuthors
    };
};
var books = [];
for(let i = 0; i < 1000; i++){
    books.push(generateBook(i));
}
//console.log(books[0]);
fs.writeFile(
    'database.fake.json',
    JSON.stringify({
        authors : authors,
        books: books
    }),
    (err) => {}
);
