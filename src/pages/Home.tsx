import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
	return (
		<div>
      <Announcement />
			<Navbar />
      <Slider />
      <Categories />
			<Footer />
		</div>
	);
};

export default Home;
