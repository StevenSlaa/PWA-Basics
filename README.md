

![Tutorial Logo.png](https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/Tutorial%20Logo.png?raw=true)

# Progressive Web Apps (PWA's)

**PWA's** Maken het mogelijk websites te maken dat niets tot weinig verschillen van **native apps**.

Wanneer we het hebben over **native apps**, dan moet je denken aan apps die je van de Appstore of PlayStore hebt gedownload en toegang kunnen hebben tot je Camera, NFC, Bluetooth, Lokale opslag, push-notificaties, offline-mode en veel meer. Om toegang te krijgen tot deze features kon het vroeger alleen maar met behulp van deze native apps. Tegenwoordig zijn de browsers die we gebruiken zo ver uitgebreid dat deze ook toegang hebben tot deze features. Een paar goede voorbeelden hiervan zijn [Twitter](https://twitter.com/home?lang=nl) , [YouTube](https://youtube.com) en [Youtube Music](https://music.youtube.com). Het grootste voordeel aan PWA's is het feit dat het platform onafhankelijk is. Ga maar na: Alles met internet kan een webpagina bezoeken. Verder is er een groot voordeel dat App stores vaak een groot gedeelte van je inkomsten van de app, van je innemen. Dit heb je niet met een PWA! 🤑

## Wanneer is een Website PWA?

Er zijn mooie tools ontwikkeld om te checken of je website PWA compatible is. Eén van deze tools is [Lighthouse](https://github.com/GoogleChrome/lighthouse). Dit is een open-source tool dat voor ontwikkelaars het mogelijk maakt om inzicht te krijgen in de prestaties van een websites/ webapps. Het is zo goed dat het zelfs direct is geïntegreerd in alle chromium gebaseerde browsers zoals [Microsoft Edge](https://www.microsoft.com/edge) en natuurlijk [Google Chrome](https://www.google.com/chrome).
Je kan Lighthouse direct uit proberen door naar een website te gaan en de developer tools te openen en naar de lighthouse tab te gaan.

> Je kan de developer tools openen door op de F12 toets te drukken.

> Het kan zijn dat lighthouse niet direct zichtbaar is. Je kan hem vinden door in de tabs van het developer menu op de plus(+) knop te klikken.

Wanneer je in lighthouse op `Analyze page load` klikt, zal Lighthouse de site gaan checken. Wanneer dit klaar is laat Lighthouse jouw een rapport zien van een aantal categorieën, waaronder ook PWA.

![](https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/Lighouse%20Categories.png?raw=true)

Wanneer de website niet voldoet aan de eisen van PWA, zal wanneer je naar onderscrolt staan waarom dit zo is en aangeven wat je moet doen om dit wel voor elkaar te krijgen.

## Hoe werkt een PWA?

Eén van de belangrijkste feature van een PWA is het offline laten werken van de app. Normaal wordt een website uitgevoerd door een enkele thread. PWA hebben echter iets extra's namelijk een **service worker** die ze bij de browser kunnen registreren. De service worker voert taken uit zoals caching, achtergrond synchronisatie en push-notificaties en nog wat andere taken. Het implementeren hiervan is relatief eenvoudig.

```html
<!-- root/index.html -->
<script>
    // Check of de browser service-workers ondersteunt en registereer hem dan
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/assets/scripts/sw.js')
    }
</script>
```

Zodra dit gelukt is, kan je in chrome checken of hij is geregistreerd. Dit kan je doen door te gaan naar: Developer menu en dan naar de tab `Application -> Service Workers` . Wanneer de Service Worker is geregistreerd is het volgende te zien:

![](https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/Application%20Menu.png?raw=true)

Wanneer dit is gelukt kan je je code in de `service-worker.js` file schrijven. Je kan ook gebruik maken van een tool genaamd [Workbox](https://developer.chrome.com/docs/workbox) om al het complexe hieraan over te laten. Een enorm basic service-worker script ziet er als volgt uit:

```javascript
// root/assets/scripts/service-worker (basic).js

//Importeer Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

//Registreer een route van je assets
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst() //Selecteer een strategy voor het cachen van bestanden
)
```

Het belangrijkste wat je in de service worker moet doen, is het cachen van je webpagina's zodat ze vanuit de cache kunnen worden geladen wanneer je offline bent. Het voorbeeld hierboven werkt niet volgens dit principe. Hoe dit precies werkt gaan we niet in. Als je maar snapt dat een service worker diverse taken heeft waaronder het cachen van bestanden en requests, om de website offline te laten werken. Ook de gecachte gegevens kun je zien vanuit de application tab in je Chromium gebaseerde browser door in de application tab op `Cache Storage` te klikken. 

Als laatste is het belangrijk dat je website een `manifest.json` heeft hierin staan onderandere je icoontjes en andere meta-data van je applicatie. Zo'n manifest kan er als volgt uit zien:

```json
// root/manifest.json

{
    "name": "Falcon Heavy",
    "short_name": "Falcon",
    "start_url": "/",
    "icons": [
        {
          "src": "icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
    "theme_color": "#FF0000",
    "background_color": "#FFFFFF",
    "display": "fullscreen",
    "orientation": "portrait"
}
```

Wanneer dit is gelukt zal er in Lighthouse na een nieuwe check een verificatie verschijnen dat je website voldoet aan de PWA certificering en kan je applicatie worden geïnstalleerd op alle ondersteunde apparaten en zelfs worden toegevoegd aan Google Playstore of de Microsoft Store.

## Het bouwen van je eigen PWA

Clone deze repository and open hem in [Visual Studio Code](https://code.visualstudio.com/). Visual Studio Code is een code editor. Visual Studio Code ondersteunt extensies waarvan we gebruik gaan maken. In de Extenties tabblad aan de linker kant van de editor. Zoek hier naar `Live Server`. Installeer de extentie door te klikken op `install`.

![](https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/Live%20Server%20Extension.png?raw=true)

Zodra deze is geïnstalleerd verschijnt rechts onderaan in de blauwe balk een knop `Go Live`. Zodra je hierop klikt wordt er een webserver gehost waar je naar toe kan gaan door in de browser te navigeren naar `http://localhost:5500`. Kijk eens rond in de `index.html`, `sw.js` en `manifest.json`. Overal staat commentaar bij en probeer hier maar eens mee te experimenteren. Doordat de server de pagina gecached heeft, kan je nu zelfs de server afsluiten en de pagina opnieuw laden. De service worker detecteerd dat deze pagina eerder is bezocht en heeft hem opgeslagen. Nu stuurt de service worker deze pagina aan jouw, dus hij kan nu zelfs je pagina laden zonder dat de server uberhaubt aan staat!😃

> In dit voorbeeld is de service-worker `sw.js` gegenereerd met behulp van Workbox met de bijbehorende CLI. Je kan deze CLI tool installeren door gebruik te maken van [nodeJS](https://nodejs.org/en/) en het commando `npm install workbox-cli -g`. Dit installeert de workbox CLI. Vervolgens kan je je eigen service worker samenstellen met het commando `workbox wizard` en vervolgens `workbox generateSW workbox-config.js`.

![]('https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/screenshot-desktop.png?raw=true')

## Handige tips

### Een PWA testen op een mobiel toestel

Normaal gesproken werken PWA's alleen op websites die beveiligd zijn met https vanwege vanzelf sprekende beveiligingsredenen. Echter is `localhost` een uitzondering speciaal voor ontwikkelaars. Je kan alleen niet het op een mobiele telefoon testen omdat daar je website niet op wordt gehost. Gelukkig hebben Chromium gebasseerde browser een port forwarding tool ingebouwd zitten. Deze tool kan je breiken door in de url-balk het volgende in te voeren: `chrome://inspect` of voor Microsoft Edge: `chrome://inspect`. Wanneer je hier op `Port forwarding...` klikt kan je port `5500` forwarden naar `localhost:5500`.
![Chrome Port-forwarding.png](https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/Chrome%20Port-forwarding.png?raw=true)

Nu kan je via een Android toestel (waarbij [USB-Debugging staat ingeschakeld](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)) en waarop een Chromium gebaseerde browser staat navigeren naar [localhost:5500](http://localhost:5500). Nu wordt je als je het goed hebt gedaan door gestuurd naar je PWA.

<img title="" src="https://github.com/StevenSlaa/PWA-Basics/blob/main/docs/images/screenshot.jpg?raw=true" alt="Screenshot_20221101-203745_Chrome.jpg" width="194">

### Alle PWA features

Check deze website voor alle features wat door PWA's worden ondersteunt: [What PWA Can Do Today](https://whatpwacando.today/)
