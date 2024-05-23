class HighestPalindrome {
  private inputString: string;
  private k: number;

  /**
   * Class for transform a given string representation of a number into the highest possible palindrome by replacing up to `k` characters with recursive method.
   * @param inputString
   * @param k
   */
  constructor(inputString: string, k: number) {
    this.inputString = inputString;
    this.k = k;
  }

  /**
   * Method for Get Highest Palindrome from param input string
   * @returns
   */
  public getHighestPalindrome = (): string => {
    const { inputString, k, canPalindrome, formHighestPalindrome } = this;

    const INITIAL_LEFT = 0;
    const INITIAL_RIGHT = inputString.length - 1;

    if (!canPalindrome(inputString, k, INITIAL_LEFT, INITIAL_RIGHT)) {
      return "-1";
    }

    return formHighestPalindrome(inputString, k, INITIAL_LEFT, INITIAL_RIGHT);
  };

  /**
   * Method for check, it can palindrome or not
   * @param inputString
   * @param k
   * @param left
   * @param right
   * @returns
   */
  private canPalindrome = (
    inputString: string,
    k: number,
    left: number,
    right: number
  ): boolean => {
    const { canPalindrome } = this;

    if (left >= right) return true;

    if (inputString[left] !== inputString[right]) {
      if (k <= 0) return false;

      return canPalindrome(inputString, k - 1, left + 1, right - 1);
    }

    return canPalindrome(inputString, k, left + 1, right - 1);
  };

  /**
   * Method for process to get the Highest Palindrome
   * @param inputString
   * @param k
   * @param left
   * @param right
   * @returns
   */
  private formHighestPalindrome = (
    inputString: string,
    k: number,
    left: number,
    right: number
  ): string => {
    const { formHighestPalindrome } = this;

    if (left > right) return inputString;

    if (inputString[left] === inputString[right]) {
      return formHighestPalindrome(inputString, k, left + 1, right - 1);
    }

    let newStr1 =
      inputString.slice(0, left) +
      inputString[right] +
      inputString.slice(left + 1);
    newStr1 =
      newStr1.slice(0, right) + inputString[right] + newStr1.slice(right + 1);

    let newStr2 =
      inputString.slice(0, left) +
      inputString[left] +
      inputString.slice(left + 1);
    newStr2 =
      newStr2.slice(0, right) + inputString[left] + newStr2.slice(right + 1);

    if (k > 1) {
      if (inputString[left] !== "9" && inputString[right] !== "9") {
        let newStr3 =
          inputString.slice(0, left) + "9" + inputString.slice(left + 1);
        newStr3 = newStr3.slice(0, right) + "9" + newStr3.slice(right + 1);
        return formHighestPalindrome(newStr3, k - 2, left + 1, right - 1);
      }
    }

    if (newStr1[left] > newStr2[left]) {
      return formHighestPalindrome(newStr1, k - 1, left + 1, right - 1);
    } else {
      return formHighestPalindrome(newStr2, k - 1, left + 1, right - 1);
    }
  };
}

/**
 * Example Usage :
 */
const sample1 = new HighestPalindrome("3943", 1);
console.log(sample1.getHighestPalindrome()); // Output: 3993

const sample2 = new HighestPalindrome("932239", 2);
console.log(sample2.getHighestPalindrome()); // Output: 992299
