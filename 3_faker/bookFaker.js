const faker = require('faker');

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
    console.log(authorCnt);
    for(let i = 0; i < authorCnt; i++){
        bookAuthors.push(faker.random.arrayElement(authors));
    }
    return {
        id : id,
        title : faker.lorem.words(titleLength),
        teaser: faker.lorem.paragraph(),
        authors : bookAuthors
    };
};
console.log(generateBook());
