// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Interpret the prompt: implementing getElementsByClassName recursively. with document.body, element.childNodes, element.classList
// I: className (string) O: array of elements C: E:
// Start from document.body, get class list, if a class matches className, push element onto array, then call getElementsBy ClassName for each child, if child === undefined, return array

var getElementsByClassName = function(className, nodes
) {
  // set node as default to document.body. if other node is passed in as argument, use that.
  nodes = nodes || [document.body];

  //initialize array
  var matches = [];
  // get the classList of the nodes.
  for (var i = 0; i < nodes.length; i++) {
    var classes = nodes[i].classList;

    //iterate through the classLists. If contains className, push node onto an array.
    if (classes) {
      for (var j = 0; j < classes.length; j++) {
        if (classes[j] === className) {
          matches.push(nodes[i].tagName.toLowerCase());
        }
      }
    }
    //if there are children of this element, call getElementsByClassName(className, children). store that into a variable.
    console.log('childNodes: ', nodes[i].childNodes);
    if (nodes[i].childNodes) {
      matches = matches.concat(getElementsByClassName(className, nodes[i].childNodes));
    }
  }
  //return the recursive variable.concat(array);

  return matches;

};
