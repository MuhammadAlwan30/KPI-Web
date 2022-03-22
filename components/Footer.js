import react from 'react';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
 return (
  <footer className="bg-violet-500 h-80 rounded-t-md">
    <div className="flex justify-center items-center w-full flex-col sm:flex-row">
    <div className="flex w-full flex-col sm:flex-row">
    <div className="m-5 p-4"><span className="font-semibold">Overview</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Quest</a></li>
        <li><a href="#">Thread</a></li>
      </ul>
    </div>
    <div className="m-5 p-4"><span className="font-semibold">Community</span>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Whatsapp</a></li>
        <li><a href="#">Discord</a></li>
      </ul>
    </div>
    <div className="m-5 p-4"><span className="font-semibold">Explore</span>
      <ul>
        <li><a href="#">Terms and conds</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Donation</a></li>
      </ul>
    </div>
      <label for="email" className="mt-8 mx-auto">Email
    <input type="email" name="email" id="email" placeholder="input your email" className="placeholder:italic focus:ring-4 border-emerald-300 block rounded-lg h-14 w-96 text-center " />
  </label>
  </div>

    </div>
    <span className="text-center m-auto block font-sans"> Copyright &copy;{copyrightYear}</span>
  </footer>
 )
}
export default Footer;
