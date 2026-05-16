"use client";

import { useModal } from "@/hooks/useModal";
import { useSelector } from "react-redux";

const Overlay = () => {
  const { isModal } = useSelector((state) => state.modal);
  const { closeModal } = useModal();

  return (
    <div
      onClick={() => closeModal()}
      className={`overlay ${isModal !== null ? "is-open" : ""}`}
    ></div>
  );
};

export default Overlay;
