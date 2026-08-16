# support

One page listing every way to support Step Into The Code.

**https://stepintothecode.github.io/support/**

Every project I ship links here. Payment providers change, this
URL does not, so switching one never means editing projects that are already
published to a store.

## Linking a project to it

Link to the page with a `?from=` naming the surface the link sits on:

```html
<a href="https://stepintothecode.github.io/support/?from=ytclipnshare-web"
   target="_blank" rel="noopener">Support this project</a>
```

Then add one line to `assets/projects.js`, so the page can greet the visitor by
name and link back:

```js
'ytclipnshare-web': { name: 'YTClipNShare', home: 'https://stepintothecode.github.io/ytclipnshare/' },
```

A `?from=` that is not in `PROJECTS` is ignored and the page shows its generic
wording. Nothing from the URL is ever written to the page, so a hand-typed value
cannot put text on it.

Use one `from` per surface rather than one per project, so it stays obvious
which link people actually press. `housie-app`, `housie-web` and
`housie-privacy` all point at the same entry.

### From a phone app

Two rules, and both of them get an app rejected if you get them wrong.

**Open the real browser, never an in-app web view.** Apple requires donations
to be collected outside the app. A web view showing a payment page is read as
an in-app purchase that skipped Apple's billing, and it is refused. On Flutter
that means `LaunchMode.externalApplication`, and the scheme has to be declared
or the call silently fails:

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<queries>
  <intent>
    <action android:name="android.intent.action.VIEW"/>
    <data android:scheme="https"/>
  </intent>
</queries>
```

```xml
<!-- ios/Runner/Info.plist -->
<key>LSApplicationQueriesSchemes</key>
<array><string>https</string></array>
```

**Say plainly that it buys nothing**, next to the button, not buried. Both
stores treat "support" that unlocks anything as a purchase owed to their
billing system. The wording used in the app is:

> A voluntary tip, not a purchase. It buys no features, no priority support and
> no say over the app. Opens in your browser.

Also drop a `.github/FUNDING.yml` in each repo. That gets the native Sponsor
button on the repo page for free:

```yaml
github: [stepintothecode]
ko_fi: stepintothecode
custom: ["https://stepintothecode.github.io/support/"]
```

## Working on it

Static files, no build step, no dependencies, no tests.

```sh
npx serve .     # then open http://localhost:3000/
```

```
index.html          markup only
assets/site.css     all styling
assets/projects.js  the PROJECTS map, the only file most edits touch
assets/support.js   reads ?from= and fills in the greeting
assets/mascot.svg   Stepper, as shown on the page
assets/favicon.svg  the same character on a dark tile, for the browser tab
```

GitHub Pages serves the repo root from the `main` branch.

## Rules for this page

- **Nothing is ever given in return.** No tiers, no perks, no supporter badge,
  no feature unlocks. A tip that buys something becomes a sale, which drags in
  GST, app store payment rules and an obligation to the person who paid.
- **No analytics and no donor data.** `?from=` is read in the page and thrown
  away. The payment platforms hold everything else.
- **The fine print stays.** It is the thing that makes the point above true in
  writing.
