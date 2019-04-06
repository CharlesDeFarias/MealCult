const siteUp = document.getElementsByClassName("fa-thumbs-up");
const siteDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash");
const submit = document.getElementById("submit");

Array.from(siteUp).forEach(function(element) {
   element.addEventListener('click', function(){
     const site = this.parentNode.parentNode.childNodes[1].innerText;
     const url = this.parentNode.parentNode.childNodes[3].innerText;
     const promo = this.parentNode.parentNode.childNodes[5].innerText;
     const siteUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText);
     const siteDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText);
     fetch('siteUp', {
       method: 'put',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
         'site': site,
         'url': url,
         'promo': promo,
         'siteUp': siteUp,
         'siteDown': siteDown
         // if you want it to do one i would make it so you only have to do one of these, either siteup or site down. you'd ahve an if statement, if siteup in req.body then we do the site up task else we do the site down task
         //either way, one of the two buttons is  being clicked. The thing that gets clicked will be checked in the routes.js. If the body request has a siteup property, action is taken to add 1 to it.
        })
     })
     .then(response => {
       if (response.ok) return response.json()
     })
     .then(data => {
       window.location.reload(true)
     })
   });
 });

Array.from(siteDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const site = this.parentNode.parentNode.childNodes[1].innerText;
    const url = this.parentNode.parentNode.childNodes[3].innerText;
    const promo = this.parentNode.parentNode.childNodes[5].innerText;
    const siteUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText);
    const siteDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText);
    fetch('siteDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'site': site,
        'url': url,
        'promo': promo,
        'siteUp': siteUp,
        'siteDown':siteDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })
  });
});

submit.addEventListener("click",function(){
  //may be cleaner to make the whole thing a form in the ejs. look into later
    const site = document.querySelector("input[name=site]").value;
    const name = document.querySelector("input[name=name]").value;
    const restaurant = document.querySelector("input[name=restaurant]").value;
    const review = document.querySelector("input[name=review]").value;
    fetch('reviews', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'site': site,
        'name': name,
        'restaurant': restaurant,
        'review': review,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    // .then(data => {
    //   window.location.reload(true)
    // })
});

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const url = this.parentNode.parentNode.childNodes[1].innerText
//         const promo = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'site': site,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
