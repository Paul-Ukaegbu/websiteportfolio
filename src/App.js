import './App.css';
import logo from './github2.png';

function App() {
  return (
    <div className="App">
    <header>
    </header>
    <body>
      <div className = "nav">
        <h2>DEVPAPI</h2>
      </div>
      <h5>Website coming soon..</h5>
      <h4>Projects</h4>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
        <div class="card h-100">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Chat App</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Check Me Out</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Python, Django, MySql, HTML, CSS</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Calculator App</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Check Me Out</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">C#, .NET, MySql </small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Classroom App</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <a href="#" class="btn btn-primary">Check Me Out</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">JAVA</small>
          </div>
        </div>
      </div>
</div>
    </body>


    </div>


  );
}

export default App;
