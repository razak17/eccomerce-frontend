import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
	return (
		<div>
      <Announcement />
			<Navbar />
			<Footer />
		</div>
	);
};

export default Home;
