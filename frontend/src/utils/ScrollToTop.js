import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.focus();
    window.scrollTo(0, 800);
  }, [pathname]);

  return null;
}
