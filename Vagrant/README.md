# Vagrant

## Plugin

Workaround to install a plugin with a dependency error:
```
VAGRANT_DISABLE_STRICT_DEPENDENCY_ENFORCEMENT=1 vagrant plugin install vagrant-proxyconf
```

Source:
- [Vagrant 2.0.2 fails to install plugins](https://stackoverflow.com/questions/49180469/vagrant-2-0-2-fails-to-install-plugins)

## Synced Folders

###### NFS

In some cases the default shared folder implementations (such as VirtualBox shared folders) have high performance penalties. If you are seeing less than ideal performance with synced folders, NFS can offer a solution. Vagrant has built-in support to orchestrate the configuration of the NFS server on the host and guest for you.
```
NFS folders do not work on Windows hosts.
Vagrant will ignore your request for NFS synced folders on Windows.
```
Source:
- [Speed up Vagrant Synced Folders](https://blog.theodo.fr/2017/07/speed-vagrant-synced-folders/)
- [How to improve slow shared folders in vagrant](https://stackoverflow.com/questions/42758577/how-to-improve-slow-shared-folders-in-vagrant)
- [Vagrant NFS](https://www.vagrantup.com/docs/synced-folders/nfs.html)
