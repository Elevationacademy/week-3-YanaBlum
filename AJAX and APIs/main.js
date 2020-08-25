// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })


// const useData = function(data){
//   console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
//   }); 


// const fetch = function(data){
//   $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
//   })
  
// }


//exrec 1 

// const fetch = function(isbn){
//   $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ isbn ,
//     success: function (data) {
//         console.log(data.items[0].volumeInfo.title);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
//   })
  
// }
// fetch(9780575087057)
// fetch(9782806269171)
// fetch(1440633908)
// fetch(9781945048470)
// fetch(9780307417138)

//exrec 2


// const getUrl = function(queryType, queryValue){
// return `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
// }

// const fetch = function (queryType, queryValue){
//   $.ajax({
//     method: "GET",
//     url: getUrl(queryType, queryValue),
//     success: function(data){
//       console.log(data.items[0].volumeInfo)
//     }
//   })
// }

// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")



//exrec 3

const getUrl = function(queryType, queryValue){
return `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
}

const fetch = function (queryType, queryValue){
  $.ajax({
    method: "GET",
    url: getUrl(queryType, queryValue),
    success: function(data){
    //  console.log(data)
    for(let dataIndex in data.items){
    // console.log(data.items[dataIndex])
      
      const book = (data.items[dataIndex])    

      console.log(book.volumeInfo.title)
      console.log(book.volumeInfo.authors)

     }
    }
  })
}

fetch("title", "The Wise Man's Fears")