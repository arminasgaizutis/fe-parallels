import { BsMailbox, BsDoorOpen, BsBoxSeam } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div>
        <span>Parallels</span>
        <button>
          <BsMailbox />
          <br />
          Gossip
        </button>
        <button>
          <BsBoxSeam />
          <br /> Memory-box
        </button>
        <button>
          <BsDoorOpen />
          <br /> Exit
        </button>
      </div>
    </>
  );
};

export default Header;
