# Ember-html-gl

Ember component shell for [html-gl](https://github.com/PixelsCommander/HTML-GL)

## Usage

Wrap elements you want to animate with the html-gl component.

```
{{html-gl}}
  ..foo..
{{/html-gl}}
```

Thing is, that element doesn't do much, so you're probably better off extending you component.

```
import Ember from 'ember';
import HtmlGL from 'ember-html-gl/mixins/html-gl';

const {
  Component
  } = Ember;

export default Component.extend(HtmlGL, {
  
});
```

If you use `didInsertElement` as a method, don't forget to call `this._super()`;
