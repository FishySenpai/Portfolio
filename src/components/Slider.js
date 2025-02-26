import {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import styles from "../slider.module.css";
import arrowLeft from "./Assets/arrowLeft.png";
import arrowRight from "./Assets/arrowRight.png";
const Slider = ({ children }) => {
  const containerRef = useRef();
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);

  const handleResize = () => {
    setIsTallScreen(window.innerHeight > 800);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const actionHandler = useCallback(
    (mode) => {
      containerRef.current.style.transitionDuration = "700ms";
      if (mode === "prev") {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === "next") {
        if (current >= children.length) {
          setTranslateX(
            containerRef.current.clientWidth * (children.length + 1)
          );
          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  // This is for infinite scroll smooth effect
  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  //   for autoplay
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      actionHandler("next");
    }, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className={styles.Slide}>
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className={`max-w-fit ${styles.Slide}`}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={styles.Slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={styles.Slide}>{children[0]}</li>;
  }, [children]);

  //   position first element correctly & this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <section className={` slider_Root w-full h-[300px] sm:h-[400px]`}>
      <ul
        ref={containerRef}
        className={`${styles.Container}`}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`,
        }}
      >
        {slides}
      </ul>
      <button onClick={() => actionHandler("prev")}>
        <img
          src={arrowLeft}
          className={`absolute ${
            isTallScreen
              ? " top-[170px] w-[90px] h-[90px] -left-8"
              : "top-[80px] w-[70px] h-[70px] -left-6"
          }    z-50`}
        />
      </button>
      <button onClick={() => actionHandler("next")}>
        <img
          src={arrowRight}
          className={`absolute ${
            isTallScreen
              ? " top-[170px] w-[90px] h-[90px] -right-8"
              : "top-[80px] w-[70px] h-[70px] -right-6"
          }`}
        />
      </button>
    </section>
  );
};

export default Slider;
