# MildCrypt
Ever sit at a coffee shop, working on your app, and feeling the need to look
over your shoulder every time you edit the settings/configuration file because
the [database] passwords are just stting there in cleartext asking to be stolen?
If you are a software developer with a modicum of security consciousness, you
have.  MildCrypt offers a mild layer of encryption and
obfuscation to any string of text in a variety of programming languages 
(JavaScript for now, more to come later).  Even if someone takes a picture of
your screen, (s)he will not be able to steal the access codes (a.k.a passwords).

## Example
MildCrypt turns this:
```javascript
var password = 'monkey2space';
```
into this:
```javascript
var password = (function(){var _='';for(var $=0;$<12;$++)_+=String.fromCharCode([49,121,254,215,137,29,126,102,205,195,47,90][$]^[92,22,144,188,236,100,76,21,189,162,76,63,185,247,244,222][$%16]);return _;})();
```
Good luck gleaning the password from that mess.  To protect against Google Glass
wearers, let the string run off the screen, *i.e.* do not add newlines.
## Use
Go to the [MildCrypt website](http://2deviant.github.io/mildcrypt/index.html).

## Use Cases

### Passwords
Situation described in the introduction.

### Emails
Want to post your email on a website **and** give people the ability to copy and
paste it? Wasn't a problem until the advent of email-harvesting bots.  Said bots
either can't or don't interpret (complex) JavaScript.  Inserting a snippet of
JavaScript code instead of cleartext email beats the spam bots.

