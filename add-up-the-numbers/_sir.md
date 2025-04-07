# [\_sir](https://edabit.com/user/F7iZc3vpy7d9ALD6D)

```js
function addUp(num) {
  return (num * (num + 1)) / 2;
}
```

## Strategy

This function has one input argument. \_sir chose the formula strategy (num \*
(num + 1))/2 is called the Gaussian summation formula or the formula for the sum
of the first n natural numbers.

## Implementation

The developer crafted a one-line implementation of the addUp(num) function that
uses a mathematical formula to compute the sum of integers from 1 to num. Unlike
an array-based solution, there’s no need for pre-stored values or index trickery
here—the elegance lies in its direct use of arithmetic.

Arrow function - implicit return: The solution is a single expression, (num \*
(num + 1))/2, so no explicit return statement is required. The result is
implicitly returned, making the code concise and efficient.

Mathematical formula (no array): Instead of hard-coding values in an array
literal, the function relies on the Gaussian summation formula, (num \* (num +
1))/2. This calculates the sum of numbers from 1 to num without needing to store
or access multiple values.

Parameter as input: The parameter num is used directly in the formula, not as an
index, to compute the result. There’s no array offset to worry about (like a
0-based index), as the formula inherently handles the range from 1 to num.

## Possible Refactors

This strategy could also be implemented with these alternative approaches ...

A long if else if else statement: Check specific values of num and return
precomputed sums (e.g., if num === 1 return 1, if num === 2 return 3, etc.).

A long switch case: Similar to the if-else approach, use a switch block to map
num to its corresponding sum. An object with key/value pairs: Store sums as
key/value pairs (e.g., {1: 1, 2: 3, 3: 6}) and access the result using num as
the key.

Array-based approach: Create an array of precomputed sums and use num as an
index, though this would require handling the 0-based index offset (e.g., [0, 1,
3, 6, 10]). References

This solution stood out because of its clever use of a mathematical shortcut,
avoiding the need for iteration or data structures. The implicit return was
straightforward, but the real insight came from recognizing the formula’s power:

-implicit returns: [kbarker.dev] Gaussian summation formula: A classic
mathematical technique for summing consecutive integers efficiently. This
reframes the function’s implementation to fit the format while highlighting its
actual logic and possible alternative approaches. Let me know if you’d like
further tweaks!
