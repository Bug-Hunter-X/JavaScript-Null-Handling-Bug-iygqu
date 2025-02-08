function foo(a, b) {
  if (a === null || b === null) {
    return null; //this is wrong
  }
  return a + b; 
}