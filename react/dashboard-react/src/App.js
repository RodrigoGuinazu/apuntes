import SideBar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import './app.css'
import ProductsTable from './components/ProductsTable'

function App() {
  return (
    <div className="App">
      <body>
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div class="container-fluid">
                <Body />
                <ProductsTable />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
