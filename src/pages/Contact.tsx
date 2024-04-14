import LocationLayout from "../components/LocationLayout";

import { HiExclamationCircle } from "react-icons/hi2";

import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { FormEvent, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      // show success message
      formRef.current?.reset();
      setIsSubmitted(true);

      // set isSubmitted to false after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }
  }, [isSubmitSuccessful]);

  const onSubmit = handleSubmit((data) => console.log(data));

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Button clicked!", e);
    onSubmit();
  }

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-section__content-wrapper box-container">
          <span className="bg-shape"></span>
          <div className="contact-text">
            <h3 className="contact-text__title">Contact Us</h3>
            <p className="contact-text__desc">
              Ready to take it to the next level? Let's talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that's relatable to
              your users, drop us a line.
            </p>
          </div>
          <form
            onSubmit={(e) => submitForm(e)}
            action=""
            className="contact-form"
            ref={formRef}
          >
            <div className="input-container">
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="contact-form__input"
                placeholder="name"
              />
              {errors.name && (
                <span className="error">
                  <span className="error__txt">{errors.name.message}</span>
                  <span className="error__icon">
                    <HiExclamationCircle />
                  </span>
                </span>
              )}
            </div>
            <div className="input-container">
              <input
                type="email"
                id="email"
                {...register("email", { required: "email is required" })}
                className="contact-form__input"
                placeholder="email"
              />
              {errors.email && (
                <span className="error">
                  <span className="error__txt">{errors.email.message}</span>
                  <span className="error__icon">
                    <HiExclamationCircle />
                  </span>
                </span>
              )}
            </div>
            <div className="input-container">
              <input
                type="number"
                id="phone"
                {...register("phone", { required: "phone no. is required" })}
                className="contact-form__input"
                placeholder="phone no"
              />
              {errors.phone && (
                <span className="error">
                  <span className="error__txt">{errors.phone.message}</span>
                  <span className="error__icon">
                    <HiExclamationCircle />
                  </span>
                </span>
              )}
            </div>
            <div className="input-container">
              <textarea
                id="message"
                placeholder="Tell us about your project"
                className="contact-form__text-area"
                {...register("message", {
                  required: "message. is required",
                })}
              ></textarea>
              {errors.message && (
                <span className="error">
                  <span className="error__txt">{errors.message.message}</span>
                  <span className="error__icon">
                    <HiExclamationCircle />
                  </span>
                </span>
              )}
            </div>
            <AnimatePresence>{isSubmitted && <SuccessMsg />}</AnimatePresence>
            <Button className="btn btn__bg-dark">Submit</Button>
          </form>
        </div>
      </div>
      <LocationLayout />
    </div>
  );
}

export default Contact;

const msgVariant = {
  fadeOut: {
    y: "-30px",
    opacity: 0,
    transition: {
      duration: 1.3,
    },
  },
};

function SuccessMsg() {
  return (
    <motion.span variants={msgVariant} exit="fadeOut" className="success-msg">
      Form submitted !
    </motion.span>
  );
}
