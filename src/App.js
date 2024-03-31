import React from 'react';
import Header from "./header"; // Corrected import statement
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className='App '>
      <Header  title="Groceries list"/>{/* Use Header component */}
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
