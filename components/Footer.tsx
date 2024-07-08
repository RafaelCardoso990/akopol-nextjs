import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* social */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4 text-secondary"
            iconsStyles="text-primary text-[20px]"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Rafael Cardoso. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
