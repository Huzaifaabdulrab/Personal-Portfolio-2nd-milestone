export default function Contact() {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
      </div>

      <p className="contact-description">
        Feel free to reach out for collaborations, questions, or just to say
        hello!
      </p>

      {/* Form Start */}
      <form
        action="https://formspree.io/f/xjkvwdge"
        method="POST"
        className="contact-form"
      >
        {/* Name, Email, and Subject in a Single Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Subject" className="form-label">
              Subject:
            </label>
            <input
              type="text"
              id="Subject"
              name="Subject"
              className="form-input"
              required
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="form-textarea"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-group" style={{ textAlign: "center" }}>
          <button className="submit-button">Send Message</button>
        </div>
      </form>
      {/* Form End */}
    </div>
  );
}
