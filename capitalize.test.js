import capitalizeString from  "./capitalize"

test('name is capitalized to Name', () => {
  expect(capitalizeString("name")).toBe("Name");
});

test('bafiam is capitalized to cant be bafiam', () => {
  expect(capitalizeString("bafiam")).not.toBe("bafiam");
});

test('return not a string given a number', () => {
  expect(capitalizeString(1)).toBe("not a string");
});
