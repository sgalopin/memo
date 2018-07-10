# Postgresql

###### Remise au propre des ids
```
ALTER SEQUENCE utilisateurs_id_seq RESTART WITH 1;
UPDATE utilisateurs SET id=nextval('utilisateurs_id_seq');
```

###### Copie d'un fichier vers le serveur en utilisant une connexion SSH
```
C:\Users\sgalopin>pscp -P 50023 C:\Users\sgalopin\Desktop\desktop\RTM\rtm2.backu
p user@localhost:/home/user/rtm2.backup
```