import './App.css';
import github from './github5.png';
import linkedin from './linkedin.png';
import dev from './dev2.png';
import dev3 from './dev3.png';

function App() {
  return (
    <div className="App">
    <header>
    </header>
    <body>
      <div className = "nav">
        <h2>DEVPAPI</h2>
      </div>

      <div className="container text-center">
        <div className="row">
          <div id= "aboutMe" className="col">
            <p className= "aboutMe">Hi! my name is <span>Paul Ukaegbu</span> and I am a <span>full-stack developer.</span></p>
            <img className="navlinks" src={github}/>
            <img className="navlinks" src={linkedin}/>
          </div>
          <div className="col">
            <img className="images" src={dev3}/>
          </div>
        </div>  
      </div>

      <h4>Projects</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
        <div className="card h-100">
          <img src={dev} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Chat App</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Check Me Out</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Python, Django, MySql, HTML, CSS</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={dev} class="card-img-top" alt="..."/>
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
          <img src={dev} class="card-img-top" alt="..."/>
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
