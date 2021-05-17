
function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const livre_ul = document.getElementById("romans");
  const url = "http://localhost:8080/ords/hr2/romans";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let romans = data.items; //.results;
      return romans.map(function (roman) {
      // if (roman.titre=='Yvain') {
        let li = createNode("li"),
          span = createNode("span");
        span.innerHTML = `${roman.code} ${roman.titre}`;
        append(li, span);
        append(roman_ul, li);
     // } 
    });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });