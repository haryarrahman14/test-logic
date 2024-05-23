class WeightedString {
  private inputString: string;
  private substringWeights: Set<number>;

  /**
   * Class for calculate weight from all input string and store it to state
   * @param inputString
   */
  constructor(inputString: string) {
    this.inputString = inputString;
    this.substringWeights = new Set();
    this.calculateSubstringWeights();
  }

  private calculateSubstringWeights() {
    const { inputString, processCharacter } = this;

    let currentIndex = 0;
    const stringLength = inputString.length;

    while (currentIndex < stringLength) {
      currentIndex = processCharacter(currentIndex);
    }
  }

  /**
   * Method for process sum character weight
   * @param startIndex
   * @returns
   */
  private processCharacter(startIndex: number): number {
    const { inputString, substringWeights } = this;

    const currentChar = inputString[startIndex];
    const charWeight = currentChar.charCodeAt(0) - "a".charCodeAt(0) + 1;

    let currentIndex = startIndex;
    let count = 0;

    while (inputString[currentIndex] === currentChar) {
      count++;

      const cumulativeWeight = charWeight * count;
      substringWeights.add(cumulativeWeight);

      currentIndex++;
    }

    return currentIndex;
  }

  /**
   * Method for get status query
   * if exist will return "Yes"
   * if doesn't exist return "No"
   * @param weight
   * @returns
   */
  public query(weight: number): "Yes" | "No" {
    const { substringWeights } = this;
    return substringWeights.has(weight) ? "Yes" : "No";
  }
}

/**
 * Example Usage :
 */
const inputString = "abbcccd";
const queryWeights = [1, 3, 9, 8];
const weightedStringInstance = new WeightedString(inputString);
const results = queryWeights.map((weight) =>
  weightedStringInstance.query(weight)
);
console.log(results); // Output: ['Yes', 'Yes', 'Yes', 'No']
