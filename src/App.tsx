import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import WorkList from "./pages/WorkList";
import Work from "./pages/Work";


function App() {
  return (
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/work" element={<WorkList/>}/>
          <Route path={"/work/:id"} element={<Work/>}/>
          <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
  );
}

export default App;
