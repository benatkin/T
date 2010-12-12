_ ||= require('underscore')._

expand = (node) ->
  try
    keys = _.keys node.value
  catch
    return

  value = node.value
  delete node.value
  node.children = {}
  keys.each (key) ->
    node.children[key] = {'value': value[key], 'parent': node}
    expand node.children[key]

traverse = (node, rules, callback) ->
  context ||= {}
  context.root ||= data
  context.node ||= data

matchRule = (data, rule) ->

applyRule = (data, rule) ->

applyOrdering = (data, rules) ->

rules =
  couchdb:
    position:  'top'
    fields:    ['_id', '_rev']
    important: true
  location:
    position: 'top'
    fields:   ['city', 'state', 'country']
  wiki:
    position: 'top'
    fields:   ['title', 'markdown']

example =
  _id: '231412'
  _rev: '31723128'
  location:
    city:    'Boulder'
    country: 'USA'
    state:   'CO'
  markdown: "# Ben Atkin's Page\n\nI like pure functions.</p>"
  name:
    first: 'Ben'
    last:  'Atkin'
  tags:
    'programmer'
    'boulder'
  title: 'Ben Atkin'

