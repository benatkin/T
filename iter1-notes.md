# Use Cases

* Pretty-printing
* Outlining
* Tables

## Pretty-printing

### Start

Document:

    {
      "_id": "231412",
      "_rev": "31723128",
      "location": {
        "city": "Boulder",
        "state": "CO"
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
    
### Structuring for ordering and metadata

Expands the document to make it orderable. Maybe I'd prefer for it to be
like this:

    {
      "key":      "name",
      "type":     "object",
      "children": [
        {
          "key":   "first",
          "value": "Ben"
        },
        {
          "key":   "last",
          "value": "Atkin"
        }
      ]
    }

For comparison:

    [
      "object",
      {
        "key":   "name"
      },
      [
        "string",
        {
          "key":   "first",
          "value": "Ben"
        },
      ],
      [
        "string",
        {
          "key":   "last",
          "value": "Atkin"
        }
      ]
    ]

Yes, I prefer the object-based one. It would be easier to incorporate
different attribute sets, like attr and css, too.

Document:

    {
      "value": [
        "object",
        [
          "string",
          {
            "key":   "_id",
            "value": "231412"
          }
        ],
        [
          "string",
          {
            "key":   "_rev",
            "value": "31723128"
          }
        ],
        [
          "object",
          {
            "key":   "location"
          },
          [
            "string",
            {
              "key":   "city",
              "value": "Boulder"
            },
          ],
          [
            "string",
            {
              "key":   "state",
              "value": "CO"
            }
          ]
        ],
        [
          "string",
          {
            "key":   "markdown",
            "value": "# Ben Atkin's Page\n\nI like pure functions.</p>"
          }
        ],
        [
          "object",
          {
            "key":   "name"
          },
          [
            "string",
            {
              "key":   "first",
              "value": "Ben"
            },
          ],
          [
            "string",
            {
              "key":   "last",
              "value": "Atkin"
            }
          ]
        ],
        [
          "array",
          {
            "key":   "tags"
          },
          [
            "string",
            {
              "index": 0,
              "value": "programmer"
            },
          ],
          [
            "string",
            {
              "index": 1,
              "value": "boulder"
            }
          ]
        ],
        [
          "string",
          {
            "key":   "title",
            "value": "Ben Atkin"
          }
        ]
      ]
    }

### Ordering

Options:
    
    {
      "couchdb": {
        "position": "top",
        "fields":   ["_id", "_rev"],
        "priority": 10
      },
      "wiki": {
        "position": "top",
        "fields":   ["title", "markdown"]
      }
    }

Output:

    {
      "value": [
        "object",
        [
          "string",
          {
            "key":   "_id",
            "value": "231412"
          }
        ],
        [
          "string",
          {
            "key":   "_rev",
            "value": "31723128"
          }
        ],
        [
          "string",
          {
            "key":   "title",
            "value": "Ben Atkin"
          }
        ],
        [
          "string",
          {
            "key":   "markdown",
            "value": "# Ben Atkin's Page\n\nI like pure functions.</p>"
          }
        ],
        [
          "object",
          {
            "key":   "location"
          },
          [
            "string",
            {
              "key":   "city",
              "value": "Boulder"
            },
          ],
          [
            "string",
            {
              "key":   "state",
              "value": "CO"
            }
          ]
        ],
        [
          "object",
          {
            "key":   "name"
          },
          [
            "string",
            {
              "key":   "first",
              "value": "Ben"
            },
          ],
          [
            "string",
            {
              "key":   "last",
              "value": "Atkin"
            }
          ]
        ],
        [
          "array",
          {
            "key":   "tags"
          },
          [
            "string",
            {
              "index": 0,
              "value": "programmer"
            },
          ],
          [
            "string",
            {
              "index": 1,
              "value": "boulder"
            }
          ]
        ]
      ]
    }

# Functions

## 

# User Interface

* Page
  * Content Area
    * Main Document (1)
    * attachments and widgets (0+)
  * Sidebar
    * Custom processing
    * Suggested processing
    * Selected processing
      * Steps (indicate if nothing changes)

# What

A processing library for trees

# Thoughts

## Lots of things are trees

* HTML is a tree.
* Tables can be thought of as trees. They are in HTML.
* JSON is a tree, and often not a flat one.

## JSONML is more flexible than XML

In JSONML, attributes can contain 

To do the equivalent with XML would be unsightly. One way to do it would
be to have 
