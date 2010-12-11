var example = {
  "data": {
    "_id": "231412",
    "_rev": "31723128",
    "location": {
      "city":    "Boulder",
      "country": "USA",
      "state":   "CO"
    },
    "markdown": "# Ben Atkin's Page\n\nI like pure functions.</p>",
    "name": {
      "first": "Ben",
      "last": "Atkin"
    },
    "tags": [
      "programmer",
      "boulder"
    ],
    "title": {
      "Ben Atkin"
    }
  },
  "orderingRules": {
    "couchdb": {
      "position": "top",
      "fields":   ["_id", "_rev"],
      "priority": 10
    },
    "location": {
      "position": "top",
      "fields":   ["city", "state", "country"]
    },
    "wiki": {
      "position": "top",
      "fields":   ["title", "markdown"]
    }
  }
};

var T = {
  "meta": function(tree, eref, value) {
    if (arguments.length > 2) {
      return tree;
    }
  },

  "traverse": function(tree, callback) {

  },

  "applyOrdering": function(tree) {
    var ordering = tree.ordering, eref = [], current = tree.value, keys, key;
    if (! (ordering && ordering.push)) return;

    while (true) {
      for (key in Object.keys(tree)) {
      }
    }
  },

  "prettyPrint": function(tree) {
  }
}

