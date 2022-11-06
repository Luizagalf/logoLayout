/* eslint-disable react-hooks/exhaustive-deps */
import "./contactsButton.scss";
import plane from "assets/images/plane.svg";
import { useState, useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    getImage();
  }, [isTouchedForm]);

  const getImage = (action?: string) => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const image = imageRef.current as HTMLImageElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    switch (action) {
      case "hover":
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 110, 10);
        break;
      case "click":
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 200, 10);
        break;
      case "leave":
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 50, 50);
        break;
      default:
        image.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 50, 50);
        };
        break;
    }
  };

  return (
    <div className="contacts__btn">
      <div
        onMouseEnter={() => {
          getImage("hover");
        }}
        onMouseLeave={() => {
          getImage("leave");
        }}
        onClick={() => {
          if (dirty && isValid) {
            getImage("click");
          }
          action();
        }}
      >
        <img src={plane} alt="" ref={imageRef} />
        <canvas ref={canvasRef} />
        <p>{isTouchedForm ? "Отправить" : "Ваше сообщение отправлено!"}</p>
      </div>
    </div>
  );
};

export default ContactsButton;
