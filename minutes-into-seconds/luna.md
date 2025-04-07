# [Luna](https://edabit.com/user/XYZ789LunaCode)

```js
function convert(minutes) {
  let seconds = 0;
  for (let i = 0; i < minutes; i++) {
    seconds += 60;
  }
  return seconds;
}
```

## Strategy

This function has one input argument. Luna chose an iterative strategy to
convert minutes into seconds by repeatedly adding 60 for each minute, building
the total step-by-step. This approach leverages the basic relationship that
there are 60 seconds in a minute, simulating the conversion through a cumulative
process.

## Implementation

The developer crafted a multi-line implementation of the convert(minutes)
function that uses a loop to compute the total seconds. Unlike a direct
mathematical formula, the solution emphasizes clarity and progression, making it
easy to visualize how the result accumulates.

Traditional function with explicit return: Luna’s solution uses a standard
function with an explicit return statement, delivering the final computed value
of seconds after the loop completes.

Iterative approach (for loop): Instead of a single operation, the function
employs a for loop that runs minutes times, adding 60 to seconds in each
iteration. This mirrors counting out the seconds minute-by-minute.

Parameter as input: The parameter minutes dictates the number of iterations,
directly controlling how many times 60 is added to the total. No arrays or
offsets are involved—just a straightforward accumulation.

## Possible Refactors

This strategy could also be implemented with these alternative approaches ...

A long if else if else statement: Check specific values of minutes and return
precomputed seconds (e.g., if (minutes === 1) return 60; if (minutes === 2)
return 120;).

A long switch case: Similar to the if-else approach, use a switch block to map
minutes to its corresponding seconds total. An object with key/value pairs:
Store minute-to-second conversions as key/value pairs (e.g., {1: 60, 2: 120, 3:
180}) and access the result using minutes as the key.

Mathematical formula: Use the simple multiplication formula minutes \* 60 for a
concise, non-iterative solution.

## References

This solution stood out because of its intuitive use of iteration, making the
conversion process explicit rather than relying on a single formula. The
loop-based approach was easy to follow, offering a different perspective on a
simple problem:

For loops in JavaScript: developer.mozilla.org Basic time conversion: A
fundamental concept where 1 minute equals 60 seconds, applied incrementally
here.
