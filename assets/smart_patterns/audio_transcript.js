function Audio_transcript() {
  this.init = function () {
    this.settings = {
      text: "Type Your Text Here",
      defaultText: "Type Your Text Here"
    };
    var widget = new Widget(this.settings);
    widget.insert(this.settings);
    widget.hideEditButton();
    return widget.getWidgetId();
  };

  this.buildFromJson = function (widgetId, settings) {
    this.settings = settings;
    this.widget = new Widget(this.settings, widgetId);
    this.widget.hideEditButton();
  };
}

Audio_transcript.prototype = Object.create(MainWidget.prototype);