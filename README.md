In this project, let's build e-commerce app by applying the concepts of React.

### Refer to the image below:

Add UI reference image yourself

<div style="text-align: center;">
     <!-- <img src="remove this text and add the image URL" alt="ui"> -->
     <img src="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752825966/Screenshot_2025-07-18_133441_wol7rx.png" alt="ecommerce app" />
</div>
<br/>

### Design Files

<details>
<summary>Login Route</summary>

- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752828212/Screenshot_2025-07-18_141257_xuna1d.png" style="width: 80%;">Extra Small (Size < 576px), Small (Size <= 768px) - Login and Failure</a>
 
- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752828223/Screenshot_2025-07-18_141242_dn4bh1.png" style="width: 80%;">Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login and Failure</a>
  
</details>

<details>
<summary>Home Route</summary>

- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752828877/Screenshot_2025-07-18_142405_atdgj8.png" style="width: 80%;">Extra Small (Size < 576px), Small (Size <= 768px) - Home</a>

- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752825966/Screenshot_2025-07-18_133441_wol7rx.png" style="width: 80%;">Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home</a>
 
</details>

<details>
<summary>Cart Route</summary>

- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752829292/Screenshot_2025-07-18_142802_qlylim.png" style="width: 80%;">Extra Small (Size < 576px), Small (Size <= 768px), Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Cart</a>
  
</details>

<details>
<summary>NotFound Route</summary>

- <a href="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1752830175/Screenshot_2025-07-18_143419_hat3fm.png" style="width: 80%;">Extra Small (Size < 576px), Small (Size <= 768px), Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - NotFound</a>
  
</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Assignment Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities:

- Login Route
  - When invalid credentials are provided and the Login button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the Login button is clicked, then the page should be navigated to the Home route
  - When an unauthenticated user tries to access the Home route, ProductItemDetails route or Cart route then the page should be navigated to Login Route
  - When an authenticated user, tries to access the Home route, ProductItemDetails route or Cart route then the page should be navigated to the respective route
  - When an authenticated user tries to access the LoginRoute, then the page should be navigated to the Home route
- Home Route
  - When an authenticated user opens the Home Route,
    - An HTTP GET request should be made to homeProductsApiUrl
      - Loader should be displayed while the HTTP request is fetching the data
      - After the data is fetched successfully, display the list of videos received in the response
      - If the HTTP GET request made is unsuccessful, then the Failure view should be displayed
        - When the Retry button is clicked, an HTTP GET request should be made to homeProductsApiUrl
    - When a non-empty value is provided in the Search Input. Accordingly,
      - Products should be displayed based on the provided search input 
      - When the filter function made to Products list returns an empty list for videos then No Products View should be displayed
  - When the website logo is clicked, the page should be navigated to the Home route
  - When a Product is clicked, the page should be navigated to the Product Item Details route
  - Clicks on the Cart Icon link in the Header is clicked, then the page should be navigated to the Cart route
  - When clicked on the website logo page should be moved to the Home route
- Product Item Details Route
  - When an authenticated user opens the Product Item Details route
    - An HTTP GET request should be made to ProductItemDetailsApiUrl with id as path parameter
      - loader should be displayed while the HTTP request is fetching the data
      - After the HTTP request is successful, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the Failure view should be displayed
        - When the Retry button is clicked, an HTTP GET request should be made to ProductItemDetailsApiUrl
  - Corresponding Product should be displayed
  - Initially, item count should be 1
    - When the Increment(+) button is clicked,
      - On each click, Item count should be incremented by 1 lasts at items count of 10
      - When item count reached to 10, a message should be displayed as like at every time can select only 10 products
    - When the Decrement(-) button is clicked,
      - On each click, Item count should be decremented by 1
      - When item count reached to 1, then count should not be decrease
  - When the user clicks on the Add Cart button, respective Product should be added to the Cart list with selected item quantity
- Cart Route
  - When an authenticated user opens the Cart Route,
    - If the list of added products list is empty, then the Empty Cart View should be displayed
    - The Products in the list of products cart should be displayed as a list of products 
      - Each Product should be able to increment, decrement functions on item count
      - Displayed along with quantity, price according to number of items and also able to remove button from the cart list
    
    - Remove all button should be able to remove all products from the cart list
    - Total amount should be displayed with respect to product price and quantity to all products in the cart list
    - clicks on Place Order button with non empty cart list, Order Placed view should be displayed 
- Not Found Route
  - When a random path is provided in the URL then the page should navigate to the Not Found route
- When the theme button in the header is clicked, then the theme should be changed accordingly
- When the Logout button in the header is clicked, then the page should be navigated to the Login route
</details>

<details>
<summary>API Requests & Responses</summary>
</br>

**Login API**

#### URL: `https://apis.ccbp.in/login`

#### Method: `GET`

- On valid credentials moves to Home route

**homeProductsApiUrl**

#### URL: `https://fakestoreapi.com/products`

