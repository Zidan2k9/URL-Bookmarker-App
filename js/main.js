//Listen for submit button click

document.getElementById('siteForm').addEventListener('submit',saveBookmark);


//saving the bookmark
function saveBookmark(e){
    console.log('clicked the button');

    //get form vars

    var siteName = document.getElementById('siteName').value;
    //console.log(siteName);

    var siteUrl = document.getElementById('siteURL').value;
    //console.log(siteUrl);



    

    if(!validateForm(siteName,siteUrl)){
       
        return false;
    }
  

    //OR WE CAN USE A REGEX


    /*var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}

function addhttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url;
  }
  return url;
}*/




   var bookmark = {
       name:siteName,
       url:siteUrl
   }

   //test if bookmarks is null
   if(localStorage.getItem('bookmarks') === null){

    //init array
    var bookmarks = [];

    //add to array
    bookmarks.push(bookmark);

    //add to local storage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

   }
   else{
       //fetch bookmarks from local storage
       var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

       //add bookmark to array
       bookmarks.push(bookmark);

       //reset to local storage

       localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
   }

   //clear form data
   document.getElementById('siteForm').reset();

    // refetch bookmarks to add ui element
    fetchBookmarks();


    //prevent the form from submitting

    e.preventDefault();

    
}

//delete Bookmark

function deleteBookmark(url){
    console.log(url);

    //fetch bookmarks from local storage

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //loop through bookmarks

    for(var i = 0; i < bookmarks.length; i++){

        if(bookmarks[i].url == url){
            //remove from array
            bookmarks.splice(i,1);
        }
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    // refetch bookmarks to remove ui element
    fetchBookmarks();

}

//fetch bookmarks

function fetchBookmarks(){
    //get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //console.log(bookmarks);

    //get output id

    var bookmarksResults = document.getElementById('bookmarksResults');

    //Build output

    bookmarksResults.innerHTML ='';

    for(var i = 0;i < bookmarks.length; i++){

        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' +
                                       '<h3>' +name+
                                       ' <a class="btn btn-default" target="_blank" href="'+addhttp(url)+'">Visit </a>'
                                       + ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete </a>'
                                       '</h3>'
                                        '</div>';
    }
}

//ensure that the user inputs a valid url


function validateForm(siteName,siteUrl){

    //if the form fields are empty
    if (!siteName || !siteUrl) {

        alert('Please fill in form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    

    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
  }


/*console.log(bookmark);

   //local storage test
   localStorage.setItem('test','hello world');

   console.log(localStorage.getItem('test'));
   localStorage.removeItem('test');
   console.log(localStorage.getItem('test')); */
