import React from "react";
import { Icon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: IconComponent,
  imageSrc,
}) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      
      {/* Image Section (optional) */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-gray-400 opacity-40" />
        </div>
      )}

      {/* Text & Icon */}
      <div className="p-6 text-center">
        <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-pink-500 transition-colors duration-300" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
