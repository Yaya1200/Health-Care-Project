import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./account.jsx";
import Analysis from "./analysis.jsx";
import Home from "./home.jsx";
import CreatePost from "./createPost.jsx";
import ReplayPost from "./replayPost.jsx";
import Resources from "./resource.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/replaypost" element={<ReplayPost />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;