##  Using Chrome inside a native VisualStudio pane (using Window Handle Hijacking) 

To help me debug and visualize an [AngularJS](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CDMQFjAA&url=http%3A%2F%2Fangularjs.org%2F&ei=Fv03UbbUF4TZPIq-gegB&usg=AFQjCNF_LWQwZlAQzMLiHoSWsZBxLguMng&bvm=bv.43287494,d.ZWU) page I was developing, I used the O2's [Window Handle Hijack](http://blog.diniscruz.com/search/label/WinAPI) technique to insert an Chrome window inside VisualStudio 2010.

Here it is in action:  
  
[![image](images/image_thumb.png)](http://lh6.ggpht.com/-T6U9Cw6Xcho/UTfs4NbiqlI/AAAAAAAAKFk/3qXrJRzHx-k/s1600-h/image%25255B2%25255D.png)

On the right you can see a full chrome window, inserted inside a VisualStudio dockable pane.

On the left you can see the AngularJs file (rendered from a RazorSharp template) that I can edit and quickly view its output on the right-hand-side Chrome window (with no web recompilation needed)

To create this, I searched in [O2 Platform](http://blog.diniscruz.com/p/owasp-o2-platform.html) for the **_Util - Win32 Window Handle Hijack (simple).h2_**  script

[![image](images/image_thumb_25255B4_25255D.png)](http://lh4.ggpht.com/-ZeQYWYm2FUs/UTfs7P5kz6I/AAAAAAAAKF0/xn3B9cGdFSE/s1600-h/image%25255B10%25255D.png) which looks like this: [![image](images/image_thumb_25255B5_25255D.png)](http://lh3.ggpht.com/-_pru3pZ411I/UTfs80L8RdI/AAAAAAAAKGE/W6S3ESUiZ2A/s1600-h/image%25255B11%25255D.png)

Had a look at its source code to see how it was created (note the Extension Method **_add_Handle_HijackGui_** ):

[![image](images/image_thumb_25255B6_25255D.png)](http://lh4.ggpht.com/-IkibuPkyzUI/UTfs-pniyrI/AAAAAAAAKGQ/JC-nBg2rmTU/s1600-h/image%25255B14%25255D.png)

Then inside a VisualStudio, I opened a C# REPL script:

[![image](images/image_thumb_25255B15_25255D.png)](http://lh3.ggpht.com/-zZAtpP9j4kc/UTftAuUxDvI/AAAAAAAAKGg/HHGIMPNnh9s/s1600-h/image%25255B18%25255D.png)

This gave me access to the **_VisualStudio_2010_** API

[![image](images/image_thumb_25255B17_25255D.png)](http://lh5.ggpht.com/-oW4-dKmJwHY/UTftCFFZ_OI/AAAAAAAAKG0/YKHJT62ViXA/s1600-h/image%25255B22%25255D.png)

where I can use the Extension Method **_add_Handle_HijackGui_**   

[![image](images/image_thumb_25255B18_25255D.png)](http://lh6.ggpht.com/-0wy3oVTrZ6Q/UTftDwXje1I/AAAAAAAAKHE/lTbH4npLDMo/s1600-h/image%25255B25%25255D.png)

to create a native VisualStudio pane with the **_Windows Handle Hijack Gui_**  

[![image](images/image_thumb_25255B20_25255D.png)](http://lh5.ggpht.com/-_0SlLvHoJek/UTftF1XKKNI/AAAAAAAAKHU/BRO-1mq9b28/s1600-h/image%25255B31%25255D.png)

With this GUI, we can grab any Window's Window, by dragging the target icon (top left) into the window we want to use/hijack:

[![image](images/image_thumb_25255B21_25255D.png)](http://lh3.ggpht.com/-TPzSsNGZTx4/UTftHhexV3I/AAAAAAAAKHk/J9qtuNoFjao/s1600-h/image%25255B34%25255D.png)

Tip: before Hikacking a window, it is a good idea to take a screenshot and see if we have the right one:

[![image](images/image_thumb_25255B23_25255D.png)](http://lh3.ggpht.com/-VPAmvLWhxQM/UTftJKmHjRI/AAAAAAAAKH0/j1RSmEem6vk/s1600-h/image%25255B40%25255D.png)

Once we're sure, just hit the **_Hijack _**link, and we will have  have a fully functional Chrome window that we can place anywhere inside VisualStudio's GUI.

[![image](images/image_thumb_25255B25_25255D.png)](http://lh6.ggpht.com/-BQYQEf4YRm0/UTftLFR28UI/AAAAAAAAKIE/yLHKzUaioZA/s1600-h/image%25255B46%25255D.png)

For example, we can place it in the documents area as one of the source code files  
(tip: double click on the 'Hijacked Window/Control' text to hide the hijack controls)

[![image](images/image_thumb_25255B27_25255D.png)](http://lh3.ggpht.com/-JoaEeukEZZI/UTftM9lMxRI/AAAAAAAAKIU/ZUBRubmRiFc/s1600-h/image%25255B52%25255D.png)

As a final example, here is what it looks like if we just Hijack the browser's website window (without the navigation and top bars)

[![image](images/image_thumb_25255B22_25255D.png)](http://lh5.ggpht.com/-wu5WCWhZ8qo/UTftO2OGYiI/AAAAAAAAKIk/dwrrs00lbUU/s1600-h/image%25255B37%25255D.png)




- - - - 
[Table of Contents](../Table_of_contents.md) | [Code](../Code)