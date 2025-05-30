import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo1 1 (1).png'

const Footer = () => {
  return (
    <footer
      className="bg-[url('/background-pattern.png')] bg-cover bg-center text-base-content pt-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <img src={logo} alt="Logo" className="h-12 mb-1" />
          <h2 className="text-xl font-bold mb-2">Espresso Emporium</h2>
          <p className="mb-4 text-sm">
            Always ready to take your orders. Come & connect with us to share your
            memorable moments over a cup of our finest coffee.
          </p>

          <div className="flex space-x-4 mb-4">
            <a className="text-xl hover:text-primary" href="#"><FaFacebookF /></a>
            <a className="text-xl hover:text-primary" href="#"><FaTwitter /></a>
            <a className="text-xl hover:text-primary" href="#"><FaInstagram /></a>
            <a className="text-xl hover:text-primary" href="#"><FaLinkedinIn /></a>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone /> +88 01533 333 333
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> info@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> 72, Wall street, Lamy Road, Dhaka
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-xl font-bold mb-4">Connect with Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <button type="submit" className="btn btn-outline">Send Message</button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 bg-[#1B1A1A] text-sm border-t p-4 text-white">
        © Copyright Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
