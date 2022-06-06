function pegarKeyCode(event) {
  if (!event.metaKey) {
    event.preventDefault();
  }

  var k1 = event.keyCode;
  var k2 = event.key;
  var k3 = event.code;

  var ref1 = document.getElementById('keyCode');
  var ref2 = document.getElementById('key');
  var ref3 = document.getElementById('code');

  ref1.innerText = k1;
  ref2.innerText = k2;
  ref3.innerText = k3;
}