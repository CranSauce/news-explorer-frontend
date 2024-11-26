import { forwardRef } from "react";
import "./ModalWithForm.css";

const ModalWithForm = forwardRef(
  (
    {
      isOpen,
      onClose,
      title,
      buttonText,
      buttonClassName,
      isLogin,
      isRegistrationComplete,
      openModal,
      onSubmit,
      children,
    },
    ref
  ) => {
    return (
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <div ref={ref} className="modal__content">
          <button className="modal__close-btn" onClick={onClose}>
            ✕
          </button>

          {isRegistrationComplete ? (
            <div className="modal__success-message">
              <p>Registration successfully completed!</p>
              <button
                type="button"
                className="modal__sign-in-link"
                onClick={() => {
                  onClose(); 
                  openModal("login"); 
                }}
              >
                Sign in
              </button>
            </div>
          ) : (
            <>
              <h2 className="modal__title">{title}</h2>
              <form
                className="modal__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(e);
                }}
              >
                {children}
                <button
                  type="submit"
                  className={`modal__submit ${buttonClassName}`}
                >
                  {buttonText}
                </button>
                {typeof isLogin !== "undefined" &&
                  (isLogin ? (
                    <button
                      type="button"
                      className="modal__register-btn"
                      onClick={() => openModal("register")}
                    >
                      or Sign up
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="modal__login-btn"
                      onClick={() => openModal("login")}
                    >
                      or Sign in
                    </button>
                  ))}
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
);


export default ModalWithForm;
