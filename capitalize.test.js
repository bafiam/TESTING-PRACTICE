import capitalizeString from  "./capitalize"

test('name is capitalized to Name', () => {
  expect(capitalizeString("name")).toBe("Name");
});

test('bafiam is capitalized to Bafiam', () => {
  expect(capitalizeString("bafiam")).toBe("Bafiam");
});

test('bafiam is capitalized to cant be bafiam', () => {
  expect(capitalizeString("bafiam")).not.toBe("bafiam");
});