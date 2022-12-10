import "./contactsButton.scss";
import plane from "assets/images/plane.svg";
import { useRef, useState, useEffect } from "react";

type ContactsButtonType = {
  action: () => void;
  isTouched: boolean;
  dirty: boolean;
  isValid: boolean;
};

const ContactsButton = ({
  action,
  isTouched,
  dirty,
  isValid
}: ContactsButtonType): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect((): void => {
    leave();
    setIsClicked(false);
  }, [isTouched]);

  let ticks: number = 0;
  let acceleration: number = 1;
  let textAcceleration: number = 1;
  let animationInProgress: boolean = false;

  const hover = (): void => {
    const img: HTMLElement = imageRef.current as HTMLElement;
    const text: HTMLElement = textRef.current as HTMLElement;

    ticks++;
    acceleration += 0.02;
    textAcceleration += 0.01;

    animationInProgress = true;
    if (ticks < 35) {
      img.style.transform = `translate(${ticks * acceleration}px, -${
        ticks * acceleration
      }px)`;
      img.style.width = `calc(${img.style.width} + 1px)`;
      img.style.height = `calc(${img.style.height} + 1px)`;

      text.style.transform = `translateY(-${ticks * textAcceleration}px)`;
      window.requestAnimationFrame(hover);
    } else {
      animationInProgress = false;
      return;
    }
  };

  const leave = (): void => {
    const img: HTMLElement = imageRef.current as HTMLElement;
    const text: HTMLElement = textRef.current as HTMLElement;
    acceleration = 1;
    textAcceleration = 1;

    animationInProgress = false;
    if (img) {
      img.style.transform = "";
      img.style.width = `55.38px`;
      img.style.height = `40px`;
    }
    if (text) {
      text.style.transform = "";
    }
  };

  const click = (): void => {
    const img: HTMLElement = imageRef.current as HTMLElement;
    const text: HTMLElement = textRef.current as HTMLElement;

    ticks++;
    acceleration += 0.05;
    animationInProgress = true;
    if (ticks < 80) {
      img.style.transform = `translate(${ticks * acceleration}px, -${
        ticks * acceleration
      }px)`;
      img.style.width = `calc(${img.style.width} - 2px)`;
      img.style.height = `calc(${img.style.height} - 2px)`;

      text.style.transform = "";
      window.requestAnimationFrame(click);
    } else {
      animationInProgress = false;
      return;
    }
  };

  return (
    <div
      className={`contacts__btn ${isClicked ? "contacts__btn--isDone" : ""}`}
    >
      <div
        onMouseEnter={(): void => {
          if (isClicked || animationInProgress) {
            return;
          }
          ticks = 0;
          acceleration = 1;
          textAcceleration = 1;
          animationInProgress = false;
          hover();
        }}
        onMouseLeave={(): void => {
          if (isClicked) return;
          ticks = 35;
          leave();
        }}
        onClick={(): void => {
          if ((dirty && isValid) || isClicked) {
            acceleration = 1;
            textAcceleration = 1;
            click();
            setIsClicked(true);
          }
          action();
        }}
      >
        <img
          src={plane}
          alt=""
          ref={imageRef}
          style={{ width: "55.38px", height: "40px" }}
        />

        <p ref={textRef}>
          {!isClicked ? "Отправить" : "Ваше сообщение отправлено!"}
        </p>
      </div>
    </div>
  );
};

export default ContactsButton;
