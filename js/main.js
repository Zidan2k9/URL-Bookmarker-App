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

   console.log(bookmark);

   //local storage test
   localStorage.setItem('test','hello world');

   console.log(localStorage.getItem('test'));

    //prevent the form from submitting

    e.preventDefault();
}