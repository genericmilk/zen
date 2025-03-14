<p align="center">
    <img src="zen-icon.png" width="200" />	
</p>
<h1 align="center">
    Zen v1.0.0
</h1>


A lightweight JavaScript library that adds ambient, meditative glowing elements to your web page.

## Description

Zen.js creates subtle, colorful glowing "embers" that appear and disappear gracefully across your page background. These visual elements are designed to create a calm, zen-like atmosphere without interfering with user interactions.

## Installation

Add the script to your HTML:

```html
<script src="zen.js"></script>
```

Add a container with the class `glow` where you want the effect to appear:

```html
<div class="glow"></div>
```

## Usage

The script initializes and runs automatically:

```html
<body>
  <div class="glow"></div>
  <script src="zen.js"></script>
</body>
```

## Customization

### Available Colors

The default library includes the following ember colors:
- purple
- blue
- green
- orange
- pink
- darkPink
- brightPurple

### Adding Custom Colors

To add your own colors, extend the `embers` array in the Zen class:

```javascript
const zen = new Zen();
zen.embers.push('myCustomColor');

// Then add the corresponding CSS class
const customCSS = `
  .glow .ember.myCustomColor {
    background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,0,0) 50%);
  }
`;
```

### Styling

The glowing elements can be further customized by modifying the CSS in your own stylesheet.

## Browser Support

Zen.js works in all modern browsers that support CSS transitions and JavaScript ES6 features.

## License

MIT License
