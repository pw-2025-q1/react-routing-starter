export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        Have questions or need assistance? Feel free to reach out to us through any of the 
        following methods:
      </p>
      <ul className="contact-list">
        <li>Email: <a href="mailto:support@example.com" className="contact-link">support@example.com</a></li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 123 Main Street, Anytown, USA</li>
      </ul>
      <form className="contact-form">
        <h2 className="form-title">Send Us a Message</h2>
        <label className="form-label">
          Name:
          <input type="text" name="name" className="form-input" />
        </label>
        <label className="form-label">
          Message:
          <textarea name="message" className="form-textarea"></textarea>
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}
