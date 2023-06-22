import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutMe from "./page/AboutMe/AboutMe";
import Introduction from "./page/Introduction/Introduction";
import MyWork from "./page/MyWork/MyWork";
import MyServices from "./page/myServices/MyServices";

function App() {
  return (
    <>
      <article>
        <Header />
        <Introduction />
        <MyServices />
        <AboutMe/>
        <MyWork/>
        <Footer/>
      </article>
    </>
  );
}

export default App;
