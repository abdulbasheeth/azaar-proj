// ScrollToContact.jsx
import { useNavigate, useLocation } from "react-router-dom";

const ScrollToContact = ({ children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    const scrollToContactSection = () => {
      const contactSection = document.getElementById("contacts");
      if (contactSection) {
        const yOffset = -80; // Adjust if you have a fixed navbar
        const y =
          contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      // Navigate to Home and scroll after render
      navigate("/", { state: { scrollToContact: true } });
    } else {
      scrollToContactSection();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className || "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"}
    >
      {children || "Contact"}
    </button>
  );
};

export default ScrollToContact;
