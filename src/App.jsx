import mainimg from "./assets/hero-img.png"
import brend1 from "./assets/IMAGE.png"
import brend2 from "./assets/IMAGE-1.png"
import brend3 from "./assets/IMAGE-2.png"
import brend4 from "./assets/IMAGE-3.png"
import brend5 from "./assets/IMAGE-4.png"
import brend6 from "./assets/IMAGE-5.png"
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <nav>
          <div></div>
          <div>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Use cases</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About US</a></li>
            </ul>
          </div>
          <div>
            <a href="#">Login In</a>
            <button>Request Demo</button>
          </div>
        </nav>
        <main>
          <div>
            <h2>Next generation</h2>
            <p>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>
            <button>
              mobile commerce
            </button>
          </div>
          <div>
            <img src={mainimg} alt="" />
          </div>
        </main>
        <div className="brend">
          <h3>Used by industry leaders</h3>
          <div>
            <img src={brend1} alt="" />
            <img src={brend2} alt="" />
            <img src={brend3} alt="" />
            <img src={brend4} alt="" />
            <img src={brend5} alt="" />
            <img src={brend6} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
