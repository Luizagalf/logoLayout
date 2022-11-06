import "./contactsButton.scss";
import plane from "assets/images/plane.svg";
import { useRef } from "react";

type ContactsButtonType = {
  action: () => void;
  isTouchedForm: boolean;
  dirty: boolean;
  isValid: boolean;
};

const ContactsButton = ({
  action,
  isTouchedForm,
  dirty,
  isValid
}: ContactsButtonType) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  let ticks = 0;
  let acceleration = 1;
  let textAcceleration = 1;
  let animationInProgress = false;

  const hover = () => {
    const img = imageRef.current as HTMLElement;
    const text = textRef.current as HTMLElement;

    ticks++;
    acceleration += 0.02;
    textAcceleration += 0.003;

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

  const leave = () => {
    const img = imageRef.current as HTMLElement;
    const text = textRef.current as HTMLElement;
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

  const click = () => {
    const img = imageRef.current as HTMLElement;
    const text = textRef.current as HTMLElement;

    ticks++;
    acceleration += 0.2;
    animationInProgress = true;
    if (ticks < 50) {
      img.style.transform = `translate(${ticks * acceleration}px, -${
        ticks * acceleration
      }px)`;
      img.style.width = `calc(${img.style.width} -7px)`;
      img.style.height = `calc(${img.style.height} - 7px)`;
      text.style.transform = "";
      window.requestAnimationFrame(click);
    } else {
      animationInProgress = false;
      return;
    }
  };

  return (
    <div className={`contacts__btn ${!isTouchedForm ? "isDone" : ""}`}>
      <div
        onMouseEnter={() => {
          if (animationInProgress) {
            return;
          }
          ticks = 0;
          acceleration = 1;
          textAcceleration = 1;
          animationInProgress = false;
          hover();
        }}
        onMouseLeave={() => {
          ticks = 35;
          leave();
        }}
        onClick={() => {
          if (dirty && isValid) {
            acceleration = 1;
            textAcceleration = 1;
            click();
          }
          action();
        }}
      >
        {isTouchedForm ? (
          <img
            src={plane}
            alt=""
            ref={imageRef}
            style={{ width: "55.38px", height: "40px" }}
          />
        ) : (
          ""
        )}

        <p ref={textRef}>
          {isTouchedForm ? "Отправить" : "Ваше сообщение отправлено!"}
        </p>
      </div>
    </div>
  );
};

export default ContactsButton;
