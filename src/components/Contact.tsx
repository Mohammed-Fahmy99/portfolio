import Input from "@components/Input";

function Contact() {
  return (
    <div className="flex flex-col gap-8" id="contact">
      <h2 className="text-4xl font-bold text-center">Contact</h2>

      <form
        action="https://getform.io/f/a028ec3a-98f6-4924-b1fb-8266a5f00943"
        method="POST"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Your Name"
          />
          <Input
            type="number"
            name="phone-number"
            label="Phone Number"
            placeholder="Phone Number"
          />
        </div>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter Your Email"
        />
        <Input
          type="text"
          name="subject"
          label="Subject"
          placeholder="The Subject"
        />
        <div className="">
          <label className="uppercase text-sm ">Message</label>
          <textarea
            name="message"
            rows={10}
            className="w-full border-2 rounded-lg p-3 border-gray-300"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-gray-100 p-4 rounded-lg "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
