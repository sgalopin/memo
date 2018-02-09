# Git

## Merge d'une branche de recette

### Merge sur master
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

### Merge sur develop
```git
- git fetch origin
- git checkout Release_Vx.x.x
- git pull
- git checkout develop
- git pull
- git merge --no-ff -m "Merge version x.x.x" Release_Vx.x.x
- git push origin develop
```

## Renommer une branche sur GitHub.com
```git
git branch -m old-name new-name
git push origin :old-name new-name
```

## Migrer un dépôt SVN vers un dépôt Git

- [Exemple de fichier de migration](svntogit.txt)
- [Exemple de fichier utilisateurs](users.txt)

## Workflow
### GitHub-Flow (Scott Chacon)
![GitHubFlow](img/github-flow-branching-model.jpg)
### Git-Flow (Vincent Driessen)
![GitFlow](img/git-model@2x.png)

Sources:
- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
- [Quel git workflow pour mon projet ?](http://www.nicoespeon.com/fr/2013/08/quel-git-workflow-pour-mon-projet/)

