
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import './App.css'

function App() {
  return <div className='App'>
  <section id="top">
  <nav id="nav">
    <img src={logo}/>
    <img class="imgSmall" src={menu} />
  </nav>

<div id="section1">
  <div id= "section1content">
   <h1 class="hello">Say hello to ReactJS</h1>
   <p class="smallPara">You will learn how to use<br/>
   the most popular front end library,<br/>
   and become a super Ninja developer</p>
   <button id="button">Awesome!</button>
  </div>
 </div>
</section>

<section id="section2">
<div class="section2content">
  <img class="iconImg" src={icon1} />
  <h4 class="section2Title">Declarative</h4>
  <p class="section2Para">React makes it painles to create interactive UIs.</p>
  </div>

  <div class="section2content">
  <img class="iconImg" src={icon2} />
  <h4 class="section2Title">Components</h4>
  <p class="section2Para">Build encapsulated components that manage their state</p>
  </div>

  <div class="section2content">
  <img class="iconImg" src={icon3} />
  <h4 class="section2Title">Single-Way</h4>
  <p class="section2Para">A set immutable values are passed to the component's.</p>
  </div>

  <div class="section2content">
    <img class="iconImg" src={icon4} />
    <h4 class="section2Title">JSX</h4>
    <p class="section2Para">Statically-typed designed to run on modern browsers.</p>
    </div>
   </section>
  </div>
}
export default App

