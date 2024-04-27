let bIsIndex = false;
if (window.location.pathname.endsWith('index.html')) {
  bIsIndex = true;
}

let minhaLocalizacao = localStorage.getItem('minhaLocalizacao');
if (bIsIndex || !minhaLocalizacao || minhaLocalizacao == "") {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocalização não é suportada por este navegador.");
  }
}
else
{
  let nomeLocalizacao = document.querySelector(".nome-localizacao");
  nomeLocalizacao.innerHTML = minhaLocalizacao;
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("Latitude: " + lat + ", Longitude: " + lon);

  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt`)
    .then(response => response.json())
    .then(data => showLocation(data))
    .catch(error => console.error(error))
}

function showLocation(data) {
  console.log(data);
  let nomeLocalizacao = document.querySelector(".nome-localizacao");
  if (data.erro) {
    nomeLocalizacao.innerHTML = "Local não encontrado";
  }
  else {
    let varNomeLocalizacao = data.city + ", " + data.principalSubdivisionCode;
    // armazena a localidade localStorage
    localStorage.setItem('minhaLocalizacao', varNomeLocalizacao);
    nomeLocalizacao.innerHTML = varNomeLocalizacao;
  }
}