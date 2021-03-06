window.addEventListener("load", function () {
  const url = "https://api.chucknorris.io/jokes/random";

  function getRandomBetweenTwo(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  function loadData() {
    var xhr = new XMLHttpRequest();
    const currentNumber = getRandomBetweenTwo(0, 5000);
    console.log(currentNumber);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        document.getElementById("api-image").src = data.icon_url;
        document.getElementById("api-joke").innerHTML = data.value;
        document
          .querySelector(".blockquote-footer")
          .classList.remove("invisible");
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  loadData();
});
