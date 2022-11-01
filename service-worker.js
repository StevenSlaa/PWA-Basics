// root/assets/scripts/service-worker.js

//Importeer Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

//Registreer een route van je pagina
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst() //Selecteer een strategy voor het cachen van bestanden
)