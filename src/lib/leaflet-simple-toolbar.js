import '../lib/leaflet-simple-toolbar.css';

L.Control.SimpleToolbar = L.Control.extend({
  initialize(options) {
    if (!options.actions) {
      throw Error('Expecting a list of actions in options');
    }
    L.Control.prototype.initialize.call(this, options);
    this._actions = options.actions;
  },

  onAdd(map) {
    const container = L.DomUtil.create('div', 'leaflet-simple-toolbar');
    L.DomEvent.disableClickPropagation(container);
    this._initializeActionListLayout(container);
    map._simpleToolbar = this;
    return container;
  },

  _initializeActionListLayout(container) {
    const listEle = L.DomUtil.create('ul', 'leaflet-bar', container);
    this._actions.forEach((action) => {
      const actionLiEle = L.DomUtil.create('li', null, listEle);
      action._container = actionLiEle;
      L.Util.stamp(action);
      action._map = this._map;

      const anchorEle = L.DomUtil.create('a', null, actionLiEle);
      anchorEle.innerHTML = action.iconHtml;
      anchorEle.title = action.tooltip;

      L.DomEvent 
        .addListener(anchorEle, 'click', L.DomEvent.stopPropagation)
        .addListener(anchorEle, 'click', L.DomEvent.preventDefault)
        .addListener(anchorEle, 'click', action.handler, action);
    });
  },
});

L.Control.SimpleToolbar.Action = L.Class.extend({
  initialize(options) {
    L.Util.setOptions(this, options);
    this.iconHtml = this.options.iconHtml;
    this.tooltip = this.options.tooltip;
  },

  disableControl() {
    L.DomUtil.addClass(this._container, 'disabled');
    if (this.options.disabledTooltip) {
      const anchor = this._container.querySelector('a');
      anchor.setAttribute('title', this.options.disabledTooltip);
    }
  },

  enableControl() {
    L.DomUtil.removeClass(this._container, 'disabled');
    const anchor = this._container.querySelector('a');
    anchor.setAttribute('title', this.options.tooltip);
  }
});
