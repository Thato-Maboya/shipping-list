import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          />

        <section className="section-center">
            <form className="grocery-form">
                <p className="alert"></p>
                <h3><b>Shipping List</b></h3>
                  <div className="form-control">
                      <div className="text-input">
                          <label><strong>Name *</strong></label>
                          <input stype="text" id="grocery" placeholder="e.g. eggs" />
                      </div>
                      <div className="text-input">
                          <label><strong>Description</strong></label>
                          <textarea type="" id="grocerydescription" placeholder="e.g. Medium dozen"></textarea>
                      </div>
                      <div className="text-input">
                          <label><strong>Quality *</strong></label>
                          <input type="number" id="groceryquality" placeholder="e.g. 2" />
                      </div>
                       <button type="submit" class="submit-btn">submit</button>
                   </div>
            </form>
            <div className="grocery-container">
                <div className="grocery-list"></div>
                <button class="clear-btn">clear items</button>
            </div>
        </section>
    </div>
  );
}

export default App;
