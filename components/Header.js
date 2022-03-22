import react from "react";

 export default function Header() {
   return(
    <header className="bg-violet-300 flex justify-center items-center flex-row w-full h-20">
    <nav className="flex-row">
      <ul className="inline-flex space-x-4">
            <li><a href="/about">Job</a></li>
            <li><a href="#">Discussion</a></li>
            <li><a href="#">Thread</a></li>
            <li><a href="#">Showcase</a></li>
      </ul>
   </nav>
  </header>
   )
    
}