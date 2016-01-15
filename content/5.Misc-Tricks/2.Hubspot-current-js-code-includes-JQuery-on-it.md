##  Hubspot current.js code includes JQuery on it 

Although I'm using Angular.js on the HubSpot TBot page (see [Submitting TM users to HubSpot via TBOT interface (using Angular JS)](http://blog.diniscruz.com/2013/04/submitting-tm-users-to-hubspot-via-tbot.html) ) I'm still more comfortable/knowledgeable in jQuery, so I decided to use it to populate the HubSpot fields.

So my first action was to load jQuery at the top of the TBot page:

[![image](images/image_thumb1.png)](http://lh3.ggpht.com/--wYdlc3ldvY/UVrQXAKg0HI/AAAAAAAAAuo/rjzSA0sZXFk/s1600-h/image%25255B2%25255D.png)

which allowed me to do this:

[![image](images/image_thumb_25255B1_25255D.png)](http://lh5.ggpht.com/-fjeTRJC1ieY/UVrQYUJNOdI/AAAAAAAAAu4/dcdiaWVvWik/s1600-h/image%25255B5%25255D.png)

(note the mix of JQuery and AngularJS code)

But then as I looked through the [http://js.hubspot.com/forms/current.js](http://js.hubspot.com/forms/current.js) file (which you will also notice that for TM, I saved it on the **_/_Customizations_** folder)

[![image](images/image_thumb_25255B2_25255D1.png)](http://lh6.ggpht.com/-B4lchmI5eqk/UVrQZo_dKLI/AAAAAAAAAvI/NPhwAABj5n0/s1600-h/image%25255B8%25255D.png)

In the **_Util - Javascript Format (and Beautify).h2_** O2 Platform tool:

[![image](images/image_thumb_25255B3_25255D.png)](http://lh3.ggpht.com/-tpF15BAxkrM/UVrQa_Gd-GI/AAAAAAAAAvY/S6rRHbdqVB8/s1600-h/image%25255B11%25255D.png)

I noticed that they had embedded **_jQuery _**in the **_current.js_** code, namely at the **_window.hsJQuery_** variable

[![image](images/image_thumb_25255B4_25255D1.png)](http://lh4.ggpht.com/-s70Xrt2fEM4/UVrQcWqcdxI/AAAAAAAAAvo/bsVPeVLlCtA/s1600-h/image%25255B14%25255D.png)

this means that we can use jQuery to access the page's DOM

[![image](images/image_thumb_25255B5_25255D1.png)](http://lh4.ggpht.com/-1DacPtQgUHQ/UVrQdsyrxtI/AAAAAAAAAv4/paOglC_FKFM/s1600-h/image%25255B17%25255D.png)

Now, if we remove the jQuery script import:

[![image](images/image_thumb_25255B6_25255D1.png)](http://lh6.ggpht.com/-JxjQcLe8ecY/UVrQe68kZ8I/AAAAAAAAAwI/LQmPM32_qmQ/s1600-h/image%25255B20%25255D.png)

the **_$_** variable will not be available:

[![image](images/image_thumb_25255B7_25255D.png)](http://lh3.ggpht.com/-TjgHD74fmjI/UVrQf2MxEaI/AAAAAAAAAwY/SGn-VzQ1iIg/s1600-h/image%25255B23%25255D.png)

But if we assign **_$_** to **_window.hsJQuery_**, we are back in action:

[![image](images/image_thumb_25255B8_25255D.png)](http://lh3.ggpht.com/-sS2EMOOO4FI/UVrQhIlkjrI/AAAAAAAAAwo/IQq3GdHWqHw/s1600-h/image%25255B26%25255D.png)

Finally, we add that assignment to the TBot page

[![image](images/image_thumb_25255B10_25255D.png)](http://lh3.ggpht.com/-_OKGu7VO41U/UVrQiYuf5OI/AAAAAAAAAw4/PVDhlOsFDTs/s1600-h/image%25255B32%25255D.png)

And the previous code (that used the **_$_**) is working again (now using the JQuery version from **_current.js_**) 




- - - - 
[Table of Contents](../Table_of_contents.md) | [Code](../Code)