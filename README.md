# MildCrypt
Ever sit at a coffee shop, working on your app, and feeling the need to look
over your shoulder every time you edit the settings/configuration file because
the [database] passwords are just sitting there in cleartext asking to be stolen?
If you are a software developer with a modicum of security consciousness, you
have.  MildCrypt converts your precious strings into identcially-looking Unicode
characters, indistinguishable enough to the eye but, discernible by the computer.
Spammers and phishers have been using this trick for a while, it is
time to put it to good use.  Even if someone takes a picture of
your screen, (s)he will not be able to steal the access codes (a.k.a passwords).

## Example
MildCrypt turns this:
```javascript
var password = 'monkey2space';
```
into this:
```javascript
var password = (function(){var _="",i=0,f="ꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꞪꜢꜣꜤꜥꜨꝐꝑꝒꝓꝔꝕꝖꝗꝘꝙꝜꝝꝞꝟꜩꜪꜫꝠꝡꝢꝣꝤꝥꝦꝧꝨꝩꝪꝫꝬꝭꝮꝯꝰꝱꝲꝳꝴꝵꝶꝷꝸꝹꝺꝻꝼꝽꝾꝿ",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",$="ꝝꝖꝼꝭꝜꝵꝕꝸꜣꝦꜤꝯꝘꝖꜤꝤ";while(i<16)_+=r[f.indexOf($[i++])];return atob(_);})()
```
Good luck gleaning the password from that!
## Use
Go to the [MildCrypt website](http://2deviant.github.io/mildcrypt) if
you just want to obfuscate a string or two.  If you want to use this code, read
on.

## Use Cases

### Passwords
Situation described in the introduction.

### Emails
Want to post your email on a website **and** give people the ability to copy and
paste it? Wasn't a problem until the advent of email-harvesting bots.  Said bots
either can't or don't interpret (complex) JavaScript.  Inserting a snippet of
JavaScript code instead of cleartext email beats the spam bots.

