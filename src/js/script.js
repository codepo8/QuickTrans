
function onModeChange(event) {
  if (this.widgetMode == "docked") {
    // docked mode
  } else {
    // widget mode
  }
}

// scale the widget to full-screen when on mobile
function goFullscreen() {
  // only scale on mobile, widget-mode will be "widget" on desktop
  if (widget.widgetMode === "application")
    window.resizeTo(screen.availWidth, screen.availHeight);
}


// initialize the widget
window.addEventListener("load", function (ev) {
  // react on widget mode-changes
  widget.addEventListener("widgetmodechange", onModeChange, false);

  // react on widget resolution-changes
  widget.addEventListener("resolution", function () {
    goFullscreen();
  }, false );

  // resize widget to fullscreen
  goFullscreen();
  
  //
  // insert init code here...
  //
}, false);

