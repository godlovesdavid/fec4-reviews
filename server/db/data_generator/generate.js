const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;  

/*
/reviews/:id - GET : User gets all reviews for an item based on an id 
/reviews/ - POST : User fills out a form with the following data pertaining to item id: product rating, review title, review text, photos, videos, recommend, nickname, email, fit, did they read reviews, where did they buy, feedback for seller, and a checkbox for accepting privacy policy.  The data in bold is required on REI website.

Review Schema
Rating (int, 1-5) Not null
Title (str) Not null
Text (str) Not null
Recommend (boolean) not null
Fit (num, 0-5) Not null
itemID (num) Not null
helpful (num) Default 0
notHelpful (num) Default 0
flag (boolean) ?
Name (str) Not null

sampleItems = [
  {
    itemId,
    companyName,
    productName
  }
]
*/

const createProducts = createCsvWriter({  
  path: 'products.csv',
  header: [
    {id: 'itemId', title: 'itemId'},
    {id: 'companyName', title: 'companyName'},
    {id: 'productName', title: 'productName'}
  ]
});

const createReviews = createCsvWriter({  
  path: 'reviews.csv',
  header: [
    {id: 'rating', title: 'rating'},
    {id: 'title', title: 'title'},
    {id: 'text', title: 'text'}
    {id: 'recommend', title: 'recommend'},
    {id: 'name', title: 'name'},
    {id: 'fit', title: 'fit'}
    {id: 'itemId', title: 'itemId'},
    {id: 'helpful', title: 'helpful'},
    {id: 'notHelpful', title: 'text'}
    {id: 'flag', title: 'flag'},
    {id: 'flag', title: 'flag'}
  ]
});


const generateData = (numOfReviews, numOfProducts) {
  createProducts.writeRecords(generateProducts(numOfProducts))
    .then(() => console.log('************ Wrote 10M products...'))
    .then(() => createReviews.writeRecords(generateReviews (numOfReviews, numOfProducts)))
    .then(() => console.log('************ Wrote reviews for the products.'))
}

// Helper functions

const generateReviews = (numOfProducts) => {
  const reviews = [];
  
  for (let i = 1; i <= numOfProducts; i++) {
      let randomAmt = generateNum(0, 50),
          count = 0;
      while (count < randomAmt) {
        reviews.push(generateReview(numOfProducts));
        count++;
      }
    }
  return reviews;
}

const generateProducts = (numOfProducts) => {
  let products = [];
  for (let itemId = 1; itemId <= numOfProducts; itemId++) {
    products.push(generateSampleItems(itemId))
  }
  return products;
}

const generateNum = function(low, high) {
  return low + Math.floor(Math.random() * (high + 1 - low));
}

const generateBoolean = () => {
  if (generateNum(0, 1) === 0) {
    return false;
  }
  return true;
}

const generateReview = (itemId) => {
  return {
    rating: generateNum(1, 5),
    title: faker.lorem.words(),
    text: faker.lorem.paragraph(),
    recommend: generateBoolean(),
    name: faker.lorem.firstName(),
    fit: generateNum(0, 5),
    itemId,
    helpful: generateNum(0, 50),
    notHelpful: generateNum(0, 50),
    flag: false,
    createdAt: faker.date.between('2015-01-01', '2019-02-28')
  }
}

const generateSampleItems = (itemId) => {
  return {
    itemId,
    companyName: faker.company.companyName(),
    productName: faker.company.productName()
  }
}

generateData(1000, 100);