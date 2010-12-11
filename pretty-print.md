# Pretty-printing

## Start

    {
      "ordering": {
        "couchdb": {
          "position": "top",
          "keys":     ["_id", "_rev"],
          "priority": 10
        },
        "location": {
          "position": "top",
          "keys":     ["city", "state", "country"]
        },
        "wiki": {
          "position": "top",
          "keys":     ["title", "markdown"]
        }
      },
      "value": {
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
      }
    }

## Ordering

This metadata gets added:
    
    {
      "children": {
        "location": {
          "keys": [
            "city",
            "state",
            "country"
          ]
        }
      },
      "keys": [
        "_id",
        "_rev",
        "title",
        "markdown",
        "location",
        "name",
        "tags"
      ]
    }

# Pretty-printing JSON

This multi-line string gets added at the eref ["text", "outer"].

    {
      "_id":   "231412",
      "_rev":  "31723128",
      "title": "Ben Atkin",
    }

