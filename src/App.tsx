import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Text } from "./components/Text/Text";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import cappuccino from "./assets/cappuccino.png";
import caramelShake from "./assets/caramel-shake.png";
import coffeeConnoiseur from "./assets/coffee-connoisseur.png";
import coffeeConnoiseur2 from "./assets/coffee-connoiseur-2.png";
import coffeeConnoiseur3 from "./assets/coffee-connoiseur-3.png";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";
import { StockContainer } from "././components/Stock/LatestBlogs/StockContainer";

import { TopMilk } from "./components/Stock/TopMilkShakes/TopMilk";

import mocha from "./assets/mocha-shake.png";
import lavender from "./assets/lavender-shake.png";
import caramel from "./assets/caramel-shake.png";
import Categories from "./components/Stock/TopCategories/Categories";
import { Hero } from "./components/Stock/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);
  const [topShakes, setTopShakes] = useState([
    {
      name: "Mocha Shake",
      imgLink: mocha,
      price: 20.0,
      btnDesc: "BUY NOW",
      likes: 30,
    },
    {
      name: "Lavender Shake",
      imgLink: lavender,
      price: 20.0,
      btnDesc: "BUY NOW",
      likes: 30,
    },
    {
      name: "Caramel Shake",
      imgLink: caramel,
      price: 20.0,
      btnDesc: "BUY NOW",
      likes: 30,
    },
  ]);
  const [stock, setStock] = useState([
    {
      name: "Coffee Connoiseur",
      imgLink: coffeeConnoiseur,
      description:
        "I came in craving something sweet, and the Caramel Crunch Milkshake completely blew me away! It’s ridiculously thick, blended perfectly, and topped with a mountain of whipped cream and crushed toffee pieces. It’s honestly not just a drink; it’s an entire dessert experience. I'll definitely be coming back for another one.",
      btnDesc: "Read More",
    },
    {
      name: "Coffee Connoiseur",
      imgLink: coffeeConnoiseur2,
      description:
        "The atmosphere in-store is just unmatched. I settled into a cozy corner by the window with a beautifully crafted iced Americano. The blend they use has this bright, slightly fruity note that tastes so refreshing over ice. It’s easily my new favorite spot to just sit back, relax, and watch the world go b",
      btnDesc: "Read More",
    },
    {
      name: "Coffee Connoiseur",
      imgLink: coffeeConnoiseur3,
      description:
        "I usually just grab my morning coffee and go, but the aroma of the freshly roasted beans made me sit and stay. I ordered a classic flat white, and the balance of the rich, dark espresso with the perfectly steamed milk was absolutely incredible. It was exactly the warm, smooth kickstart I needed for my day!",
      btnDesc: "Read More",
    },
  ]);

  return (
    <>
      <div id="app-container">
        <div id="scrollable">
          <Navbar />
          <Hero />
          <Categories />
          <TopMilk topShakes={topShakes} />
          <StockContainer stock={stock} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
