L.Control.SimpleToolbar = L.Control.extend({
  initialize(options) {
    if (!options.actions) {
      throw Error('Expecting a list of actions in options');
    }
    L.Control.prototype.initialize.call(this, options);
  },

  onAdd(map) {
    const container = L.DomUtil.create('div', 'leaflet-simple-toolbar');
    this._initializeActionListLayout(container);
    return container;
  },

  _initializeActionListLayout(container) {
    const listEle = L.DomUtil.create('ul', 'leaflet-bar', container);
    this.options.actions.forEach((action) => {
      const actionLiEle = L.DomUtil.create('li', null, listEle);
      // For each action
      const anchorEle = L.DomUtil.create('a', null, actionLiEle);
      anchorEle.innerHTML = 'H';

      const actionLiEle2 = L.DomUtil.create('li', null, listEle);
      // For each action
      const anchorEle2 = L.DomUtil.create('a', null, actionLiEle2);
      anchorEle.innerHTML = '@';
    });
  },
});

