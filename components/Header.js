import react from "react";

export default const Header = () => {
   return(
    <header className="bg-violet-300 flex justify-center items-center flex-row w-full h-20">
    <nav className="flex-row">
      <ul className="inline-flex space-x-4">
            <li className="hover:bg-slate-200 hover:underline"><a href="#">dev</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">ut</a></li>
            <li><a href="#">ui</a></li>
            <li><a href="#">about</a></li>
      </ul>
   </nav>
  </header>
   )
    
}