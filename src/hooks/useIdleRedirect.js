import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BATAS_WAKTU_DIAM = 90000; // 90 detik

function useIdleRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    function resetTimer() {
      if (timerRef.current) clearTimeout(timerRef.current);

      // Sudah di beranda, tidak perlu timer
      if (location.pathname === "/") return;

      timerRef.current = setTimeout(() => {
        navigate("/");
      }, BATAS_WAKTU_DIAM);
    }

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname, navigate]);
}

export default useIdleRedirect;