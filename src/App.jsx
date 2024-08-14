import DummyImage from "/dummy chat.png";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Avatar from "./components/Avatar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card>
        <Header />
      </Card>
      <Card>
        <Avatar name={"dummy"} imgSrc={DummyImage} />
        <MainPage />
      </Card>
      <Card>
        <Footer />
      </Card>
    </>
  );
}

export default App;
