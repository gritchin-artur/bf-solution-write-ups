# [Mark](https://edabit.com/user/6QR2QdW689ihtHjan)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

This problem involves calculating the sum of all integers from 1 to a given
number. Mark chose a recursive strategy, breaking the problem down into smaller
subproblems. His approach adds the current number to the sum of all numbers
below it, repeating this process until reaching the base case.

## Implementation

Mark wrote a recursive implementation that uses a conditional base case and a
recursive step to compute the sum. The trickiest bit is understanding how the
recursion unfolds, stacking calls until the base case is hit, then resolving
back up to the final result.

**Traditional function with explicit return**: Mark’s solution uses a standard
function with explicit `return` statements, one for the base case (`num === 1`)
and one for the recursive step.

**Base case with conditional**: The function checks if `num === 1`, returning 1
to stop the recursion. This anchors the process, ensuring it doesn’t run
indefinitely.

**Recursive step**: For any `num` greater than 1, the function returns `num`
plus the result of calling `addUp` on `num - 1`, effectively summing all numbers
from 1 up to `num`.

## Possible Refactors

This strategy could also be implemented with these alternative approaches ...

- **A long `if else if else` statement**: Hard-code specific sums for each
- possible `num` value (e.g.,
- `if (num === 1) return 1; else if (num === 2) return 3;`).
- **A long `switch case`**: Use a `switch` block to map each `num` to its
- corresponding sum.
- **An object with key/value pairs**: Store sums as key/value pairs (e.g.,
- `{1: 1, 2: 3, 3: 6}`) and access the result using `num` as the key.
- **Mathematical formula**: Use the Gaussian summation formula
- `(num * (num + 1)) / 2` for a non-recursive, one-line solution.

## References

This solution was interesting because of how Mark used recursion to elegantly
solve the problem. The recursion took a moment to trace mentally, but it’s a
clear example of breaking a problem into smaller steps:

- Recursive functions in JavaScript:  
  [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion)
- Implicit vs. explicit returns:  
  [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)
