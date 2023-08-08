const categoryContent = {
  Cement: `<h2>Cement Category</h2><p>This is the content for the Cement category.</p>`,
  Steel: `<h2>Steel Category</h2>`,
  "Bath Fitting": `<h2>Bath Fitting category</h2>`,
  Plumbing: `<h2>Plumbing category</h2>`,
  Doors: `<h2>Doors category</h2>`,
  Tiles: `<h2>Tiles category</h2>`,
  Sink: `<h2>Sinks category</h2>`,
  Paints: `<h2>Paints category</h2>`,
  "Locks and Handles": `<h2>Locks and Handles category</h2>`,
  "Electrical Wires": `<h2>Electrical Wires category</h2>`,
  Switches: `<h2>Switches category</h2>`,
  Lights: `<h2>Lights category</h2>`,
  // Add more categories and content as needed
};

const products = {
  Sink: [
    {
      name: "Square Shaped Italian Sink",
      price: "$10.99",
      image: "./ProductImages/Sink/P1.jpg",
    },
    {
      name: "Rectangular Shaped Italian Sink",
      price: "$15.99",
      image: "./ProductImages/Sink/P2.jpg",
    },
    {
      name: "Oval Shaped Italian Sink",
      price: "$8.99",
      image: "./ProductImages/Sink/P3.jpg",
    },
    // Add more products for Cement
  ],
};

function loadCategoryContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("cat");
  const contentDiv = document.getElementById("category-content");

  const categoryInfo = categoryContent[selectedCategory];
  const productList = products[selectedCategory];

  if (categoryInfo) {
    contentDiv.innerHTML = categoryInfo;

    if (productList && productList.length > 0) {
      const productsListHTML = productList
        .map(
          (product) => `
          <div class="col-md-4 mb-4">
            <div class="card" id="productCard">
              <img id="productImage" src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        `
        )
        .join("");

      contentDiv.innerHTML += '<div class="row">' + productsListHTML + "</div>";
    } else {
      contentDiv.innerHTML += "<p>No products available for this category.</p>";
    }
  } else {
    contentDiv.innerHTML = "<p>No content available for this category.</p>";
  }
}

window.onload = loadCategoryContent;
