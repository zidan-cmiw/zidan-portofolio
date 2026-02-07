export default function ProjectCardHorizontal({ 
  title, 
  description, 
  link, 
  image, 
  year 
}) {
  return (
    <div 
      className="group rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col max-w-[320px]"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <div className="relative w-full h-[200px] overflow-hidden flex-shrink-0" style={{ backgroundColor: '#e5e7eb' }}>
        {image ? (
          <img 
            src={image} 
            alt={`${title} Project`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
            <span className="text-white text-[16px] font-bold">{title}</span>
          </div>
        )}
        {year && (
          <div 
            className="absolute font-bold rounded"
            style={{ 
              top: '12px', 
              right: '12px', 
              fontSize: '11px', 
              zIndex: 20,
              padding: '4px 12px',
              backgroundColor: '#000000',
              color: '#ffffff'
            }}
          >
            {year}
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1" style={{ padding: '20px' }}>
        <h3 className="text-[20px] font-bold text-black group-hover:text-gray-700 transition-colors" style={{ margin: '0', paddingBottom: '10px' }}>
          {title}
        </h3>
        <p className="text-gray-700 text-[14px] leading-relaxed" style={{ margin: '0', paddingBottom: '10px' }}>
          {description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-black font-semibold text-[13px] underline hover:text-gray-700 transition-colors w-fit mt-auto"
        >
          Click here to visit this website!
        </a>
      </div>
    </div>
  );
}
