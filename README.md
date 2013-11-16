# MildCrypt
Ever sit at a coffee shop, working on your app, and feeling the need to look
over your shoulder every time you edit the settings/configuration file because
the [database] passwords are just stting there in cleartext asking to be stolen?
If you are a software developer with a modicum of security consciousness, you
have.  MildCrypt solves that problem by providing a mild layer of encryption and
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
var password = (function(){var _=""; var __=[202,187,113,208,61,188,145,145,137,49,39,120];for(var $ in __)_+=String.fromCharCode(__[$]^[167,212,31,187,88,197,163,226,249,80,68,29,71,129,188,70][$%16]);return _;})();
```
Good luck gleaning the password from that mess.  To protect against Google Glass
wearers, let the string run off the screen, *i.e.* do not add newlines.
## Use
Go to the [MildCrypt website](http://2deviant.github.io/mildcrypt).

## Use Cases

### Passwords
Situation described in the introduction.

### Emails
Want to post your email on a website **and** give people the ability to copy and
paste it? Wasn't a problem until the advent of email-harvesting bots.  Said bots
either can't or don't interpret (complex) JavaScript.  Inserting a snippet of
JavaScript code instead of cleartext email beats the spam bots.

