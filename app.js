//Popup function
function openPopup(id) {
  var ele = document.getElementById(id);
  ele.className = 'fragment'


  /* 
  creating an element as
  <span id='close' onclick="closeDiv()">x</span>
  */
  var spanTag = document.createElement('span')
  spanTag.id = 'close'
  spanTag.innerHTML = 'x'
  spanTag.setAttribute('onclick', `closePopup(${id})`)
  ele.appendChild(spanTag)


  /*creating an element as
  <img class="image" src="./assets/Player1-1.jpg" alt="">
  */

  var image = document.createElement('img');
  image.className = "image";

  //to know from where the click event has been generated
  switch (id) {
    case 'Yuvraj':
      image.src = "./assets/Player1.png";
      break;
    case 'Raina':
      image.src = "./assets/Player1-1.jpg";
      break;
    case 'Harbhajan':
      image.src = "./assets/Player1-2.jpg";
      break;
    case 'Zaheer':
      image.src = "./assets/Player1-3.jpg";
      break;
    case 'Patel':
      image.src = "./assets/Player1-4.jpg";
      break;
    case 'Sreesanth':
      image.src = "./assets/Player1-5.jpg";
      break;
    case 'Dhoni':
      image.src = "./assets/Player2.png";
      break;
    case 'Kohli':
      image.src = "./assets/Player3.png";
      break;
    case 'Gambhir':
      image.src = "./assets/Player4.png";
      break;
    case 'Sachin':
      image.src = "./assets/Player5.png";
      break;
    case 'Sehwag':
      image.src = "./assets/Player6.png";
      break;
  }

  //appending image image to the popup
  ele.appendChild(image)
}


//closing the popup
function closePopup(id) {
  var closeButton = document.getElementById('close')

  //removing the created span x mark for closing
  closeButton.parentNode.childNodes[1].remove()

  //removing the image
  closeButton.parentNode.childNodes[0].remove()
  id.removeAttribute('class')
}