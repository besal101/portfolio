import React from "react";
import Switcher from "./Switcher";
import Header from "./Header";
import Navmenu from "./Navmenu";
import { gsap } from "gsap";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  function mousemoveHandler(e: MouseEvent) {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".cursor1", {
        ease: "power2.out",
      }).to(
        ".cursor2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", mousemoveHandler);
  });

  const [showSetting, setShowSetting] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  return (
    <div className="dark">
      <div className="cursor1"></div>
      <div className="cursor2"></div>
      <Switcher
        show={showSetting}
        onClick={() => setShowSetting(!showSetting)}
      />
      <div className="has-smooth" id="has_smooth"></div>
      <Header onClick={() => setShowMenu(!showMenu)} />
      <Navmenu show={showMenu} onClick={() => setShowMenu(!showMenu)} />
      {children}
    </div>
  );
};

export default Layout;
