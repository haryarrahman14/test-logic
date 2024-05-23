# Balanced Brackets

## Function Explanation

The `BalancedBrackets` class is designed to check whether an input string containing various types of brackets (parentheses) is balanced or not. Balanced means that every opening bracket has a corresponding closing bracket in the correct order.

### Time Complexity

- The time complexity of the `isBalanced` method is O(n), where n is the length of the input string. This is because each character in the string is processed exactly once.

### Space Complexity

- The space complexity of the `isBalanced` method is O(n) in the worst case. This occurs when all characters in the string are opening brackets that need to be stored in the stack.

## Usage

Here is an example of how to use the `BalancedBrackets` class:

```typescript
const samples = ["{ [ ( ) ] }", "{ [ ( ] ) }", "{ ( ( [ ] ) [ ] ) [ ] }"];

for (const sample of samples) {
  const balancedBracketsInstance = new BalancedBrackets(sample);
  console.log(balancedBracketsInstance.isBalanced());
}
```
