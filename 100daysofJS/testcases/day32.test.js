const imageFilter = require('../day32');

test('Filter images with category "fashion"', () => {
  expect(imageFilter("fashion")).toEqual([
    {
      id: 3,
      category: "fashion",
      name: "image3.jpg",
    },
    {
      id: 5,
      category: "fashion",
      name: "image5.jpg",
    },
  ]);
});

test('Filter images with category "nature"', () => {
  expect(imageFilter("nature")).toEqual([
    {
      id: 1,
      category: "nature",
      name: "image1.jpg",
    },
    {
      id: 2,
      category: "nature",
      name: "image2.jpg",
    },
    {
      id: 4,
      category: "nature",
      name: "image4.jpg",
    },
  ]);
});

test('Filter images with category "sports"', () => {
  expect(imageFilter("sports")).toEqual([
    {
      id: 6,
      category: "sports",
      name: "image6.jpg",
    },
    {
      id: 7,
      category: "sports",
      name: "image7.jpg",
    },
  ]);
});
