var i = 0

function timedCount() {
  console.log("LOOK AT ME")
  postMessage(i);
  setTimeout("timedCount()",10000);
}

timedCount();
