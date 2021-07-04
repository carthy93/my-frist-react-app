import "./App.css";
import Welcome from "./components/Welcome";
import Test from "./components/Test";
import Track from "./components/Track";
import Process from "./components/Process";
import Layout from "./components/Layout";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Login from "./components/Login";
import Speaker from "./components/Speaker";

function App() {
  return (
    <div className="App" style={{ margin: "2rem" }}>
      <h1> Hello React </h1>
      <Welcome />
      <Test />
      <Track />
      <Process />
      <Layout>
        <Main />
        <SideNav />
        <Login />
        <Speaker />
      </Layout>
    </div>
  );
}

export default App;
