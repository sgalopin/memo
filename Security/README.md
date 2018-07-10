# Security

## HTTPS

###### Générer un certificat

- Créer un fichier de configuration en prenant modèle [ici](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/).
- Générer le certificat :
```shell
openssl req -config dev.deliciousbrains.com.conf -new -sha256 -newkey rsa:2048 \
-nodes -keyout dev.deliciousbrains.com.key -x509 -days 365 \
-out dev.deliciousbrains.com.crt
```
- Installer le certificat en locale

Sources:
- [How To Set Up HTTPS Locally](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/)

