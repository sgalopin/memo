# Puppet

## Décommenter une lignes
```puppet
shellvar { '.bashrc':
  ensure    => present,
  target    => "/home/${your_user}/.bashrc",
  variable => 'force_color_prompt'
  uncomment => true,
}
```
Sources:
- [Exemples shellvar](http://augeasproviders.com/documentation/examples.html#shellvar-provider)

## Remplacer une partie d'une ligne
```puppet
ext_file_line { 'tomcat_logs_level':
   ensure => present,
   path => '/etc/tomcat8/logging.properties',
   match => '(.*).level = (.*)',
   line => '\1.level = SEVERE',
   multiple => true,
 }
 ```
 [Ticket ouvert pour évolution de puppetlabs-stdlib](https://tickets.puppetlabs.com/browse/MODULES-6634)

Sources:
- https://github.com/m4ce/puppet-ext_file_line
- https://puppet.com/docs/puppet/5.3/function.html#regsubst
- https://github.com/puppet-modules/puppet-common/blob/master/manifests/defines/replace.pp