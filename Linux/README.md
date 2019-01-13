# Debian / Ubuntu commands

## Grep
```shell
man wget | grep -nC 5 proxy
```

## Wget
```shell
wget "http://IP_GEOPORTAIL/CLE_IGN/geoportail/r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&STYLES=normal&LAYERS=ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2016&BBOX=361440,6629220,361490,6629270&CRS=EPSG:2154&WIDTH=250&HEIGHT=250&FORMAT=image/geotiff" -O mon_image.tif  --header "Host: wxs-i.ign.fr"
```

## Ajouter une entrée dans le fichiers hosts
```shell
sudo -i
echo "192.168.50.xx xxxxxx.dev.net" >> /etc/hosts
```

## Changer le mot de passe de l'utilisateur courant
```shell
passwd
```

## Changer le mot de passe d'un utilisateur
```shell
sudo passwd username
```

## Voir Git ssh
[Voir Git ssh](../Git/README.md)


## Gestion des emails côté serveurs

### Sendgrid
```shell
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

### Sendmail
```shell
apt-get install -y sendmail
echo "define(\`SMART_HOST',\`mailex.xxx.fr')dnl" >> /etc/mail/sendmail.mc
/etc/mail/m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf
/etc/mail/make
service sendmail restart
echo "My test email being sent from sendmail" | /usr/sbin/sendmail test@gmail.com
```

### Exim4
```shell
apt-get install -y exim4
```

### Thunderbird
#### Connexion (DavMail)
- Télécharger [DavMail](http://davmail.sourceforge.net/download.html),
- Lancer DavMail et configurer l'url (laisser les autres options par défaut):
```
URL OWA (Exchange): https://xxxxx.xxx.fr/owa
```

#### Calendrier (Lightning)
- Vérifier que le plugin Lightning est bien installé dans Thunderbird et éventuellement [installer la version française](https://archive.mozilla.org/pub/thunderbird/releases/).
  - Extraire uniquement le module de l'archive,
  - Dans Modules complémentaires > Modules complémentaires,
  - Dans le menu, cliquer sur "Installer un module depuis un fichier...".
- Ajouter les calendriers:
  - Ouvrir l'onglet calendrier,
  - Faire un clique droit sous la liste de calendriers,
  - Cliquer sur nouveau calendrier,
  - Cliquer sur l'option "Sur internet" et puis sur "Suivant",
  - Cliquer sur l'option "CalDAV" et renseigner l'adresse du calendrier, par exemple:
  ```
  http://localhost:1080/users/martin.dupont@xxx.fr/calendar
  ```
  - Donner un nom au calendrier et cliquer sur "Suivant",
  - Cliquer sur "Terminer".

Source:
- [Lightning broke when upgrading to Thunderbird 60.2.1]( https://www.reddit.com/r/linuxmint/comments/9ofkxr/lightning_broke_when_upgrading_to_thunderbird_6021/)

#### Modifier le dictionnaire par défaut
- Dans Préférences > Préférences > Rédaction > Orthographe,
- Sélectionner la Langue "Français".

#### Ajouter un annuaire:
- Dans Préférences > Préférences > Rédaction > Adressage,
- Cocher la case "un serveur d'annuaire",
- Cliquer sur "Modifier les annuaires...",
- Cliquer sur Ajouter,
- Ajouter par exemple la configuration suivante:
```
Nom: Annuaire xxx
Nom d'hôte: localhost
Nom distinct de base: ou=people
Numéro de port: 1389
Connecter avec l'utilisateur: MDupont
```

### kerberos
- Installation:
```
sudo apt install krb5-user libpam-krb5 libpam-ccreds auth-client-config
```
Lors du prompt renseigner la valeur demandée:
```
Nom du realm: XXX.FR
```
- Création d'un jeton:
```
kinit MDupont
```
- Consultation des jetons en cours:
```
klist
```

Source:
- [Kerberos](https://guide.ubuntu-fr.org/server/kerberos.html)

### Utilitaires divers
- **tilda**: Gère une console unique avec raccourci clavier,
- **nohup**: Lance un script indépendant de la console en cours,
- **htop**: Moniteur système,
- **mc**: Gestionnaire de fichiers en ligne de commande,
- **tmux**: Multiplexeur de terminaux (Comme Screen),
- **tree**: Affiche la structure d'un dossier.
