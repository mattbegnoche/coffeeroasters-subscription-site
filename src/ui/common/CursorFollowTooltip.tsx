import { useState } from "react";

interface CursorFollowTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const CursorFollowTooltip = ({
  content,
  children,
}: CursorFollowTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Update position based on mouse coordinates
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }} // Container for the trigger
    >
      {children}
      {isVisible && (
        <div
          style={{
            position: "fixed", // Use fixed position to follow the cursor relative to the viewport
            top: position.y + 10, // Add an offset so the tooltip isn't directly under the cursor
            left: position.x + 10,
            pointerEvents: "none", // Allows interaction with elements beneath the tooltip
            // Add custom styling here
            background: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            zIndex: 1000,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
