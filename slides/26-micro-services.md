## Un coup d'œil du côté des échanges inter-services

<v-click>

Caractéristiques des architectures distribuées et modulaires (dites **micro-services**)&nbsp;:

</v-click>

<v-clicks at="2">

- protocole **HTTP** (généralement),
- **gros volume** d'échange de données,
- données dynamiques pour la plupart (car calculées), mais dont une bonne partie **stables sur une plage de temps plus ou moins longue**.

</v-clicks>

<v-click at="5">

N'attendez plus, **mettez en cache** vos échanges inter-services&nbsp;!

</v-click>

<v-click at="6">

Seul bémol&nbsp;: maintient d'un état côté service dans une architecture généralement _stateless_.

</v-click>