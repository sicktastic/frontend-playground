ClassNamesLikeThis
methodNamesLikeThis
variableNamesLikeThis
parameterNamesLikeThis
propertyNamesLikeThis

SYMBOLIC_CONSTANTS_LIKE_THIS

//When naming variables and properties referring to jQuery element objects, prefix the name with $:
function doSomethingFancy(selector) {
  var $elements = $(selector)
  ...
}

/*
  Naming private methods and properties
  Private methods and properties (in files, classes, and namespaces) should be named with a leading underscore.
  While we do not currently use any compilers to enforce this, clients of an API or class are expected to respect these conventions.
*/

function _PrivateClass() {
  // should not be instantiated outside of this file
}
