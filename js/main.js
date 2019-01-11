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

    //prevent the form from submitting

    e.preventDefault();
}

/*console.log(bookmark);

   //local storage test
   localStorage.setItem('test','hello world');

   console.log(localStorage.getItem('test'));
   localStorage.removeItem('test');
   console.log(localStorage.getItem('test')); */
