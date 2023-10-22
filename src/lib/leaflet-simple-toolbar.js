L.Control.SimpleToolbar = L.Control.extend({
  options: {
    position: 'topleft',
  },

  initialize(options) {
    L.Control.prototype.initialize.call(this, options);
  },

  onAdd(map) {
    const container = L.DomUtil.create('div');    
    return container;
  },
});

