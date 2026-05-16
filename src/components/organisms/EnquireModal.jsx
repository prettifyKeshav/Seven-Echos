"use client";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useSelector } from "react-redux";
const EnquireModal = () => {
  const { openModal, closeModal } = useModal();
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div
      className={`model  enquire-modal ${isModal === "enquire" ? "is-open" : ""}`}
    >
      <button className="close" onClick={() => closeModal()}>
        <Image
          src="/assets/icon/close.svg"
          width={24}
          height={24}
          alt="close"
        />
      </button>
      <div className="modal-body vertical-scroll">
        <div className="content">
          <h2>Find Your Perfect Getaway</h2>
          <p>
            Tell us a little about yourself and receive curated villa
            experiences and exclusive offers.
          </p>

          <form action="">
            <label htmlFor="">
              <span>
                First Name <sup>*</sup>
              </span>
              <input type="text" placeholder="Shubh" />
            </label>
            <label htmlFor="">
              <span>
                Last Name <sup>*</sup>
              </span>
              <input type="text" placeholder="Somani" />
            </label>
            <label htmlFor="">
              <span>
                Phone Number <sup>*</sup>
              </span>
              <input type="phone" placeholder="1234567890" />
            </label>
            <label htmlFor="">
              <span>
                City <sup>*</sup>
              </span>
              <input type="text" placeholder="Goa" />
            </label>
            <label htmlFor="">
              <span>
                Enter your query here <sup>*</sup>
              </span>
              <textarea rows="4" placeholder="Your text here..." />
            </label>

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;
