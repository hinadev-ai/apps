# apps.hinadev.com

Static site for Hinadev's apps at <https://apps.hinadev.com>, served by the `hinadev-apps` Cloudflare Worker (static assets only). No build step: edit the HTML under `public/` and deploy.

```
wrangler.jsonc                 Worker config: serves public/, custom domain apps.hinadev.com
public/index.html              app list
public/assets/site.css         shared styles (light and dark)
public/assets/lang.js          language picker: ?lang=zh-Hant|ja|en, then the last choice, then the browser
public/<app>/index.html        app page
public/<app>/privacy/          privacy policy (App Store Connect "Privacy Policy URL")
public/<app>/support/          support page (App Store Connect "Support URL")
public/<app>/img/              icon and screenshots
```

Every page holds all three languages; elements with a `lang` attribute show only when it matches the chosen language.

## Add an app

1. Copy `public/shokutaku/` to `public/<new-app>/` and replace its text, icon and screenshots.
2. Add a card for it to `public/index.html`.
3. Deploy and push.

## Deploy

```sh
npx wrangler login    # once; add --device if the localhost callback fails
npx wrangler deploy
```

## Preview locally

```sh
npx wrangler dev      # or: python3 -m http.server 8000 --directory public
```
