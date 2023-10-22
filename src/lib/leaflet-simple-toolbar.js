L.Control.SimpleToolbar = L.Control.extend({
  initialize(options) {
    if (!options.actions) {
      throw Error('Expecting a list of actions in options');
    }
    L.Control.prototype.initialize.call(this, options);
  },

  onAdd(map) {
    const container = L.DomUtil.create('div');
    this._initializeActionListLayout(container);
    return container;
  },

  _initializeActionListLayout(container) {
    const listEle = L.DomUtil.create('ul', null, container);
    this.options.actions.forEach((action) => {
      const actionLiEle = L.DomUtil.create('li', null, listEle);
    });
  },
});

