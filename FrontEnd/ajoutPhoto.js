let form = document.getElementById('photo-form');
let token = document.createElement("input")
token.value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MDA1Mjg1MSwiZXhwIjoxNjkwMTM5MjUxfQ.EkwAN8rWKvaakW2ZPKgHgTlrkhNZoNBZrw-kqiefkCA"
token.type = "hidden"
token.name = "token"
form.appendChild(token)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${formData.get('token')}`
    },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Photo envoyée avec succès !');
    } else {
      console.error('Erreur lors de l\'envoi de la photo.');
    }
  })
  .catch(error => {
    console.error(error);
  });
});
