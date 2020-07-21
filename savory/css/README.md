# 🍫 Nestlé | Savory | CSS 🍫 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Instructions to add content and functionalities to the website.

⚠️ Some how-tos here may be complementary. Mind that some CSS styles must live together.

### Adding gradients to icecreams backgrounds

A CSS class is required in wrapper element like this: `savory__<icecream-group>--<icecream-name>`. For instance, for _Nuestros Helados > Sólo para mí > Mega > Maracuyá_ it should be `savory__mega--maracuya`. Then, from PRO website, find the right CSS gradient and add it to correct file. For this example, it should be added to `nestle/savory/css/solo-para-mi--mega.css`.

```
/* Background example */
.savory__mega--maracuya {
  background-image: radial-gradient(circle farthest-corner, #efce3a 6%, #a47614 59%, #833c05 100%);
}
```

### Adding shops bars to icecreams

Three steps are required for this:

- A couple of CSS classes are required in **_icecream wrapper element_**: `para-compartir_<icecream-group>` and `para-compartir_<icecream-group>--<icecream-name>`. For instance, for _Nuestros Helados > Para compartir > Multipack > Frambuesa_ it should be `para-compartir_multipack` and `para-compartir_multipack--frambuesa`.

- Then, we should create a new **_Elementor Section_** for the shops bar which needs a CSS class and the shop images inside columns (min 1 and max 3 for now). This section should have two classes: `shops_para-compartir_<icecream-group>` and `shops_para-compartir_<icecream-group>--<icecream-name>`. Following the above example, the classes would be `shops_para-compartir_multipack` and `shops_para-compartir_multipack--frambuesa`.

- Finally, **_shops icon_** should have two classes too: `btn_para-compartir_<icecream-group>` and `btn_para-compartir_<icecream-group>--<icecream-name>`. Following the above example, these classes would be `btn_para-compartir_multipack` and `btn_para-compartir_multipack--frambuesa`.

JavaScript injected in `nestle/savory/js/savory-global.js` should do the job to make it works. The code is under _Shop bars_ comment.

## Happy Code

Made with CSS and a lot of ❤️

## This README.md file looks pretty because of

[GitHub Markdown](https://guides.github.com/features/mastering-markdown/) \
[Emojipedia](https://emojipedia.org/)
