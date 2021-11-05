import React from 'react';

// Componentes
import { ToggleButton } from './ToggleButton';
import { Searcher } from './Searcher';
import { Avatar } from './Avatar';

export const TopBar = () => (
  <div className="topbar">
    <ToggleButton />
    <Searcher />
    <Avatar />
  </div>
);

export default TopBar;
