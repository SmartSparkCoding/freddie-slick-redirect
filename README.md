# freddie-slick-redirect

A small landing page that says the Slick plugins were made in collaboration with Freddie, then sends
people to https://slick.freddieyershon.co.uk/ after 20 seconds. There's a "go now" link and a way to
stay put if someone would rather not be moved.

No build step. Three files: `index.html`, `styles.css`, `redirect.js`. Open `index.html` and it works.

## Changing the wait

The countdown lives at the top of `redirect.js`:

```js
const TARGET = 'https://slick.freddieyershon.co.uk/';
const DELAY = 20000; // milliseconds
```

The ring, the number and the redirect all read from those two constants, so changing `DELAY` is the
only edit needed. Update the two "20"s in `index.html` too, and the `noscript` meta refresh, which
covers browsers with JS off.

## Deploying

GitHub Pages: push this repo, then Settings → Pages → Deploy from a branch → `main` / root. The page
is plain static files, so any static host works the same way.

## Theme

Colours and type are copied from Freddie's plugin site (`#fafaf9` ground, `#1c1917` ink, `#ec3750`
accent, system-ui) including the dark-mode variants and the `♣` mark, so the handoff doesn't feel
like it goes somewhere else.
