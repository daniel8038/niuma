// ImageModal.js
import { images } from "../assets/pack";

const ImageModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30  backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close on backdrop click
    >
      <div className="relative bg-white  backdrop-blur-md rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button - Always in top right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-60 w-10 h-10  rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 text-4xl font-light transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Modal Header */}
        <div className=" px-8 py-2  ">
          <h2 className="text-2xl font-semibold text-gray-800">
            Click on any image to download it
          </h2>
        </div>

        {/* Image Grid Container - Scrollable */}
        <div
          className="overflow-y-auto max-h-[80vh] custom-scrollbar"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E1 #F1F5F9",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-6">
            {images.map((image, index) => (
              <a
                href={image}
                download={`niuma-${index}`}
                key={index}
                className="group relative  rounded-xl  shadow-sm hover:shadow-lg  cursor-pointer transform t    ransition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square flex items-center justify-center  rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Letter ${String.fromCharCode(97 + index)}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className=" text-white px-3 py-1 rounded-full text-sm font-medium transform scale-95 group-hover:scale-100 transition-transform duration-200">
                    Download
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Empty state if no images */}
          {images.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium">No Images Available</p>
              <p className="text-sm mt-1">Please try again later</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {/* <div className="bg-gray-50/80 px-8 py-4 border-t border-gray-200/50 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {images.length} images available
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors duration-200"
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ImageModal;
