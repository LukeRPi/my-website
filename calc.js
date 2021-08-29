var pi = 3.141592654



function calclambda() {
  var freq1 = document.getElementById('freq').value;
  var lambda = 300/freq1
  document.getElementById("lambdares").innerHTML = lambda + " m";
}

function calcfreq() {
  var lambda2 = document.getElementById('lambda1').value;
  var freq2 = 300/lambda2
  document.getElementById("freqres").innerHTML = freq2 + " MHz";
}

function calcrecap() {
  var mulhzxc = document.getElementById('mulhzxc').value;
  if (mulhzxc === "1") {
    var mulhzxc = 1;
  }
  else if (mulhzxc === "2") {
    var mulhzxc = 1000;
  }
  else if (mulhzxc === "3") {
    var mulhzxc = 1000000;
  }
  else if (mulhzxc === "4") {
    var mulhzxc = 1000000000;
  }

  var mulcapxc = document.getElementById('mulcapxc').value;
  if (mulcapxc === "1") {
    var mulcapxc = 1;
  }
  else if (mulcapxc === "2") {
    var mulcapxc = 0.001;
  }
  else if (mulcapxc === "3") {
    var mulcapxc = 0.000001;
  }
  else if (mulcapxc === "4") {
    var mulcapxc = 0.000000001;
  }
  else if (mulcapxc === "5") {
    var mulcapxc = 0.000000000001;
  }


  var f = document.getElementById('f').value;
  var c = document.getElementById('c').value;
  var reatt = 1/(6.28*f*c*mulhzxc*mulcapxc)
  document.getElementById("reatres").innerHTML = reatt + " Ohm";
}






function calcreind() {
  var mulhzxl = document.getElementById('mulhzxl').value;
  if (mulhzxl === "1") {
    var mulhzxl = 1;
  }
  else if (mulhzxl === "2") {
    var mulhzxl = 1000;
  }
  else if (mulhzxl === "3") {
    var mulhzxl = 1000000;
  }
  else if (mulhzxl === "4") {
    var mulhzxl = 1000000000;
  }

  var mulindxl = document.getElementById('mulindxl').value;
  if (mulindxl === "1") {
    var mulindxl = 1;
  }
  else if (mulindxl === "2") {
    var mulindxl = 0.001;
  }
  else if (mulindxl === "3") {
    var mulindxl = 0.000001;
  }
  else if (mulindxl === "4") {
    var mulindxl = 0.000000001;
  }

  var fi = document.getElementById('fi').value;
  var l = document.getElementById('l').value;
  var reattind = 6.28*fi*l*mulhzxl*mulindxl
  document.getElementById("reatindres").innerHTML = reattind + " Ohm";
}







function calcfreqlc() {
  var mulindlc = document.getElementById('mulindlc').value;
  if (mulindlc === "1") {
    var mulindlc = 1;
  }
  else if (mulindlc === "2") {
    var mulindlc = 0.001;
  }
  else if (mulindlc === "3") {
    var mulindlc = 0.000001;
  }
  else if (mulindlc === "4") {
    var mulindlc = 0.000000001;
  }

  var mulcaplc = document.getElementById('mulcaplc').value;
  if (mulcaplc === "1") {
    var mulcaplc = 1;
  }
  else if (mulcaplc === "2") {
    var mulcaplc = 0.001;
  }
  else if (mulcaplc === "3") {
    var mulcaplc = 0.000001;
  }
  else if (mulcaplc === "4") {
    var mulcaplc = 0.000000001;
  }
  else if (mulcaplc === "5") {
    var mulcaplc = 0.000000000001;
  }


  var fl = document.getElementById('fl').value;
  var fc = document.getElementById('fc').value;
  var radlc = Math.sqrt(fl*mulindlc*fc*mulcaplc)
  var freqrres = 1/(2*pi*radlc)
  document.getElementById("freqrres").innerHTML = freqrres + " Hz";
}



function calcdbm() {
  var mw = document.getElementById("mw").value;
  var logmw = Math.log10(mw);
  var dbmres = 10*logmw
  document.getElementById("dbmres").innerHTML = dbmres + " dBm";
}


function calcmw() {
  var dbm = document.getElementById("dbm").value;
  var espdbm = dbm/10
  var mwres = Math.pow(10, espdbm)
  document.getElementById("mwres").innerHTML = mwres + " mW";
}




function calcrled() {
  var cled = document.getElementById('cled').value;
  if (cled === "1") {
    alert("Selezionare un colore");
    return
  }
  else if (cled === "2") {
    var cled = 1.8;
  }
  else if (cled === "3") {
    var cled = 2.2;
  }
  else if (cled === "4") {
    var cled = 2.4;

  } else if (cled === "5") {
    var cled = 4;

  } else if (cled === "6") {
    var cled = 3.5;
  }


  var vin = document.getElementById('vin').value;
  var rledres = (vin - cled) / 0.02
  document.getElementById("rledres").innerHTML = rledres + " Ohm";
}
