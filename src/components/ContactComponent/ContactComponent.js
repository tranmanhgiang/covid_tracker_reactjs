import React from 'react';
import './main.css';
import './util.css';

class ContactComponent extends React.Component {
    render() {
        return (
            <div className="container-contact100">
            <div className="wrap-contact100">
              <form className="contact100-form validate-form">
                <span className="contact100-form-title">Send Us A Message</span>
                <label className="label-input100" htmlFor="first-name">
                  Tell us your name *
                </label>
                <div
                  className="wrap-input100 rs1-wrap-input100 validate-input"
                  data-validate="Type first name"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="text"
                    name="first-name"
                    placeholder="First name"
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 rs2-wrap-input100 validate-input"
                  data-validate="Type last name"
                >
                  <input
                    className="input100"
                    type="text"
                    name="last-name"
                    placeholder="Last name"
                  />
                  <span className="focus-input100" />
                </div>
                <label className="label-input100" htmlFor="email">
                  Enter your email *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    id="email"
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Eg. example@email.com"
                  />
                  <span className="focus-input100" />
                </div>
                <label className="label-input100" htmlFor="phone">
                  Enter phone number
                </label>
                <div className="wrap-input100">
                  <input
                    id="phone"
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="Eg. +1 800 000000"
                  />
                  <span className="focus-input100" />
                </div>
                <label className="label-input100" htmlFor="message">
                  Message *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    id="message"
                    className="input100"
                    name="message"
                    placeholder="Write us a message"
                    defaultValue={""}
                  />
                  <span className="focus-input100" />
                </div>
                <div className="container-contact100-form-btn">
                  <button className="contact100-form-btn">Send Message</button>
                </div>
              </form>
              <div
                className="contact100-more flex-col-c-m info"
              >
                <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Dia chi</span>
                    <span className="txt3">
                      144 Xuan Thuy, Cau Giay, Ha Noi
                    </span>
                  </div>
                </div>
                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">So dien thoai</span>
                    <span className="txt3">+084 5578355</span>
                  </div>
                </div>
                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="fas fa-envelope-open-text" />
                  </div>
                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Email</span>
                    <span className="txt3">tranmanhgiang06051999@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        );
    }
}

export default ContactComponent;