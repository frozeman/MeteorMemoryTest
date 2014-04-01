MeteorMemoryTest
================

Related issue: https://github.com/meteor/meteor/issues/1997

Run the test and see the memory console (Chrome Developer Tools -> timeline)
uncomment line 28 in the testProject.js to and recheck, and you will see the memory grow.

The template instance passed to the event doesn't seem to get cleaned up properly.