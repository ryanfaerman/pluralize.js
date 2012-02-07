(function() {
  var __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  String.prototype.ends_with = function(fragment) {
    var frag;
    if (typeof fragment !== 'string') {
      return __indexOf.call((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = fragment.length; _i < _len; _i++) {
          frag = fragment[_i];
          _results.push(this.ends_with(frag));
        }
        return _results;
      }).call(this), true) >= 0;
    } else {
      return this.slice(this.length - fragment.length, this.length + 1 || 9e9) === fragment;
    }
  };

  String.prototype.pluralize = function() {
    var ablaut, c, consonants, remove_last_n_letters, root, selfPlurals, _ref, _ref2,
      _this = this;
    consonants = "qwrtpsdfghjklzxcvbnm".split('');
    ablaut = {
      foot: 'feet',
      goose: 'geese',
      louse: 'lice',
      mouse: 'mice',
      tooth: 'teeth',
      person: 'people',
      ox: 'oxen',
      child: 'children'
    };
    selfPlurals = ['deer', 'moose', 'sheep', 'bison', 'salmon', 'pike', 'trout', 'fish', 'swine', 'aircraft', 'blues', 'cattle'];
    remove_last_n_letters = function(n) {
      return _this.slice(0, (_this.length - n - 1) + 1 || 9e9);
    };
    if (_ref = "" + this, __indexOf.call(selfPlurals, _ref) >= 0) return "" + this;
    if (ablaut["" + this] != null) return "" + ablaut[this];
    if (this.ends_with(['ies', 'ese'])) return "" + this;
    if (this.ends_with(['ix', 'ex'])) {
      root = remove_last_n_letters(2);
      return "" + root + "ices";
    }
    if (this.ends_with('man')) {
      root = remove_last_n_letters(3);
      return "" + root + "men";
    }
    if (this.ends_with('fe')) {
      root = remove_last_n_letters(2);
      return "" + root + "ves";
    }
    if (this.ends_with('f')) {
      root = remove_last_n_letters(1);
      return "" + root + "ves";
    }
    if (this.ends_with('on')) {
      root = remove_last_n_letters(2);
      return "" + root + "a";
    }
    if (this.ends_with('us')) {
      root = remove_last_n_letters(2);
      return "" + root + "i";
    }
    if (this.ends_with('is')) {
      root = remove_last_n_letters(2);
      return "" + root + "es";
    }
    if (this.ends_with('um')) {
      root = remove_last_n_letters(2);
      return "" + root + "a";
    }
    if (this.ends_with('a' && ((_ref2 = "" + this) === 'alumna' || _ref2 === 'formula'))) {
      root = remove_last_n_letters(1);
      return "" + root + "ae";
    }
    if (this.ends_with('ie')) {
      root = remove_last_n_letters(1);
      return "" + root + "ce";
    }
    if (this.ends_with(['s', 'sh', 'z', 'x', 'ch', 'o'])) return "" + this + "es";
    if (this.ends_with((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = consonants.length; _i < _len; _i++) {
        c = consonants[_i];
        _results.push("" + c + "y");
      }
      return _results;
    })())) {
      root = remove_last_n_letters(1);
      return "" + root + "ies";
    }
    return "" + this + "s";
  };

}).call(this);
