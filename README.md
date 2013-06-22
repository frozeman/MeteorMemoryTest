MeteorMemoryTest
================

This is a test i wrote to show how it stacks up memory in meteor js, when using local collection.

What i do here is having two sites, which are switched back and forth, and you can monitor the memory using Chrome -> Dev Tools -> Timeline Tab -> button on the bottom, to record

When uncommenting the insertion and removing of collection entries, it stacks up until 24MB, but seems to stay constant at around 15MB.
Which is already a lot for haveing only two almost empty pages.

When instering and removing collection data, on page switches, it stacks up memory until 170MB+.

Note: I wrote the OfflineCollection class, to be able to clean all elements from the local collection, as it is only allowed to remove one at a time by id.
This class stores all ids on insert, and uses these then to remove clean the collection.

See OfflineCollection.js for details.



==== additional packages used (meteorite)
- Meteor Router
- go-offline (to prevent taht data gets stored persistenly) https://github.com/awwx/meteor-go-offline
- autopublish -> removed


it seems like the additional packages aren't included so you have to add them yourself using the meteorite package manager:
`$ mrt install go-offline`
`$ mrt install router`
`$ mrt remove autopublish`


==== Screenshot
![screen shot 2013-06-21 at 22 07 16](https://f.cloud.github.com/assets/232662/689380/fbd767fa-dab0-11e2-853d-87123b3afc0d.png)
