# Pretty-printing

## Start

    {
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

## Ordering

Options:
    
    {
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

Document:

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
    
## Traversing (Flattening)

Options:

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
      },
      "keys": [
        "_id",
        "_rev",
        "title",
        "markdown",
        "location",
        "name",
        "tags"
      ],
      "traversal": [
        {
          "path":  [],
          "order": "pre"
        },
        {
          "path":  ["_id"]
        },
        {
          "path":  ["_rev"]
        },
        {
          "path":  ["title"]
        },
        {
          "TODO":  "add remaining items in object root"
        },
        {
          "path":  [],
          "order": "post"
        }
      ]
    }

## Printing each node

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
      },
      "keys": [
        "_id",
        "_rev",
        "title",
        "markdown",
        "location",
        "name",
        "tags"
      ],
      "traversal": [
        {
          "path":  [],
          "order": "pre",
          "text":  "{\n"
        },
        {
          "path":  ["_id"],
          "text":  "  \"_id\": \"231412\",\n"
        },
        {
          "path":  ["_rev"],
          "text":  "  \"_rev\": \"31723128\",\n"
        },
        {
          "path":  ["title"],
          "text":  "  \"title\": \"Ben Atkin\",\n"
        },
        {
          "TODO":  "add remaining items in object root"
        },
        {
          "path":  [],
          "order": "post",
          "text":  "}\n"
        }
      ]
    }

# Joining nodes to pretty-print

Up until this point, data has only been added. Nothing's been thrown
out. Now this transformation joins all text within traversel.

Actually, this multi-line string could be a property on the object.

    {
      "_id":   "231412",
      "_rev":  "31723128",
      "title": "Ben Atkin",
      (TODO)
    }

