import { Clients } from '../../components/clients';
import { HeroSection } from '../../components/heroSection';
import { ServiceSection } from '../../components/service';
import { Workflow } from '../../components/workflow';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Workflow />
      <Clients />
    </>
  );
};
