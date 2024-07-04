import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div style={{"display": "flex"}}>
      <div class="card card--product-display">
        <div class="card__image">
          <img src={"https://cdn3.vectorstock.com/i/1000x1000/79/77/business-networking-share-link-icon-vector-14147977.jpg"} alt="Product Image" />
        </div>
        <div class="card__details">
          <h2 class="card__title">Product Title</h2>
          <p class="card__price">$99.99</p>
        </div>
      </div>
      <div class="card card--add-to-cart">
        <div class="card__image">
          <img src={"https://cdn3.vectorstock.com/i/1000x1000/79/77/business-networking-share-link-icon-vector-14147977.jpg"} alt="Product Image" />
        </div>
        <div class="card__details">
          <h2 class="card__title">Product Title</h2>
          <p class="card__price">$99.99</p>
          <button class="card__button">Add to Cart</button>
        </div>
      </div>
      <div class="card card--notify">
        <div class="card__image">
          <img src={"https://cdn3.vectorstock.com/i/1000x1000/79/77/business-networking-share-link-icon-vector-14147977.jpg"} alt="Product Image" />
        </div>
        <div class="card__details">
          <h2 class="card__title">Product Title</h2>
          <p class="card__price">$99.99</p>
          <form class="card__form">
            <input type="email" class="card__input" placeholder="Your email" />
            <button type="submit" class="card__button">Notify Me</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
