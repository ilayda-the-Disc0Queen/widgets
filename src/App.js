import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: "What is the best Star Wars film?",
    content: "Episode V, The Empire Strikes Back"
  },
  {
    title: "What is the best food to get when eating out?",
    content: "Chips!"
  },
  {
    title: "Where is the best place to meet friends during lockdown?",
    content: "Under the heavens on a starry, starry night"
  }
];

export default () => {
  return (
    <div>
      <Search/>
    </div>
  );
};
