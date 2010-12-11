# Use Cases

* Pretty-printing
* Outlining
* Tables
* Rendering Data
* Rendering Pages
* Graphing
* Assembling Data

# Functions

* **applyOrder()** - Applies ordering rules based on what's in the
  document.

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
