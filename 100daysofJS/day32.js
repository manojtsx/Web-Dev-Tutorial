/*
Challenge : Image Filtering

Q. Write a function to filter image on the basis of category.
Note: 
1. The function takes a single parameter `category`.
2. The function returns the array of objects equal to the category.

OUTPUT:
[
  { id: 3, category: 'fashion', name: 'image3.jpg' },
  { id: 5, category: 'fashion', name: 'image5.jpg' }
]

*/
const img = [
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
    id: 3,
    category: "fashion",
    name: "image3.jpg",
  },
  {
    id: 4,
    category: "nature",
    name: "image4.jpg",
  },
  {
    id: 5,
    category: "fashion",
    name: "image5.jpg",
  },
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
];

function imageFilter(category) {
  return img.filter((image) => {
    return image.category === category;
  });
}
module.exports = imageFilter;
