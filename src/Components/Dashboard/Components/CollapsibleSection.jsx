import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";

const CollapsibleSection = ({
  title,
  children,
  isSidebarExpanded,
  onSearchClick,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center text-xs font-bold text-gray-400 transition-all duration-200 cursor-pointer ${
            !isSidebarExpanded && "justify-center"
          }`}
        >
          {isSidebarExpanded &&
            (isOpen ? (
              <FiChevronDown className="mr-1" />
            ) : (
              <FiChevronRight className="mr-1" />
            ))}
          <span
            className={`overflow-hidden transition-all duration-300 ${
              isSidebarExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            {title}
          </span>
        </button>
        {onSearchClick && isSidebarExpanded && (
          <button
            onClick={onSearchClick}
            className="text-gray-400 hover:text-cyan-400 cursor-pointer"
          >
            <FiSearch />
          </button>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {isOpen && <ul className="space-y-1 pt-1">{children}</ul>}
      </div>
    </div>
  );
};

export default CollapsibleSection;
