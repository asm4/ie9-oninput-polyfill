(function (d) {
  if (navigator.userAgent.indexOf('MSIE 9') === -1) return;
  var elements = [], values = [];

  d.addEventListener('selectionchange', function() {
    var actEl = d.activeElement;

    if (actEl.tagName === 'TEXTAREA' || (actEl.tagName === 'INPUT' && actEl.type === 'text')) {
      var idx = elements.indexOf(actEl), el = elements[idx] || elements.push(actEl);
      if (el.value !== values[idx]) {
        values[idx] = el.value;
        var ev = d.createEvent('CustomEvent');
        ev.initCustomEvent('input', true, true, {});
        el.dispatchEvent(ev);
      }
    }
  });
})(document);
