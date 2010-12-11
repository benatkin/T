# About

A tree data editing and manipulation tool.

# Navigation

* Like HTML and jQuery
* Children, parent, siblings
* Finding rules, like CSS

# Metadata

* Attach to any node
* Assume no structure

# Transformations

* Pretty-printing
* Tables
* Rendering Data
* Rendering Pages
* Graphing
* Assembling Data

# Data Model

* Document-based
* Tags
* Time
* Attached documents (versions)

# Viewing and Editing

* Outlining
* Node Navigation
* History
* Wiki-like editing
* Rich text

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

# Thoughts

## Lots of things are trees

* HTML is a tree.
* Tables can be thought of as trees. They are in HTML.
* JSON is a tree, and often not a flat one.

## JSONML is more flexible than XML

In JSONML, attributes can contain anything an element can. This can be
handy in processing steps before things need to be turned into html
attributes.
