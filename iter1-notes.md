# Use Cases

* Pretty-printing
* Outlining
* Tables
* Rendering Data
* Rendering Pages
* Graphing
* Assembling Data

## Pretty-printing

### Start

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

### Wrapping

Document:

    {
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
    
### Ordering

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
    
### Coloring

Options:

    {
      
    }

### Printing

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
