import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';


function Contact(props) {

  const handleSubmit = (values) => {
    let data = JSON.parse(localStorage.getItem("users"))
  
    if (data === null) {
      localStorage.setItem("users", JSON.stringify([values]))
    } else {
      data.push(values)
      localStorage.setItem("users", JSON.stringify(data))
    }
  }
  
  let schema = yup.object().shape({
    name: yup.string().required('please enter name'),
    email: yup.string().required('please enter email').email('enter valid email'),
    subject: yup.string().required('please enter subject'),
    message: yup.string().required('please enter message')
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      handleSubmit(values)
    },
  });
  console.log(formik.errors.name);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="section-title position-relative text-center mb-5">Contact Us For Any Query</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
          <Formik value={formik}>
          <Form onSubmit={formik.handleSubmit} className="php-email-form">
            <div className="contact-form bg-light rounded p-5">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="col-sm-6 control-group">
                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name"
                    onChange={formik.handleChange}
                     />
                       {
                          formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                    } 
                    <p className="help-block text-danger" />
                  </div>
                  <div className="col-sm-6 control-group">
                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email"
                    onChange={formik.handleChange}
                    />
                     {
                          formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                    }
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" 
                  onChange={formik.handleChange}
                  />
                   {
                          formik.errors.subject && formik.touched.subject ? <p>{formik.errors.subject}</p> : ''
                    }    
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} 
                  onChange={formik.handleChange}
                  />
                    {
                          formik.errors.message && formik.touched.message ? <p>{formik.errors.message}</p> : ''
                    }
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary btn-block py-3 px-5" id="sendMessageButton">Send Message</button>
                </div>
              </form>
            </div> 
          </Form>
          </Formik>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;