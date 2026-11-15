# apps.hinadev.com

Static site for Hinadev's apps, served by GitHub Pages at <https://apps.hinadev.com>. No build step: edit the HTML and push to `main`.

```
index.html              app list
assets/site.css         shared styles (light and dark)
assets/lang.js          language picker: ?lang=zh-Hant|ja|en, then the last choice, then the browser
<app>/index.html        app page
<app>/privacy/          privacy policy (App Store Connect "Privacy Policy URL")
<app>/support/          support page (App Store Connect "Support URL")
<app>/img/              icon and screenshots
```

Every page holds all three languages; elements with a `lang` attribute show only when it matches the chosen language.

## Add an app

1. Copy `shokutaku/` to `<new-app>/` and replace its text, icon and screenshots.
2. Add a card for it to `index.html`.
3. Push. The pages are live a minute later.

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```
