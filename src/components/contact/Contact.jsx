import { useRef } from "react";
import "./Contact.css";
import { CgMail } from "react-icons/cg";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import { GithubIcon } from "../icons/Github";
import { LinkedIn } from "../icons/Linkin";
import AnimatedText from "../animations/AnimatedText";
import Transition from "../transition/Transition";

const Contact = () => {
  const form = useRef();

  const service = import.meta.env.VITE_SERV;
  const temp = import.meta.env.VITE_TEMP;
  const curr = import.meta.env.VITE_CURRENT;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    message: Yup.string().required("Your Message is required"),
  });

  const sendEmail = (values, { resetForm }) => {
    emailjs.sendForm(service, temp, form.current, curr).then(
      (result) => {
        toast.success("Message sent successfully!", {
          autoClose: 10000,
        });
        resetForm();
      },
      (error) => {
        toast.error("Failed to send message.");
      }
    );
  };

  return (
    <>
      <Transition />
      <div className="flex w-full flex-col items-center justify-center">
        <Home />
        <Layout>
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="contact"
            className="contacts dark:bg-black my-0 mx-0 dark:text-white"
          >
            <AnimatedText
              text="Get In Touch"
              className="!text-4xl text-center mb-4 xl:!text-3xl md:!text-2xl sm:!text-xl"
            />
            <motion.p
              variants={fadeIn("left", "tween", 2, 1)}
              className="text-center pb-8 dark:text-white/70 text-gray-600 max-w-2xl mx-auto"
            >
              Connect with me through email, phone, or professional networks. I'm always open to discussing new opportunities, collaborations, or answering questions.
            </motion.p>

            {/* Professional Links Section */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="flex justify-center gap-6 mb-12 flex-wrap"
            >
              <motion.a
                href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-black/50 border-2 border-black dark:border-white/20 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 mb-2">
                  <LinkedIn className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold dark:text-white">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/webboFelix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-black/50 border-2 border-black dark:border-white/20 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 mb-2 text-black dark:text-white">
                  <GithubIcon className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold dark:text-white">GitHub</span>
              </motion.a>

              <motion.a
                href="mailto:felixwebbo.fw@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-black/50 border-2 border-black dark:border-white/20 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CgMail className="w-12 h-12 mb-2 text-black dark:text-white" />
                <span className="text-sm font-semibold dark:text-white">Email</span>
              </motion.a>

              <motion.a
                href="tel:+254113323746"
                className="flex flex-col items-center p-6 bg-white dark:bg-black/50 border-2 border-black dark:border-white/20 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsWhatsapp className="w-12 h-12 mb-2 text-green-500" />
                <span className="text-sm font-semibold dark:text-white">Phone</span>
              </motion.a>
            </motion.div>

            <div className="flex justify-between w-full sm:flex-col">
              <div className="w-[45%] sm:w-full ">
                <motion.article
                  variants={fadeIn("down", "tween", 1, 1)}
                  className="flex flex-col dark:border-2 dark:border-dotted hover:dark:shadow-shadowLight items-center bg-black/30 dark:bg-black/50 p-8 rounded-xl mb-10 hover:bg-transparent hover:border-4 hover:border-dotted hover:shadow-custom transform transition-all duration-100 easeInOut hover:bottom-5"
                >
                  <img src="./gif-gmail-logo.gif" alt="Gmail" className="w-16 h-16 mb-4" />
                  <h4 className="text-xl font-bold dark:text-white mb-2">Email</h4>
                  <h5 className="text-gray-700 dark:text-gray-300 mb-4">felixwebbo.fw@gmail.com</h5>
                  <a
                    href="mailto:felixwebbo.fw@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 hover:bg-gray-300 hover:text-bold p-2 rounded transition-transition dark:text-white"
                  >
                    Send a Message
                  </a>
                </motion.article>

                <motion.article
                  variants={fadeIn("up", "tween", 3, 1)}
                  className="flex flex-col dark:border-2 dark:border-dashed hover:dark:shadow-shadowLight items-center bg-black/10 dark:bg-black/50 p-8 rounded-xl mb-10 hover:bg-transparent hover:border-4 hover:border-dotted hover:shadow-custom transform transition-all duration-100 easeInOut hover:bottom-5"
                >
                  <BsWhatsapp className="contact_option-icon whats text-6xl mb-4" />
                  <h4 className="text-xl font-bold dark:text-white mb-2">WhatsApp</h4>
                  <h5 className="text-gray-700 dark:text-gray-300 mb-4">+(254) 113323746</h5>
                  <a
                    href="https://api.whatsapp.com/send?phone=+254113323746"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 dark:text-white hover:bg-gray-300 hover:text-bold p-2 rounded transition-transition"
                  >
                    Send a Message
                  </a>
                </motion.article>
              </div>

            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form
                  ref={form}
                  className="w-[50%] dark:shadow-shadowLight shadow-custom border-4 border-dashed sm:w-full mb-5"
                >
                  <motion.div
                    variants={fadeIn("down", "tween", 1, 1)}
                    className="input-container"
                  >
                    <Field type="text" name="name" placeholder=" " />
                    <label htmlFor="name">Your Full Name</label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", "tween", 1.5, 1)}
                    className="input-container"
                  >
                    <Field type="email" name="email" placeholder=" " />
                    <label htmlFor="email">Your Email</label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", "tween", 2, 1)}
                    className="input-container"
                  >
                    <Field type="text" name="phone" placeholder=" " />
                    <label htmlFor="phone">Your Phone Number</label>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", "tween", 2.5, 1)}
                    className="input-container"
                  >
                    <Field
                      as="textarea"
                      name="message"
                      rows="7"
                      placeholder=" "
                    />
                    <label htmlFor="message">Your Message</label>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary p-2 h-10 rounded bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white transform transition-transform hover:scale-105 hover:rotate-3d"
                    disabled={isSubmitting}
                    variants={fadeIn("up", "tween", 3, 1)}
                    whileHover={{ scale: 1.05, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    Send Message
                  </motion.button>
                </Form>
              )}
            </Formik>
          </div>
        </motion.section>
      </Layout>

      <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
