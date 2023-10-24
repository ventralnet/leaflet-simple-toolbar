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

    new L.Control.SimpleToolbar({
      actions: [
        {
          iconHtml: '<span>H</span>',
          tooltip: 'I am tooltip H',
          handler() {
            alert('clicked H');
          },
        },
        {
          iconHtml: '<span>A</span>',
          tooltip: 'I am tooltip A',
          handler() {
            alert('clicked A');
          },
        }
      ]
    }).addTo(map);
  },
};
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
}
</style>

