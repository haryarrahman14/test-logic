class BalancedBrackets {
  private inputString: string;

  /**
   * Class for check whether an input string containing various types of brackets (parentheses) is balanced or not
   * @param inputString
   */
  constructor(inputString: string) {
    this.inputString = inputString;
  }

  /**
   * Get status balanced brackets
   * if balanced will return "YES"
   * if not balanced will return "NO"
   * @returns
   */
  public isBalanced(): "YES" | "NO" {
    const { inputString } = this;

    const stack: string[] = [];
    const openingBrackets = new Set(["{", "[", "("]);
    const closingBrackets = new Set(["}", "]", ")"]);
    const matchingBrackets: { [key: string]: string } = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    for (const char of inputString) {
      if (openingBrackets.has(char)) {
        stack.push(char);
      } else if (
        closingBrackets.has(char) &&
        (stack.length === 0 || stack.pop() !== matchingBrackets[char])
      ) {
        return "NO";
      }
    }

    return stack.length === 0 ? "YES" : "NO";
  }
}

/**
 * Example Usage :
 */
const samples = ["{ [ ( ) ] }", "{ [ ( ] ) }", "{ ( ( [ ] ) [ ] ) [ ] }"];
for (const sample of samples) {
  const balancedBracketsInstance = new BalancedBrackets(sample);
  console.log(balancedBracketsInstance.isBalanced());
}
