import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
  {
    label: 'The colour red',
    value: 'red'
  },
  {
    label: 'The colour green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];


export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Pick a colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
};
