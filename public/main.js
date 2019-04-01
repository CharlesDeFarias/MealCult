const siteUp = document.getElementsByClassName("fa-thumbs-up"),
 siteDown = document.getElementsByClassName("fa-thumbs-down"),
 trash = document.getElementsByClassName("fa-trash");

 Array.from(siteUp).forEach(function(element) {
   element.addEventListener('click', function(){
     const name = this.parentNode.parentNode.childNodes[1].innerText,
     url = this.parentNode.parentNode.childNodes[3].innerText,
     promo = this.parentNode.parentNode.childNodes[5].innerText,
     siteUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText),
     siteDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText);
     fetch('siteUp', {
       method: 'put',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
         'name': name,
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

Array.from(siteDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText,
    url = this.parentNode.parentNode.childNodes[3].innerText,
    promo = this.parentNode.parentNode.childNodes[5].innerText,
    siteUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText),
    siteDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText);
    fetch('siteDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
