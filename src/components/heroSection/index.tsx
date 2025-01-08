import { UpArrowIcon } from '../../assets/icons';
import { Button } from '../button';
import ParticleImageTop from '../../assets/png/Particle-Image-top.png';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="h-full absolute -z-20 overflow-hidden">
        <img src={ParticleImageTop} className="scale-125 object-cover h-full md:h-fit" />
      </div>
      <div className="w-11/12 mx-auto flex py-4 px-8 text-white h-[90vh]">
        <div className="w-full flex flex-col items-center md:items-start justify-center">
          <div className="flex flex-col items-center md:items-start gap-y-5">
            <div className="flex flex-col items-center md:items-start text-5xl md:text-7xl">
              <h1 className="hero-section-header-1 flex flex-col items-center md:flex-row">
                <span className="md:mr-4">Custom</span>
                <span>Website</span>
              </h1>
              <h1 className="hero-section-header-2 flex flex-col items-center md:flex-row">
                <span className="md:mr-4">Development</span>
                <span>Service</span>
              </h1>
            </div>
            <p className="w-11/12 md:w-8/12 text-base text-center md:text-left  ">
              MultiversX, the EGLD network, is a distributed blockchain network
              for next-gen applications. Decentralized via 3,000+ nodes,
              scalable through sharding, fast, secure & green.
            </p>
          </div>
          <div className="flex mt-5">
            <Button
              variant="primary"
              className="!bg-custom-pink"
              rounded={true}
              rightIcon={<UpArrowIcon />}
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
