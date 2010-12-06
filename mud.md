# Metadata for Unstructured Data

## Structured, Semi-structured, and Un-structured Data

* Structured data is where only fields that are anticipated can be
  there, and there are required fields.
* Semi-structured is where some fields are required or anticipated.
* Unstructured is where the data can be anything within the format.

CouchDB databases cannot accept arbitrary JSON as a top-level document.
`{"_id": []}` would not be allowed. On the other hand, 
`{"value": {"_id": []}` would be.

The metadata adds a restriction but it is useful to CouchDB. Other
metadata can be useful to other applications but it can clutter up
namespaces.

## Wrapper objects

Programmers use wrappers without noticing it. With a DOM object you
have direct access to an object's attribute like *checked*. With a
jQuery object, you get access to the attribute with 
`sel.attr('checked')`.

CouchDB views put what's emitted, without any merging. The first
parameter is `key` and the second parameter is `value`. CouchDB also
adds `_id`. Since the view function writers decide what gets emitted,
CouchDB's designers could have said to emit an object but don't let it
contain `_id` or `key` as those are reserved words. They instead went
for a much saner approach. There are no reserved words in JSON, and
there are no reserved words in second parameters to an *emit()*
function.

## Value and Children

Stealing terminology from CouchDB, the data shall be under *value*.
Metadata for the document shall be alongside *value*. Metadata for child
nodes shall be under *children*. Note the distinction: the
MudDocument is a MudElement and its children are also MetaElements.

The nesting for children, when fully expanded, is twice as deep as the
document. Example:

    {
      "value": {
        "a": {
          "b": "C"
        }
      }
      "children": {
        
      }
    }

In JSON, children should only be fully expanded if there's metadata all
the way. If there's no metadata, simply wrapping with "value" shall
suffice.

In fact, if there isn't a "value" key in the MetaDocument, it could be
assumed that all keys outside of a list of special metadata (like \_id
and \_key) are the data. Or, maybe \_id and \_key are the data,
depending on how the distinction between data and metadata is being
made.

There should be validation for putting a document into a collection (the
nesting level of collections needs to be well-defined). If it contains
"value", it would not be a candidate for being an unwrapped object.
Ditto if it doesn't yet have an \_id or \_rev within the context of the
system but the document has an \_id or \_rev.

## Realization of MudElements within JavaScript

The metadata shall turn into jQuery-like objects with methods for
traversal, getting and setting metadata, and more. The value reference
will also be maintained in the jQuery objects. The value reference isn't
part of the JSON because it would be duplicated and that should be
avoided. The parent reference should also be created.

The full depth could be created, or it could lazily be created.

Data and metadata could be retrieved and set with 'get' and 'meta'.
