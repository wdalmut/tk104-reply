var Tk104 = function(def) {
  if (!(this instanceof Tk104)) {
    return new Tk104(def);
  }
  this.def = def;
  return this;
};

Tk104.prototype.reply = function(text) {
  for (var i=0; i<this.def.length; i++) {
    var item = this.def[i];
    if (item.regex.test(text)) {
      return (typeof item.reply === 'function') ? item.reply(this) : item.reply;
    }
  }
}

module.exports = Tk104;
