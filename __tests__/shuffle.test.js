const shuffle = require("../src/shuffle");
const testArray = [1,2,3,4,5,6,7,8,9,10]
describe("shuffle should...", () => {
  // CODE HERE
  it("should return an array", ()=>{
const result = shuffle(testArray);
expect(Array.isArray(result)).toBe(true)
  })

  it("should return an array of elements of eh same type", ()=>{
    const result = shuffle(testArray);
    expect(result.every(element => typeof element ==="number"))
  })

  it("should return an array of the same length as that of the original array", ()=>{
    const result = shuffle(testArray);
    expect(result.length).toBe(testArray.length)
  })

  it("should return a shuffled array", ()=>{
    const result = shuffle(testArray);
    expect(testArray).not.toEqual(result)
  })
});
