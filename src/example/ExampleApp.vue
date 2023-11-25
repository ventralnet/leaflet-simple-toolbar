<template>
  <div class="map" ref="mapContainer">
  </div>
</template>

<script>
import 'leaflet';
import 'leaflet/dist/leaflet.css';

import '../lib/leaflet-simple-toolbar';
import '../lib/leaflet-simple-toolbar.css';

export default {
  mounted() {
    const mapEle = this.$refs.mapContainer;
    const map = L.map(mapEle, {
      center: [51.505, -0.09],
      zoom: 10
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const classBasedAction = new L.Control.SimpleToolbar.Action({
      iconHtml: '<span><b>H</b></span>',
      tooltip: 'This will show when you hover',
      handler() {
        alert('class based action');
      },
    });

    const disabledAction = new L.Control.SimpleToolbar.Action({
      iconHtml: '<span><b>D</b></span>',
      tooltip: 'Disabled action example, you cant interact with this',
      handler() {
        alert('This alert won\'t show because i am disabled :(');
      },
    });

    new L.Control.SimpleToolbar({
      actions: [
        {
          iconHtml: '<i class="fa-solid fa-circle-info"></i>',
          tooltip: 'This will show when you hover',
          handler() {
            alert('leafet simple toolbar!');
          },
        },
        {
          iconHtml: '<i class="fas fa-question-circle"></i>',
          tooltip: 'Another action',
          handler() {
            alert('click');
          },
        },
        disabledAction,
        classBasedAction,
      ]
    }).addTo(map);

    disabledAction.disableControl();
    setTimeout(() => {
      disabledAction.enableControl();
    }, 5000);
  },
};
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
}
</style>

