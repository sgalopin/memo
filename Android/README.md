# Android

## Connecter un Samsung Galaxy S7 Edge

- Activer le mode debug sur le téléphone ([Voir ici](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)),
- Installer le driver USB pour Samsung ([Voir ici](http://developer.samsung.com/android/tools-sdks/Samsung-Andorid-USB-Driver-for-Windows)),
- Installer Android Studio ([Voir ici](https://developer.android.com/studio/)),
- Vérifier qu'Android SDK Platform-tools est installé via le SDK Manager (Dans Android Studio cliquer sur le bouton "SDK Manager" de la barre d'outils ou cliquez sur "Outils > SDK Manager")
- Ouvrir ```cmd```:
```
cd ...\AppData\Local\Android\Sdk\platform-tools
adb start-server
```
Note: Il peut être pratique de créer un raccourci sur le bureau ayant pour cible:
```
...\AppData\Local\Android\Sdk\platform-tools\adb.exe start-server
```
- Vérifier la connexion à la page ```chrome://inspect/#devices```,
- Sur le mobile: Lancer Chrome,
- Cliquer sur inspect de la ligne correspondante sur la page ```chrome://inspect/#devices```,
- Ajouter le port forwarding
```
localhost:5443 => myWebsiteHostName:443
```
- Sur le mobile: ouvrir la page ```chrome://flags```,
- Sur le mobile: Activer l'option #allow-insecure-localhost,
- Sur le mobile: Visiter le site web en **HTTPS** (le http n'est pas redirigé),
- Sur le mobile: Revisiter le site web 5 minutes plus tard...

Sources:
- [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
- [Chrome DevTools Devices does not detect device when plugged in](https://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in)
- [Update your tools with the SDK Manager](https://developer.android.com/studio/intro/update#sdk-manager)
- [Add Your Web App to a User's Home Screen](https://codelabs.developers.google.com/codelabs/add-to-home-screen/#0)

## Partager une connexion

```
netsh wlan set hostednetwork mode=allow ssid=WIFI_DEV_SGA key=11GU40047313
netsh wlan start hostednetwork
```

Sources:
- [Transformer son PC en hotspot WiFi](https://www.presse-citron.net/transformer-son-pc-en-hotspot-wifi/)