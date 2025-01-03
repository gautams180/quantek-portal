import { Clients } from '../../components/clients';
import { HeroSection } from '../../components/heroSection';
import { ServiceSection } from '../../components/service';
import { Workflow } from '../../components/workflow';
import ParticleBottom from "../../assets/png/Particle-image-bottom.png"

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Workflow />
      <Clients />
      <div className='w-full overflow-hidden'>
        <img src={ParticleBottom} className='scale-125'/>
      </div>
    </>
  );
};
