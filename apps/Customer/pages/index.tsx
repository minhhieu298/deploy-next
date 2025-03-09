import { useState } from "react";
import SettingsPopup from "../components/Modal";

export default function Index() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="avatar-container">
      <img 
        src="/avatar.jpg"
        alt="User Avatar"
        onClick={() => setIsPopupOpen(true)}
        className="avatar"
      />
      <SettingsPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}