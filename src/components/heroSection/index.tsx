import { UpArrowIcon } from '../../assets/icons';
import { Button } from '../button';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#00021b]">
      <div className="w-11/12 mx-auto flex py-4 px-8 text-white h-[90vh]">
        <div className="w-full flex flex-col items-start justify-center">
          <div className="flex flex-col items-start gap-y-5">
            <div className="flex flex-col items-start text-7xl">
              <h1 className="hero-section-header-1">
                <span className="mr-4">Custom</span>
                <span>Website</span>
              </h1>
              <h1 className="hero-section-header-2">
                <span className="mr-4">Development</span>
                <span>Service</span>
              </h1>
            </div>
            <p className="w-8/12 text-base font-extralight text-left">
              MultiversX, the EGLD network, is a distributed blockchain network
              for next-gen applications. Decentralized via 3,000+ nodes,
              scalable through sharding, fast, secure & green.
            </p>
          </div>
          <div className="flex mt-5">
            <Button
              variant="primary"
              className="!bg-pink-400"
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
