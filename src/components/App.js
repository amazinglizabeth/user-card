import React from "react";
import Profile from "./profile";
import Skills from "./skills";
import Count from "./likeCount";

export default function App() {
  return (
    <div className="card">
      <Profile />
      <Skills />
    </div>
  );
}
