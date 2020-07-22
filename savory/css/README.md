# 🍫 Nestlé | Savory | CSS 🍫 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Instructions to add content and functionalities to the website.

> ⚠️ Mind that some CSS styles must live together. Please, don't remove exisiting CSS classes in Elementor items.

### Adding gradients to ice-creams backgrounds

A CSS class is required in **_ice-cream wrapper element_** like this: `savory__<ice-cream-group>--<ice-cream-name>`. For instance, for _Nuestros Helados > Sólo para mí > Mega > Maracuyá_ it should be `savory__mega--maracuya`. Then, from PRO website, find the right CSS gradient and add it to correct file. For this example, it should be added to `nestle/savory/css/solo-para-mi--mega.css`. After that, use Asset Injector CSS from Elementor to add every CSS content in its node.

```
/* Background example */
.savory__mega--maracuya {
  background-image: radial-gradient(circle farthest-corner, #efce3a 6%, #a47614 59%, #833c05 100%);
}
```

### Adding shops bars to ice-creams

Three steps are required for this:

- A couple of CSS classes are required in **_ice-cream wrapper element_**: `para-compartir` and `para-compartir_<ice-cream-group>--<ice-cream-name>`. For instance, for _Nuestros Helados > Para compartir > Multipack > Frambuesa_ it should be `para-compartir` and `para-compartir_multipack--frambuesa`.

- Then, we should create a new **_Elementor Section_** for the shops bar which needs a CSS class and the shop images inside columns (min 1 and max 3 for now). This section should have two classes: `shops_para-compartir` and `shops_para-compartir_<ice-cream-group>--<ice-cream-name>`. Following the above example, the classes would be `shops_para-compartir` and `shops_para-compartir_multipack--frambuesa`.

- Finally, **_shops icon_** should have two classes too: `btn_para-compartir` and `btn_para-compartir_<ice-cream-group>--<ice-cream-name>`. Following the above example, these classes would be `btn_para-compartir` and `btn_para-compartir_multipack--frambuesa`.

Shortcut:

```
// Ice-cream Elementor section
.para-compartir .para-compartir_<ice-cream-group>--<ice-cream-name>

// Shops Elementor icon
.btn_para-compartir .btn_para-compartir_<ice-cream-group>--<ice-cream-name>

// Shops Elementor section
.shops_para-compartir .shops_para-compartir_<ice-cream-group>--<ice-cream-name>
```

JavaScript code under _Shops bars_ comment in `nestle/savory/js/savory-global.js` should do the job to make it works.

## Happy Code

Made with CSS and a lot of ❤️

## This README.md file looks pretty because of

[GitHub Markdown](https://guides.github.com/features/mastering-markdown/) \
[Emojipedia](https://emojipedia.org/)
