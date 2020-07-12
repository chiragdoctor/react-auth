import React from 'react';
import Sidebar from '../components/layouts/Sidebar';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <section role='main' class='content-body'>
        <h1>This is my private route</h1>
      </section>
    </>
  );
}

export default Dashboard;
