
import Image from 'next/image';

interface SkillLogoProps {
  src: string;
  alt: string;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ src, alt }) => {
  return (
    <div className="w-20 h-20 bg-[#151b27] rounded-lg flex items-center justify-center p-4 border border-gray-800 transition-transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 hover:border-cyan-500/50 transition-all duration-300">
      <Image src={src} alt={alt} width={60} height={60} />
    </div>
  );
};

export default SkillLogo;