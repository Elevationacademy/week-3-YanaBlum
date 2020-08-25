
// // turn our "template" into html
// var source = $('#store-template').html();

// // compile our template html using handlebars
// var template = Handlebars.compile(source);

// // fill our template with information
// var newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// var newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);




// const items = [
//   { item: "cheese", price: 15 },
//   { item: "arak", price: 68 },
//   { item: "hummus", price: 15 },
//   { item: "pita", price: 5 }
// ]

// const source = $('#store-template').html();
// const template = Handlebars.compile(source);

// for(let item of items){
//   let newHTML = template(item);
//   $('.items').append(newHTML);  
// }




// const menuData = {
//   menu: [
//     { name: "Google", link: "http://google.com" },
//     { name: "Facebook", link: "http://facebook.com" },
//     { name: "Instagram", link: "http://nstagram.com" },
//     { name: "Twitter", link: "http://twitter.com" },
//   ]
// };

// const source = $('#menu-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(menuData);

// // append our new html to the page
// $('.menu').append(newHTML);



// var classData = {
//   classmates: [
//       {name: "That on gal", description: "Always has the ansswer"},
//       {name: "The weird dude", description: "Quick with a smile"},
//       {name: "Taylor", description: "Just Taylor"}
//   ]
// }

// const source = $('#class-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(classData);

// $(`.classmates`).append(newHTML);



// const menuData = {
//   menu: [
//     { name: "Google", link: "http://google.com" , socialNetwork: true },
//     { name: "Facebook", link: "http://facebook.com" , socialNetwork: false },
//     { name: "Instagram", link: "http://nstagram.com" , socialNetwork: true },
//     { name: "Twitter", link: "http://twitter.com" , socialNetwork: true },
//   ]
// };

// const source = $('#menu-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(menuData);

// // append our new html to the page
// $('.menu').append(newHTML);





// const renderFirst = function(){
//   const source = $('#first-template').html();
//   const template = Handlebars.compile(source);
//   let newHTML = template({ text: "This gets rendered" });
//   $('body').append(newHTML);  
// }

// const renderSecond = function(){
//   const source = $('#second-template').html();
//   const template = Handlebars.compile(source);
//   let newHTML = template({ moreText: "This also gets rendered" });
//   $('#special').append(newHTML);  
// }

// renderFirst()
// renderSecond()


// const render3 = function(){
// const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
// const source = $('#animals-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(animals);
// $('#animals').append(newHTML);
// }

// const render4 = function(){
// const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
// const source = $('#languages-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(languages);
// $('#languages').append(newHTML);
// }

// render3()
// render4()
