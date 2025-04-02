import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './OrderContext';
import Menu from './Menu';
import Home from './Home';
import MenuHelper from './MenuHelper';
import React from 'react';
import Receipt from './Receipt';

function Main() {
  const fruitteas = [
    { id: 'passion_fruittea', title: 'Passion Fruit Tea', cost: 6.25, src: 'Pixel_Images/passionfruittea.PNG' },
    { id: 'mangostrawberry_fruittea', title: 'Mango Strawberry Fruit Tea', cost: 6.25, src: 'Pixel_Images/mangostrawberryfruittea.PNG' },
    { id: 'pineapple_fruittea', title: 'Pineapple Fruit Tea', cost: 6.25, src: 'Pixel_Images/pineapplefruittea.PNG' },
    { id: 'lychee_fruittea', title: 'Lychee Fruit Tea', cost: 6.25, src: 'Pixel_Images/lycheefruittea.PNG' } 
  ];

  const milkteas = [
      { id: 'brownsugar_milktea', title: 'Brown Sugar Milk Tea', cost: 7.25, src: 'Pixel_Images/brownsugar.PNG' },
      { id: 'mango_milktea', title: 'Mango Milk Tea', cost: 7.25, src: 'Pixel_Images/mangomilktea.PNG' },
      { id: 'strawberry_milktea', title: 'Strawberry Milk Tea', cost: 7.25, src: 'Pixel_Images/strawberrymilktea.PNG' },
      { id: 'taro_milktea', title: 'Taro Milk Tea', cost: 7.25, src: 'Pixel_Images/taromilktea.PNG' },
      { id: 'saltedcaramel_milktea', title: 'Salted Caramel Milk Tea', cost: 7.25, src: 'Pixel_Images/saltedcaramelmilktea.PNG' },
      { id: 'thaitea_milktea', title: 'Thai Tea', cost: 7.25, src: 'Pixel_Images/thaitea.PNG' }
  ];

  const smoothies = [
      { id: 'taro_smoothie', title: 'Taro Smoothie', cost: 8.00, src: 'Pixel_Images/tarosmoothie.PNG' },
      { id: 'mango_smoothie', title: 'Mango Smoothie', cost: 8.00, src: 'Pixel_Images/mangosmoothie.PNG' },
      { id: 'strawberry_smoothie', title: 'Strawberry Smoothie', cost: 8.00, src: 'Pixel_Images/strawberrysmoothie.PNG' },
      { id: 'avocado_smoothie', title: 'Avocado Smoothie', cost: 8.00, src: 'Pixel_Images/avocadosmoothie.PNG' },
      { id: 'coffeecaramel_smoothie', title: 'Cofffee Caramel Smoothie', cost: 8.00, src: 'Pixel_Images/coffeecaramelsmoothie.PNG' }
  ];

  const coffees = [
    { id: 'egg_coffee', title: 'Egg Coffee', cost: 7.50, src: 'Pixel_Images/eggcoffee.PNG' },
    { id: 'seasalt_coffee', title: 'Seasalt Coffee', cost: 7.50, src: 'Pixel_Images/seasaltcoffee.PNG' },
    { id: 'caramel_coffee', title: 'Caramel Coffee', cost: 7.50, src: 'Pixel_Images/caramelcoffee.PNG' }
  ]

  const icecreams = [
    { id: 'chocolate_icecream', title: 'Chocolate Icecream', cost: 5.50, src: 'Pixel_Images/chocolateicecream.PNG' },
    { id: 'vanilla_icecream', title: 'Vanilla Icecream', cost: 5.50, src: 'Pixel_Images/vanillaicecream.PNG' },
    { id: 'strawberry_icecream', title: 'Strawberry Icecream', cost: 5.50, src: 'Pixel_Images/strawberryicecream.PNG' },
    { id: 'coconut_icecream', title: 'Coconut Icecream', cost: 6.00, src: 'Pixel_Images/coconuticecream.PNG' },
    { id: 'matcha_icecream', title: 'Matcha Icecream', cost: 6.50, src: 'Pixel_Images/matchaicecream.PNG' }
  ];

  const cakes = [
    { id: 'mangocrepe_cake', title: 'Mango Crepe Roll Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/mangocrepe.PNG' },
    { id: 'strawberrycrepe_cake', title: 'Strawberry Crepe Roll Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/strawberrycrepe.PNG' },
    { id: 'matchacrepe_cake', title: 'Matcha Crepe Roll Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/matchacrepe.PNG' },
    { id: 'matchastrawberry_cake', title: 'Strawberry Matcha Fresh Cream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/matchastrawberrycake.PNG' },
    { id: 'caramel_cake', title: 'Caramel Buttercream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/caramelcake.PNG' },
    { id: 'chocolate_cake', title: 'Chocolate Fresh Cream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/chocolatecake.PNG' },
    { id: 'mixedberry_cake', title: 'Mixed Berry Fresh Cream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/mixedberrycake.PNG' },
    { id: 'mango_cake', title: 'Mango Fresh Cream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/mangocake.PNG' },
    { id: 'peach_cake', title: 'Peach Fresh Cream Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/peachcake.PNG' },
    { id: 'tiramisu_cake', title: 'Tiramisu Cake', cost: { whole: 35.50, slice: 7.35 }, src: 'Pixel_Images/tiramisu.PNG' }
  ];

  const foods = [
    { id: 'onionrings', title: 'Onion Rings' },
    { id: 'curlyfries', title: 'Curly Fries' },
    { id: 'chickenwings', title: 'Chicken Wings' },
    { id: 'takoyaki', title: 'Takoyaki' },
    { id: 'tunamayoonigiri', title: 'Tuna Mayo Onigiri' },
    { id: 'salmoncreamcheeseonigiri', title: 'Salmon Cream Cheese Onigiri' },
    { id: 'chickenmayoonigiri', title: 'Chicken Mayo Onigiri' }
  ];

  const toppingsForDrinks = [
    { title: "Mango Popping", cost: 0.75 },
    { title: "Strawberry Popping", cost: 0.75 },
    { title: "Boba", cost: 0.75 },
    { title: "Crystal Boba", cost: 0.75 },
    { title: "Coffee Jelly", cost: 0.75 },
    { title: "Lychee Jelly", cost: 0.75 },
    { title: "Rainbow Jelly", cost: 0.75 },
    { title: "Egg Pudding", cost: 0.75 },
    { title: "Aloe Vera", cost: 0.75 }
  ];

  const toppingsForIcecream = [
    { title: "Rainbow Sprinkles", cost: 0.25 },
    { title: "Chocolate Sprinkles", cost: 0.25 },
    { title: "M&Ms", cost: 0.75 },
    { title: "Marshmallows", cost: 0.75 },
    { title: "Chocolate Syrup", cost: 0.25 },
    { title: "Strawberry Syrup", cost: 0.25 }
  ];

  const toppingsForFoods = [
    "Cheese Sauce",
    "Ketchup",
    "Ranch",
    "Bacon Bits",
    "BBQ Sauce",
    "Hot Sauce",
    "Chopped Green Onions"
  ];

  const cakeChoices = [
    "Whole Cake",
    "Slice Cake"
  ]

  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/milkteas" element={<MenuHelper type={milkteas} modalSelections={toppingsForDrinks} />} />
          <Route path="/smoothies" element={<MenuHelper type={smoothies} modalSelections={toppingsForDrinks} />} />
          <Route path="/fruitteas" element={<MenuHelper type={fruitteas} modalSelections={toppingsForDrinks} />} />
          <Route path="/coffees" element={<MenuHelper type={coffees} modalSelections={toppingsForDrinks} />} />
          <Route path="/icecream" element={<MenuHelper type={icecreams} modalSelections={toppingsForIcecream} />} />
          <Route path="/cakes" element={<MenuHelper type={cakes} modalSelections={cakeChoices} />} />
          {/* <Route path="/foods" element={<MenuHelper type={foods} modalSelections={toppingsForFoods} />} /> */}
          <Route path="/summary" element={<Receipt />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default Main;
