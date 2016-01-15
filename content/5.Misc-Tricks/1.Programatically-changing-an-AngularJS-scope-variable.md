##  Programatically changing an AngularJS scope variable and adding Firebug Lite to an AngularJs app 

In this post I'm going to show two really nice tricks that help when developing AngularJS applications:  


  * adding [Firebug Lite](https://getfirebug.com/firebuglite) to the current browser
  * changing the scope value outside a normal AngularJS controller, service or module

Let's say that we are inside Eclipse and have this simple AngularJS app ([gist here](https://gist.github.com/DinisCruz-Dev/9295707))  

[![](images/Screen_Shot_2014-03-01_at_19_16_24.png)](http://1.bp.blogspot.com/-CDHM1rHQaAI/UxI02ZuYN8I/AAAAAAAAIDA/0QgXby8y2Z8/s1600/Screen+Shot+2014-03-01+at+19.16.24.png)
  
... which looks like this when executed:

[![](images/Screen_Shot_2014-03-01_at_19_16_44.png)](http://4.bp.blogspot.com/-vlpBv8Tir44/UxI02Mmqv2I/AAAAAAAAIC8/8NJEVaQW1n4/s1600/Screen+Shot+2014-03-01+at+19.16.44.png)
  
To add Firebug Lite to this page, all we need to do is to add a script reference to **_https://getfirebug.com/firebug-lite-debug.js_**

[![](images/Screen_Shot_2014-03-01_at_19_17_24.png)](http://3.bp.blogspot.com/-GRojpOZsMUE/UxI04kQ9mDI/AAAAAAAAIDg/bHjCPjkB0Zw/s1600/Screen+Shot+2014-03-01+at+19.17.24.png)
  
... and after refresh we will have a nice Firebug Lite console (and other nice goodies) at the bottom of our page :)

[![](images/Screen_Shot_2014-03-01_at_19_17_46.png)](http://4.bp.blogspot.com/-2MM9R0YBlj4/UxI02-hBzUI/AAAAAAAAIDQ/noH3TPQB0PY/s1600/Screen+Shot+2014-03-01+at+19.17.46.png)
  
Next lets see how to access and change the AngularJS **_$scope_** of the _**ContactController**._  

The objective is to access programatically the **_New Contact_** value (set below to _**Hello Firebug :)**_ )

[![](images/Screen_Shot_2014-03-01_at_19_18_10.png)](http://1.bp.blogspot.com/-AKCorcui5UM/UxI03LCnB9I/AAAAAAAAIDI/ucPhn117eZk/s1600/Screen+Shot+2014-03-01+at+19.18.10.png)

In Firebug Lite, we can access the scope object by executing: **_var scope = angular.element(document.body).scope()_**

[![](images/Screen_Shot_2014-03-01_at_19_18_46.png)](http://3.bp.blogspot.com/-1_kxIwKlKRw/UxI06O2I6CI/AAAAAAAAID4/IbOdodEm8BI/s1600/Screen+Shot+2014-03-01+at+19.18.46.png)
  
... and the **New Contact **value value using: **_scope.newcontact_**

[![](images/Screen_Shot_2014-03-01_at_19_19_11.png)](http://3.bp.blogspot.com/-Q2WqlMNrQwo/UxI04Kr6rYI/AAAAAAAAIDc/fy5vBtEr1uM/s1600/Screen+Shot+2014-03-01+at+19.19.11.png)

If we change the **_New Contact_** value here (in Firebug Lite) using **_scope.newcontact = "Hello AngularJS"_**

[![](images/Screen_Shot_2014-03-01_at_19_19_36.png)](http://2.bp.blogspot.com/-cvDREC_1h1g/UxI04_CQmvI/AAAAAAAAIDk/CVGIsLyfC58/s1600/Screen+Shot+2014-03-01+at+19.19.36.png)
  
... we will notice that the value will not automagically (ala AngularJS way) change in the binded (via **_ng-model_**) input field

[![](images/Screen_Shot_2014-03-01_at_19_19_41.png)](http://4.bp.blogspot.com/-SkskjaJgQ9E/UxI05IO_5pI/AAAAAAAAID8/Rl0GGMb02kQ/s1600/Screen+Shot+2014-03-01+at+19.19.41.png)
  
The reason that didn't happen is because the change was done outside the AngularJS $digest cycle.

The solution is to call the **_scope.$apply()_** function (and the input field will be updated):

[![](images/Screen_Shot_2014-03-01_at_19_20_55.png)](http://1.bp.blogspot.com/-cAkxQt3hi_o/UxI05aD58YI/AAAAAAAAID0/E1pKQdxQ_04/s1600/Screen+Shot+2014-03-01+at+19.20.55.png)




- - - - 
[Table of Contents](../Table_of_contents.md) | [Code](../Code)