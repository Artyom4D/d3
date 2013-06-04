import "../core/document";
import "../core/noop";

var d3_behavior_select = "MozUserSelect" in d3_document.documentElement.style
    ? function() {
      var style = d3_document.body.style,
          select = style.MozUserSelect;
      style.MozUserSelect = "none";
      return function() { style.MozUserSelect = select; };
    }
    : function() { return d3_noop; };
