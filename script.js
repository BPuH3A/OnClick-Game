const scorelink = document.getElementById("scorecont");
const timelink = document.getElementById("timecont");

const btnlink = document.getElementsById("button");

const timeword1 = document.getElementsById("timeconttxt1");
const timeword2 = document.getElementsById("timeconttxt2");

const rbtn = document.getElementById("click");

const fucked = document.getElementById("fuck");

const bord = document.getElementById("game");

const screamer = document.getElementById("scream");
const gif = document.getElementById("gif");

function bntHidden() {
  document.getElementById("button").style.visibility = "hidden";
  document.getElementById("game").style.visibility = "hidden";
  let time = 60;
  scorecont.innerHTML = 0;
  setTimeout(timer, 0);
  a = setInterval(timer, 1000);
  function timer() {
    timecont.innerHTML = time;
    time--;
    timeconttxt1.innerHTML = "time:";
    timeconttxt2.innerHTML = "sec";
    if (time <= -1) {
      clearInterval(a);
      button.innerHTML = "Again";
      document.getElementById("button").style.visibility = "visible";
      timecont.innerHTML = "";
      timeconttxt1.innerHTML = "Time is up!";
      timeconttxt2.innerHTML = "";
      document.getElementById("click").style.visibility = "hidden";
      document.getElementById("fuck").style.visibility = "hidden";
      document.getElementById("game").style.visibility = "visible";
    }
  }
  document.getElementById("click").style.visibility = "visible";
  document.getElementById("fuck").style.visibility = "visible";
}
function cl() {
  let score = 0;
  fix.onclick = function () {
    document.getElementById("fix").style.visibility = "hidden";
    document.getElementById("gif").style.visibility = "hidden";
    window.location.reload();
  };
  fuck.onclick = function () {
    score = score - 3;
    scorecont.innerHTML = score;
    var rplmn = Math.random() - 0.5;
    let plmn;
    if (rplmn >= 0) {
      plmn = 1;
    }
    if (rplmn < 0) {
      plmn = -1;
    }
    var xx = Math.random() * 95 * plmn;
    var yy = Math.floor(Math.random() * 540);
    click.style.marginLeft = xx + "%";
    click.style.marginTop = yy + "px";
    document.getElementById("fuck").style.border = "solid red";
    setTimeout(red, 250);
    function red() {
      document.getElementById("fuck").style.border = "solid black";
    }
    if (score <= -5) {
      scream.play();
      document.getElementById("gif").style.visibility = "visible";
      setTimeout(fixer, 3000);
      function fixer() {
        document.getElementById("fix").style.visibility = "visible";
      }
    }
  };
  click.onclick = function () {
    var rplmn = Math.random() - 0.5;
    let plmn;
    if (rplmn >= 0) {
      plmn = 1;
    }
    if (rplmn < 0) {
      plmn = -1;
    }
    var x = Math.random() * 95 * plmn;
    var y = Math.floor(Math.random() * 540 + 2);
    click.style.marginLeft = x + "%";
    click.style.marginTop = y + "px";
    score++;
    scorecont.innerHTML = score;
    document.getElementById("fuck").style.border = "solid yellowgreen";
    setTimeout(green, 150);
    function green() {
      document.getElementById("fuck").style.border = "solid black";
    }
  };
}
