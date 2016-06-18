# TK104 - Reply

Just a simple wrapper to reply to TK104 SMS

```js
var tk = require('./tk104-reply')([
  {
    "regex": /^sms ok/i,
    "reply": function() {
      return function(pwd) {
        return "sleep" + pwd + " deepshock";
      }
    },
  },
  {
    "regex": /^sleep deep ok/i,
    "reply": false
  }
]);

var message = tk.reply("SMS OK!")(123456); // 'sleep123456 deepshock'
var stop = tk.reply("sleep deep ok");      // false
```

