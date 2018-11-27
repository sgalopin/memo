# Debian / Ubuntu commands

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


## Gestion email

### Process environment varibales
```shell
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

### Sendmail
```shell
apt-get install -y sendmail
echo "define(\`SMART_HOST',\`mailex.ign.fr')dnl" >> /etc/mail/sendmail.mc
/etc/mail/m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf
/etc/mail/make
service sendmail restart
echo "My test email being sent from sendmail" | /usr/sbin/sendmail test@gmail.com
```

### Exim4
```shell
apt-get install -y exim4
```
