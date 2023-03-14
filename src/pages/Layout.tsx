import { A, Outlet } from 'solid-start';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <A href={'/'}>Home</A>
        </li>
        <li>
          <A href={'/about'}>About</A>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
