import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import { Component } from "react";
import Select from "react-select";
import options from "./options";
import Axios from "axios";

const initialValues = {
  name: "",
  age: "",
  time: "",
};

const Registration = () => {

  const styles = {
    multiValue: styles => {
      return {
        ...styles,
        fontSize: 13,
        backgroundColor: "papayawhip"
      };
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 35 ~ Registration ~ values",
          values
        );
        action.resetForm();
        window.location.reload();

        // For DBMS
        // Axios.post("http://localhost:8000/register", {
        //   name: values.name,
        //   age: values.age,
        //   time: values.time,
        // }).then((result, error) => {
        //   if (error) {
        //     console.log(error);
        //   }

        //   // if (result) {
        //   //   window.location.reload();
        //   // }
        // });

      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 57 ~ Registration ~ errors",
    errors
  );

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : ""
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To Dk's Yoga Classes.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="age" className="input-label">
                      Age
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="age"
                      id="age"
                      placeholder="Age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.age && touched.age ? (
                      <p className="form-error">{errors.age}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <Select
                      styles={styles}
                      name="time"
                      autoComplete="off"
                      type=""
                      id="time"
                      placeholder="Select a batch"
                      closeMenuOnSelect={true}
                      isSingle
                      options={options}
                      onChange={value => setFieldValue("time", value.value)}
                      onBlur={handleBlur}
                    />
                    {errors.time && touched.time ? (
                      <p className="form-error">{errors.time}</p>
                    ) : null}
                  </div>


                  <div className="modal-buttons">

                    <button className="input-button" type="submit">
                      Submit & Pay
                    </button>
                  </div>
                </form>
                
                
                
                <footer>
                <div className="modal-footer">
                  <center>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                  <h2 style={{color: 'black', fontSize: '2rem'}}>Follow Us</h2>
                  <a href="https://www.linkedin.com/in/dineshkumar-vhananavar-957a941aa" className="">
                    <img src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg" style={{ height: "40px", width: "50px" }} alt="" srcset="" />
                  </a>

                  <a href="https://github.com/Dineshkumar-Vhananavar" className="">
                    <img src="https://pngimg.com/uploads/github/github_PNG40.png" style={{ height: "40px", width: "40px" }} alt="" srcset="" />
                  </a>

                  <a href="https://www.instagram.com/its_d_i_n_e_s_h/" className="">
                    <img src="https://cdn-icons-png.flaticon.com/512/3621/3621435.png" style={{ height: "40px", width: "40px" }} alt="" srcset="" />
                  </a>

                  <a href="https://www.facebook.com/dineshkumar.vhananavar.5/" className="">
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" style={{ height: "40px", width: "45px" }} alt="" srcset="" />
                  </a>

                  </center>
                </div>
                <hr />
	           		<div className="mt-5">
	           		<p className="main-hero-para text-center w-100" style={{fontSize: '1.5rem'}}>Copyright © 2022 Dineshkumar V. All rights reserved.</p>
                </div>
                </footer>

              </div>
              <div className="modal-right">
                <img
                  src="https://i.pinimg.com/736x/70/e7/80/70e780668f2723120c68dcf259f3a371--mens-yoga-shorts-shorts-for-men.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }

  .modal-footer{
    padding: 0.5rem 0;
    //background-color: #182334;
    background-color: #fff;
    color: #fff;
  }

  .main-hero-para{
    margin: 0;
  }
`;

export default Registration;
