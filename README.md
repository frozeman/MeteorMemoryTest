MeteorMemoryTest
================

Related issue: https://github.com/meteor/meteor/issues/1537

This is a test i wrote to show how it stacks up memory in meteor js, when using local collection.

What i do here is having two sites, which are switched back and forth, and you can monitor the memory using Chrome -> Dev Tools -> Timeline Tab -> button on the bottom, to record

When uncommenting the insertion and removing of collection entries, it stacks up until 24MB, but seems to stay constant at around 15MB.
Which is already a lot for haveing only two almost empty pages.

When instering and removing collection data, on page switches, it stacks up memory until 170MB+.


Screenshot
---------
![screen shot 2013-06-21 at 22 07 16](https://f.cloud.github.com/assets/232662/689380/fbd767fa-dab0-11e2-853d-87123b3afc0d.png)
