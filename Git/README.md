# Git

## SSH

###### Générer une nouvelle clé SSH (PEM format)
```shell
ssh-keygen -t rsa -C "your.email@example.com" -b 4096
```

###### ~/.ssh/config exemple:
```config
# Global SSH configurations here will be applied to all hosts
# IdentityFile ~/.ssh/id_rsa

Host github.com
    IdentityFile ~/.ssh/id_sgalopin_github

Host gitlab.dockerforge.ign.fr
    IdentityFile ~/.ssh/id_sgalopin_gitlab
```

###### ~/.ssh/authorized_keys exemple:
```shell
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```
Source:
- [SSH : Authentification par clé](https://doc.fedora-fr.org/wiki/SSH_:_Authentification_par_cl%C3%A9)

###### ~/.ssh/known_hosts exemple:
```shell
ssh-keyscan -H -t rsa [hostname],[ip_address] >> ~/.ssh/known_hosts
ssh-keyscan -H -t rsa localhost,::1 >> ~/.ssh/known_hosts
ssh-keyscan -t rsa -p 10022 gitlab.dockerforge.ign.fr >> ~/.ssh/known_hosts
```
Source:
- [Can I automatically add a new host to known_hosts?](https://serverfault.com/questions/132970/can-i-automatically-add-a-new-host-to-known-hosts)

## Commandes courantes
###### Config:

```shell
git config -l
git config user.name "myname"
git config user.email "myemail"
```

Sources:
- [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
- [ssh-add add all private keys in .ssh directory](https://unix.stackexchange.com/questions/322124/ssh-add-add-all-private-keys-in-ssh-directory)
- [Set git email address on a per repository basis](https://dereenigne.org/git/set-git-email-address-on-a-per-repository-basis/)

###### Vérifier si une branche existe:
```shell
git rev-parse --verify <branch-name>
# $? == 0 means local branch with name <branch-name> exists.
```
Source:
[find out if a local git branch exists?](https://stackoverflow.com/questions/5167957/is-there-a-better-way-to-find-out-if-a-local-git-branch-exists)

###### Changer l'adresse distante:

```shell
git remote -v
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
Source:
- [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)

###### Merge d'une branche de recette sur master
```git
git fetch origin
git checkout Release_Vx.x.x
git pull
git checkout master
git pull
git merge --no-ff -m "Merge version x.x.x" Release_Vx.x.x
git tag -a vx.x.x -m "Version x.x.x" HEAD
git push --tags origin master
```

###### Merge d'une branche de recette sur develop
```git
git fetch origin
git checkout Release_Vx.x.x
git pull
git checkout develop
git pull
git merge --no-ff -m "Merge version x.x.x" Release_Vx.x.x
git push origin develop
```
###### Supprimer une branche locale
```git
git branch -d the_local_branch
```
###### Supprimer une branche distante
```git
# Ancienne syntaxe
git push origin :the_remote_branch
# Nouvelle syntaxe
git push origin --delete the_remote_branch
```
###### Mise à jour des branches distantes en local
```git
git fetch -p
```
Sources:
- [Git: Delete a branch (local or remote)](https://makandracards.com/makandra/621-git-delete-a-branch-local-or-remote)

###### Renommer une branche sur GitHub.com
Déprotéger la branche old-name pour permettre sa suppression lors du push.
Changer la branche par défaut si la branche old-name l'est, pour permettre sa suppression lors du push.
```git
git branch -m old-name new-name
git push origin :old-name new-name
```
Définir la branche comme branche par défaut si nécessaire.
Protéger la branche si nécessaire.

## Divers
###### Migrer un dépôt SVN vers un dépôt Git
- [Exemple de fichier de migration](svntogit.txt)
- [Exemple de fichier utilisateurs](users.txt)

###### Migrer un dépôt sous GitLab vers un dépôt GitHub avec LFS
- [Exemple de fichier de migration](gitlabtogithub.txt)
- [Duplicating a repository](https://help.github.com/articles/duplicating-a-repository/#mirroring-a-repository-in-another-location)
- [Git Large File Storage](https://git-lfs.github.com/)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

###### Partager un répertoire cloné avec vagrant et virtualbox
Sources:
- [virtualbox shared folder git restriction](https://www.google.fr/search?hl=fr&biw=1138&bih=811&ei=yIWOWrKYCsOAUbWzj8AM&q=virtualbox+shared+folder+git+restriction&oq=virtualbox+shared+folder+git+restriction&gs_l=psy-ab.3..33i21k1.64680.71284.0.72012.16.16.0.0.0.0.96.1262.16.16.0....0...1.1.64.psy-ab..0.15.1168...0j35i39k1j0i67k1j0i20i263k1j0i203k1j0i22i30k1j33i22i29i30k1j33i160k1.0.1pzMtC5UNGA)
- [Git issues with shared folders in Vagrant](https://stackoverflow.com/questions/32318642/git-issues-with-shared-folders-in-vagrant)
- [Using a git repo on a directory shared between a VM and a host causes problems](https://stackoverflow.com/questions/41965530/using-a-git-repo-on-a-directory-shared-between-a-vm-and-a-host-causes-problems)
- [Unable to set permissions within shared folder using Vagrant and VirtualBox](https://ryansechrest.com/2014/04/unable-set-permissions-within-shared-folder-using-vagrant-virtualbox/)
- [Local Git sharing with a virtual machine](https://blog.maximzaslavsky.com/local-git-sharing-with-a-virtual-machine/)

## Workflow
###### GitHub-Flow (Scott Chacon)
![GitHubFlow](img/github-flow-branching-model.jpg)
###### Git-Flow (Vincent Driessen)
![GitFlow](img/git-model@2x.png)

Sources:
- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
- [Quel git workflow pour mon projet ?](http://www.nicoespeon.com/fr/2013/08/quel-git-workflow-pour-mon-projet/)

