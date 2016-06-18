var TK104 = require('../index');

describe("tk104 reply", function() {
  it ("should reply to me with functions", function() {
    var message = new TK104([
      {
        "regex": /^sms ok/i,
        "reply": function() {
          return "sleep";
        }
      }
    ]).reply("SMS ok!");

    expect("sleep").toEqual(message);
  });

  it("should reply to me with direct text", function() {
    var message = new TK104([
      {
        "regex": /^sms ok/i,
        "reply": "sleep"
      }
    ]).reply("SMS ok!");

    expect("sleep").toEqual(message);
  });

  it("should reply to me with functions twice", function() {
    var message = new TK104([
      {
        "regex": /^sms ok/i,
        "reply": function() {
          return function(pwd) {
            return "sleep"+pwd+" deepshock";
          }
        }
      }
    ]).reply("SMS ok!")(123456);

    expect("sleep123456 deepshock").toEqual(message);
  });

  it("should work as direct function", function() {
    var message = require('../index')([
      {
        "regex": /^sms ok/i,
        "reply": "sleep"
      }
    ]).reply("SMS ok!");

    expect("sleep").toEqual(message);
  });

  it ("should return a direct value", function() {
    var message = require('../index')([
      {
        "regex": /^sms ok/i,
        "reply": false
      }
    ]).reply("SMS ok!");

    expect(false).toBe(message);
  });

  it ("should reply with false on missing regex", function() {
    var message = require('../index')([
      {
        "regex": /^sms ok/i,
        "reply": false
      }
    ]).reply("MISSING");

    expect(false).toBe(message);
  });
});
