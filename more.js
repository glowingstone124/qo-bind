    function submitForm() {
  const tokenGenerator = new TokenGenerate();
  var username = document.getElementById("username").value;
  var qq = parseInt(document.getElementById("qq").value);
  var token1 = tokenGenerator.token(username, qq);
  console.log(token1)
  var tokenPart1 = token1.slice(0, 8);
  var tokenPart2 = token1.slice(8);
  var finaltoken = "QO-" + tokenPart1 + "-" + tokenPart2 + "-" + generateRandomNumber();
  var url = "http://qoriginal.vip:8080/qo/upload/registry?name=" + encodeURIComponent(username) + "&uid=" + encodeURIComponent(qq) + "&token=" + finaltoken;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var responseElements = document.getElementsByClassName("response");
        for (var i = 0; i < responseElements.length; i++) {
          responseElements[i].textContent = "完成！";
        }
    }
  };
  xhr.send();
}

    function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100000000);
  var paddedNumber = randomNumber.toString().padStart(8, '0');
  return paddedNumber;
}
