
function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const livre_ul = document.getElementById("livres");
  const url = "http://localhost:8080/ords/hr2/livres";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let livres = data.items; //.results;
      return livres.map(function (livre) {
      // if (livre.titre=='maths') {
        let li = createNode("li"),
          span = createNode("span");
        span.innerHTML = `${livre.code} ${livre.titre}`;
        append(li, span);
        append(livre_ul, li);
     // } 
    });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });