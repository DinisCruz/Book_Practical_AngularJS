##  Eclipse Groovy REPL script to sync a Browser with file changes (with recursive folder search via Java's WatchService) 

Since I am using Eclipse to develop using [AngularJS](http://blog.diniscruz.com/search/label/AngularJS) (see [Creating an Eclipse UI to run AngularJS e2e tests using Karma](http://blog.diniscruz.com/2014/02/creating-eclipse-ui-to-run-angularjs.html)), I needed a way to refresh the browser window every-time I made changes to any AngularJS related file (note that due to the nature of the AngularJS projects, I need the change to trigger on any change made inside the root folder and all its subfolders).

Since there didn't seem to be an easy way to do this (_'auto browser refresh on file changes'_) in  Eclipse, I used the [Eclipse Grovy REPL Scripting Environment](http://marketplace.eclipse.org/content/eclipse-grovy-repl-scripting-environment) to develop a script/macro that:  


  * Based on a title of an opened eclipse editor file:
  * ... find the full path of that file, and:
  * ... create a[ Java WatchService](http://docs.oracle.com/javase/7/docs/api/java/nio/file/WatchService.html) that monitors the file's folder and subfolders, and:
  * ... when a StandardWatchEventKinds.ENTRY_MODIFY is received :

    * Create/Open a new Eclipse view with a browser (called **_Synced Browser_**), and:
    * ...refresh the index page 

For reference here is the groovy code for this script ([gist here](https://gist.github.com/DinisCruz-Dev/9258689)):

  
Originally I had tried to use Eclipse file change events (like on this [SO thread](http://stackoverflow.com/questions/6507937/how-can-i-hook-into-eclipse-editor-events-in-my-own-plugin)), but that didn't work as well as the WatchService.

A next step is to create a mini UI to allow the configuration of the target files (maybe as a view added to the next version of the [Groovy REPL Eclipse](http://marketplace.eclipse.org/content/eclipse-grovy-repl-scripting-environment) plugin)

**Seeing it in action**  
**  
**Here is how to test this script:

1) create a Web project with an Html file on it:

[![](images/Screen_Shot_2014-02-25_at_16_54_05.png)](http://1.bp.blogspot.com/-6v4i9HcfQW4/Uw1G5NDLRaI/AAAAAAAAHpU/WQkl2RSTNXQ/s1600/Screen+Shot+2014-02-25+at+16.54.05.png)

  
2) run the Groovy [code](https://gist.github.com/DinisCruz-Dev/9258689) in the REPL window (note that the image below is using a different root file and the version of script is an [older one](https://gist.github.com/DinisCruz-Dev/9214909) (which didn't contain the recursive folder monitoring)):

[![](images/Screen_Shot_2014-02-25_at_23_20_16.png)](http://3.bp.blogspot.com/-WlHWeBYayFs/Uw0l0Qw0ClI/AAAAAAAAHkw/cPiceTI0bRI/s1600/Screen+Shot+2014-02-25+at+23.20.16.png)

  
... on execution you will see a new view (called _Synced WebBrowser_) show up in your current Eclipse instance.

3) make some changes on the Html file

[![](images/Screen_Shot_2014-02-25_at_23_20_56.png)](http://1.bp.blogspot.com/-3hwB5CS2Sz4/Uw0l0ANUEGI/AAAAAAAAHks/tOzg-68oEmA/s1600/Screen+Shot+2014-02-25+at+23.20.56.png)

  
4) and note that the **_Synced WebBrowser_** view will be refreshed automatically (it takes about 500ms to 1s for the change to be picked up (see this [SO answer](http://stackoverflow.com/a/18362404/262379) for why I had to use the **_SensitivityWatchEventModifier.HIGH_** setting on the WatchService))

[![](images/Screen_Shot_2014-02-25_at_23_21_20.png)](http://4.bp.blogspot.com/-mKMjpd8Nycg/Uw0l0WI1g5I/AAAAAAAAHk0/ovo8RUJmTQM/s1600/Screen+Shot+2014-02-25+at+23.21.20.png)

  
5) if you open the **_TeamMentor Console_**, you will also see a number of log messages that help to see what is going on:

[![](images/Screen_Shot_2014-02-25_at_23_21_42.png)](http://3.bp.blogspot.com/-hzNrLbbJT2g/Uw0l07lwo4I/AAAAAAAAHlY/uFfKesHCk0M/s1600/Screen+Shot+2014-02-25+at+23.21.42.png)

  
6) here is another example where I added a new [Bootstrap](http://getbootstrap.com/components/) css div:

[![](images/Screen_Shot_2014-02-25_at_23_21_57.png)](http://4.bp.blogspot.com/-CuJL7Axks6w/Uw0l01_GZFI/AAAAAAAAHlI/ZfiUoF5hiXg/s1600/Screen+Shot+2014-02-25+at+23.21.57.png)

  
7) which was immediately (~500ms) shown on save

[![](images/Screen_Shot_2014-02-25_at_23_22_09.png)](http://1.bp.blogspot.com/-Ka8FOIMSmsA/Uw0l1IpM3PI/AAAAAAAAHlE/sGVNrExrMFM/s1600/Screen+Shot+2014-02-25+at+23.22.09.png)

  
8) note that the the log message shows the events being triggered and the resetting of the **_WatcherService_**:

[![](images/Screen_Shot_2014-02-25_at_23_22_16.png)](http://4.bp.blogspot.com/-dyhe4VKH1iQ/Uw0l12g2nxI/AAAAAAAAHlU/VpPM6Rqa1_M/s1600/Screen+Shot+2014-02-25+at+23.22.16.png)




- - - - 
[Table of Contents](../Table_of_contents.md) | [Code](../Code)