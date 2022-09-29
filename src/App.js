import React  from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MealsFilterCategory from "./pages/MealsFilterCategory";
import Contact from "./pages/Contact";
import MealCategoryDetails from "./pages/MealCategoryDetails";


function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="categorie/:name" element = {<MealsFilterCategory/>}/>
          <Route path="meal/:id" element = {<MealCategoryDetails/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
