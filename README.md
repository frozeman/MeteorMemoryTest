MeteorMemoryTest
================

Related issue: https://github.com/meteor/meteor/issues/2179

Run the test and see the memory console (Chrome Developer Tools -> timeline)
In the first run everything seems fine.
The memory heap starts with 11.2MB and after the 1 minute run it has, after garbage collection 11.8MB.

If you uncomment line 32 - 37, which simply adds a dummy event to the "page2" template
pointing to an element in the "page2Sub" template and you run the test again, you will see that the memory which starts with
11.2MB ends up with 15.9MB after the test run and garbage collection.