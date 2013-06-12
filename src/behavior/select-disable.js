import "../core/document";
import "../core/noop";
import "../event/event";

var d3_behavior_selectDisable = "MozUserSelect" in d3_documentElement.style
    ? function() {
      var style = d3_document.body.style,
          select = style.MozUserSelect;
      style.MozUserSelect = "none";
      return function() { style.MozUserSelect = select; };
    }
    : function(type) {
      var w = d3.select(d3_window).on("selectstart." + type, d3_eventCancel);
      return function() { w.on("selectstart." + type, null); };
    };
