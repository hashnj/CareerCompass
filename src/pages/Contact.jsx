import { useState } from "react";
import { TiTickOutline } from "react-icons/ti";

const Contact = () => {

  const [success,setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "d538b7d5-feac-47a4-8ad4-1412a41bf126");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        event.target.reset(); 
        setSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: Unable to send the message. errorCode: "+error);
    }
  };

  return (
    <div className="bg-background/70 w-full h-screen">
      {success ? (
        <div className="bg-background h-screen flex justify-center items-center pt-0 text-primary text-3xl text-center p-4">
          <TiTickOutline />
          Message sent successfully!
        </div>
      ):(
      <form
        onSubmit={onSubmit}
        method="POST"
        className="flex flex-col items-center justify-center h-full p-4"
        encType="multipart/form-data"
        name="EmailForm"
      >
        <h1 className="text-3xl font-semibold text-primary mb-4">Contact Us</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 my-2 w-80 border-b-2 text-text bg-background/50 border-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 my-2 w-80 border-b-2 text-text bg-background/50  border-primary"
          required
        />
        <textarea
          name="message"
          placeholder="Your message here..."
          className="p-2 my-2 w-80 border-b-2 text-text bg-background/50 border-primary"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-text hover:bg-primary/70 rounded-xl p-2 w-80 my-2"
        >
          Send
        </button>
      </form>)}
    </div>
  );
};

export default Contact;
