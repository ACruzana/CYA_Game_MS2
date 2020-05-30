/* jshint esversion: 6 */

var main = function () {
  "use strict";
  var canvas = document.getElementById('gameCanvas');
  var ctx = canvas.getContext("2d");

  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Game On", canvas.width / 2, canvas.height / 2);

  $("#option1").on("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(canvas).css("border", "2px solid red");
    var img = document.createElement("img");
    img.src = "/assets/images/2.png";
    img.addEventListener("load", function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height-132);
    });
  });
  $("#option2").on("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(canvas).css("border", "2px solid black");
    var img = document.createElement("img");
    img.src = "/assets/images/3.png";
    img.addEventListener("load", function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height-132);
    });

  });
  $("#option3").on("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(canvas).css("border", "2px solid green");
    var img = document.createElement("img");
    img.src = "/assets/images/4.png";
    img.addEventListener("load", function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height-132);
    });

  });
  $("#option4").on("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(canvas).css("border", "2px solid blue");
    var img = document.createElement("img");
    img.src = "/assets/images/5.png";
    img.addEventListener("load", function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height-132);
    });
  });
};

$(document).ready(main);