#### Method: `GET`

#### Description:

- Returns a response containing the list of all Products

### Response

```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  ...
]
```

**productItemDetailsApiUrl**

#### URL: `https://fakestoreapi.com/products/:id`

#### Example: `https://fakestoreapi.com/products/1`

#### Method: `GET`

#### Description:

- Returns a response containing the details of a Product

### Response

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

</details>

### Assignment Completion Checklist

<details>
<summary>Click to view</summary>

- **Along with the below points, add your checklist specific to the assignment**

- Read the instructions given in the assignment carefully and list down the **Assignment Completion Checklist** for the assignment and start working on it
- The completion Checklist includes the below-mentioned points
  - I have completed all the functionalities asked in the assignment
  - I have used only the resources (Frameworks, Design files, APIs, third-party packages) mentioned in the assignment
  - I have modified the README.md file based on my assignment instructions
  - I have completed the assignment **ON TIME**
- **Note:**
  - Ensure that you have marked all the checklist points in your completion checklist before submitting the assignment
  </details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- To build this project Using third-party package as
  - react, react-router-dom, reactjs-popup, js-cookie, react-icons, react-loader-spinner
</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>

**The following instructions are required for the tests to pass**

- Render Home Route component when the path in URL matches /
- Render Login Route component when the path in URL matches /login
- Render cart Products Route component when the path in URL matches /productscart
- Render Product Item Details Route component when the path in URL matches /products/:id
- Render Not Found Route component when the path in URL matches /not-found
- No need to use the BrowserRouter in App.js as we have already included in index.js
- User credentials
  - username : Should be non-empty value
  - password : With minimum length of 6 charaters 
- Styled Components should be used for styling purposes
- The Product images in the Routes should have the alt as product title
- The HTML container element of home should have the background color,
  - If the Light theme is applied, then the #ffffff color should be applied as a background color
  - If the Dark theme is applied, then the #3c3d40 color should be applied as a background color
- The HTML container element of cart should have the background color,
  - If the Light theme is applied, then the #ffffff color should be applied as a background color
  - If the Dark theme is applied, then the #3c3d40 color should be applied as a background color
- The HTML container element of product item details should have the background color,
  - If the Light theme is applied, then the #ffffff color should be applied as a background color
  - If the Dark theme is applied, then the #3c3d40 color should be applied as a background color

</details>

### Resources

<details>
<summary>Data Fetch URLs</summary>
<br/>

- `https://fakestoreapi.com/products` used to retrive list of products
- `https://fakestoreapi.com/products/:id` used to retrive details of a product

</details>

<details>
<summary>Image URLs</summary>
<br/>

- https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-12_144456_dqemuw.png alt should be **login**
- https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-18_080049_umfakm.png alt should be **order placed**
- https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-13_200343_xnhdcg.png alt should be **failure view**
- https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-13_200451_akfe4m.png alt should be **no Products** 

</details>

<details>
<summary>Colors</summary>
<br/>

- <div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
- <div style="background-color: #3c3d40; width: 150px; padding: 10px; color: white">Hex: #3c3d40</div>
- <div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
- <div style="background-color: #fae7cd; width: 150px; padding: 10px; color: black">Hex: #fae7cd</div>
- <div style="background-color: teal; width: 150px; padding: 10px; color: white">Hex: teal</div>
- <div style="background-color: grey; width: 150px; padding: 10px; color: white">Hex: grey</div>
- <div style="background-color: #202020; width: 150px; padding: 10px; color: white">Hex: #202020</div>
- <div style="background-color: dodgerblue; width: 150px; padding: 10px; color: white">Hex: dodgerblue</div>
- <div style="background-color: #911616; width: 150px; padding: 10px; color: white">Hex: #911616</div>
- <div style="background-color: #0595fc; width: 150px; padding: 10px; color: white">Hex: #0595fc</div>
- <div style="background-color: #f7faf8; width: 150px; padding: 10px; color: black">Hex: #f7faf8</div>
- <div style="background-color: #7b7a77; width: 150px; padding: 10px; color: white">Hex: #7b7a77</div>
- <div style="background-color: #0712ad; width: 150px; padding: 10px; color: white">Hex: #0712ad</div>
- <div style="background-color: goldenrod; width: 150px; padding: 10px; color: white">Hex: goldenrod</div>
- <div style="background-color: #0564fc; width: 150px; padding: 10px; color: white">Hex: #0564fc</div>
- <div style="background-color: gray; width: 150px; padding: 10px; color: white">Hex: gray</div>
- <div style="background-color: rgba(0, 0, 0, 0.5); width: 150px; padding: 10px; color: white">Hex: rgba(0, 0, 0, 0.5)</div>
- <div style="background-color: rgb(200, 199, 199); width: 150px; padding: 10px; color: black">Hex: rgb(200, 199, 199)</div>

</details>

<details>
<summary>Font-families</summary>

- Monoton
- Roboto
- Bree Serif

</details>
