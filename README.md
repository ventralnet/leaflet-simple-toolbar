# leaflet-simple-toolbar #

## Demo ##

[jsFiddle](https://jsfiddle.net/ventralnet/7khfvzgt/13/)

## Installation ##
You must include the distribution javascript file and css file in your application

npm example using an es6 bundler
```bash
npm install --save @ventralnet/leaflet-simple-toolbar
```
## Building ##

```bash
git clone git@github.com:ventralnet/leaflet-simple-toolbar.git
```

```bash
npm install
npm run build # builds the artifact (to dist folder)
npm run dev # runs the sample application
```

## Use ##

![alt text](https://raw.githubusercontent.com/ventralnet/leaflet-simple-toolbar/master/screenshot.png?token=GHSAT0AAAAAACKXTOAVOHPFBIFAIDTF7PHUZLDVCWA)


You can either provide your toolbar options as plain old javascript objects, or you can use the utility class L.Control.SimpleToolbar.Action.

An additional benefit of using L.Control.SimpleToolbar.Action is that the base class provides the disableControl and enableControl methods allowing you to enable and disable interacting with the action button.  Plain old javascript object configurations don't provide this ability.

Action objects are provided as a list of options to L.Control.SimpleToolbar constructor

```javascript
  import '@ventralnet/leaflet-simple-toolbar';
  import '@ventralnet/leaflet-simple-toolbar/style.css';

  ...

  const classBasedAction = new L.Control.SimpleToolbar.Action({
    iconHtml: '<span><b>H</b></span>',
    tooltip: 'This will show when you hover',
    handler() {
      alert('class based action');
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
      classBasedAction,
    ]
  }).addTo(map);
```
