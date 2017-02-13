
// a = document.getElementById('form-container').submit(displayInfo);
// document.forms["form-container"].submit(displayInfo);
    // $('#form-container').submit(displayInfo);

    var dd = {};
 document.getElementById('form-container').addEventListener("submit", function (event) {
   event.preventDefault();
   var liRemove = document.querySelectorAll('li');

   liRemove.forEach(li => li.remove());
    var hi = 'dd'
    var search = document.querySelector("#wiki-Search");
     var searchSubject = search.value;
    // 
    
     displayInfo(`http://en.wikipedia.org/w/api.php?action=opensearch&search=${searchSubject}`);
      search.value = '';
      
      
  });


function displayInfo(wikiURL){

  var results = document.querySelector(".results");



 $.ajax(wikiURL,{
         

            data:  {
                // formatversion: 2
                format: 'json'
                // prop: 'revisions',
                // rvprop: 'content',
            },
         
            dataType:'jsonp',
            success: function(data){



              for (var i = 0; i < data[1].length; i++) {
         
                var title = data[1][i]; 

                var link = data[3][i];
                var info = data[2][i];
                var ul = document.querySelector('ul');
                ul.insertAdjacentHTML('beforeend', `<li><a href="${link}">${title}</a><p> ${info}</p> </li>`);
              };

              
                enlargeLink();


             //  var page = data.query.pages;
             //  var pageID = Object.keys(page)[0];

             //      // console.log('page= '+JSON.stringify(page[pageID]));


             //  var url = page[pageID].fullurl;
             //         // console.log('url= '+JSON.stringify(url));


             // $wikiElem.append('<li> <a href="'+url+'">'+city+'</a></li>');
             // $text.append(page[pageID].extract);
              // var entire = data;
                 // var text = data.query.pages['11388236'].extract;
              // var astricRevisons = data.query.pages['11388236'].revisions[0]["*"];


                         // console.log(JSON.stringify(entire));
                         // console.log(JSON.stringify(astricRevisons));
                       
                 
 
            }





        });
   
  return false;
}  



function largerLink(){


  // console.log(this);
  // var links = document.querySelectorAll('li');
  this.childNodes[0].classList.add('larger-link');
}


function enlargeLink(){
 var articles = document.querySelectorAll('li');
// for (var i = 0; i < articles.length; i++) {
//   console.log(articles[i]);
console.groupCollapsed('bugers');
  console.log('d', articles);
  console.groupEnd();
 articles.forEach(article => article.addEventListener('mouseover', largerLink))
}
