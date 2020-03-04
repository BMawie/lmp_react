
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/routes/Accueil';
import Contact from './components/routes/Contact';
import Brands from './components/routes/Brands';
import Deals from './components/routes/Deals';
import ProductView from './components/routes/ProductView';


const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  const [website, setWebsite] = useState({
      apiUrl: "https://api.lmp.com/website",
      id: "lmp",
      name: "La Malle Poste",
      logo: "logo_LaMallePoste.png",
      url: "https://lamalleposte-alencon.fr/",
      address: "71 Grande Rue, 61000 Alençon",
      lat: 48.429419, lng: 0.087992,
      zoom: 16,
      phone: "02 33 26 15 12 ",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/La-Malle-Poste-121712695175783/",
      hasMenu: true,
      hasDeals: true,
      hasBrands: true,
      hasContacts: true,
      contact: "<strong>Ouverture du mardi au samedi de 9h30 à 12h15 et de 14h&nbsp;à 19h</strong></p><p>Contactez-nous au&nbsp;<strong>02 33 26 15 12</strong> ou visitez notre page <strong><a href='https://www.facebook.com/La-Malle-Poste-121712695175783/' target='_blank' >Facebook</a></strong>"
  });
  const [hasError, setErrors] = useState(false);
  
//   useEffect(() => {
//     async function fetchData() {
//     const res = await fetch(website.apiUrl);
//     res
//         .json()
//         .then(res => setWebsite(res))
//         .catch(err => setErrors(err));
//     }

//     fetchData();
//   });

  return (
      <div className="App">
        
        <DndProvider backend={Backend}>          
          
          <Router>
            <Header website={website} />
            <div className="container container-bg margin-bottom">
            
              <Switch>
                  <Route path="/les-marques">
                      <Brands  website={website}/>
                  </Route>
                  <Route path="/les-affaires">
                      <Deals  website={website}/>
                  </Route>
                  <Route path="/contact">
                      <Contact website={website} />
                  </Route>
                  <Route path="/product/:productId" exact component={ProductView}></Route>
                  <Route path="/">
                      <Accueil website={website} />
                  </Route>
                  <Route component={NoMatchRoute} />
              </Switch>
            </div>
            <Footer website={website} />
          </Router>
        </DndProvider>
        
      </div>
  );

}

export default App;
