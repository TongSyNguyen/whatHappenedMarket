import './App.css';
import Banner from './component/banner';
import Bes from './component/bes';
import Card from './component/card';
import Footer from './component/footer';
import Header from './component/header';
import Introduction from './component/introduction';
import Issue from './component/issue';
import Under from './component/underIssue';
import Window from './component/window';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Banner />
      <Introduction />
      <Bes />
      <Card />
      <Window />
      <Issue />
      <Under />
      <Footer />
    </div>
  );
}

export default App;
