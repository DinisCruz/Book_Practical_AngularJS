### A3 - Cross-site-scripting

- should not be possible
- need assurance
- how it can be proven that doesn't exists
  - things to do: add test that confirms that Pug's raw html is not used (see if it possible to remove this feature from Pug (open issue asking for it))
- [A3 - Cross-site-scripting](https://www.owasp.org/index.php/Top_10_2013-A3-Cross-Site_Scripting_(XSS))


#### AngularJS directives, the source of XSS vulns

  - it is in directives where I've seen XSS vulns in Angular Apps

#### Other ways to create XSS in Angular

- see http://blog.portswigger.net/2016/01/xss-without-html-client-side-template.html research
