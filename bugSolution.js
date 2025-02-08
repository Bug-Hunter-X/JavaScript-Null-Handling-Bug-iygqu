function foo(a, b) {
  // Use nullish coalescing operator (??) to provide default values if a or b are null or undefined
  a ??= 0; 
  b ??= 0; 
  return a + b; 
}
//alternative solution
function foo(a, b) {
  a = (a === null || a === undefined) ? 0 : a; //explicit check for null and undefined values
  b = (b === null || b === undefined) ? 0 : b; 
  return a + b;
}