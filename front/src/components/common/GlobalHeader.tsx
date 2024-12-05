import Gnb from './Gnb';
import Lnb from './Lnb';

const GlobalHeader = () => {
  return (
    <header className="global-header">
      <Gnb />
      <Lnb />
    </header>
  );
};

export default GlobalHeader;
