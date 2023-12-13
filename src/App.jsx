import 'App.scss';
import { Sidebar } from 'components/sidebar';
import { Main } from 'components/main';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { useState } from 'react';
import classNames from 'classnames';

function App() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  }

  return (
    <div className={classNames('App', {
      'App-long': open,
    })}>
      <Header menuClick={handleMenuClick} />
      <main className="container content">
        <Sidebar open={open} />
        <Main open={open} />
      </main>
      <Footer open={open} />
    </div>
  );
}

export default App;
