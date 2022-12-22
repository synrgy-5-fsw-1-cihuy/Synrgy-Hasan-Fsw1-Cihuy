import FAQ from '../components/FAQ';
import Main from '../components/Main';
import MulaiSewa from '../components/MulaiSewa';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <>
      <Main />
      <Service />
      <WhyUs />
      <Testimonial />
      <MulaiSewa />
      <FAQ />
    </>
  );
};

export default Home;
