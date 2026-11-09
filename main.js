// Copy button for the connect command.
(function () {
  var btn = document.getElementById("copy");
  var hint = document.getElementById("hint");
  var cmd = document.getElementById("cmd");
  var original = hint.textContent;
  var text = "connect 89.190.158.118";

  function done(ok) {
    btn.textContent = ok ? "تم النسخ" : "انسخه يدوياً";
    hint.textContent = ok ? "تم نسخ الأمر. الصقه في الكونسول." : "حدّد السطر وانسخه يدوياً.";
    setTimeout(function () {
      btn.textContent = "نسخ";
      hint.textContent = original;
    }, 2500);
  }

  btn.addEventListener("click", function () {
    var fallback = function () {
      var r = document.createRange();
      r.selectNodeContents(cmd);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      done(false);
    };
    try {
      navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    } catch (e) {
      fallback();
    }
  });
})();
