import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
    const router = useRouter();
//Here we loop through each of the requests, we get the key and the value which is an Object, then we destructure this object to get the title and the url
  return ( 
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"> {/*Here we install tailwind-scrollbar-hide to hide the scroll-bar and also add the require plugin into the tailwind.config.js file */}
            {Object.entries(requests).map(([key, { title,url }]) => (
                <h2 
                    key={key}
                    onClick={() => router.push(`/?genre=${key}`)}   
                    className="last:pr-24 cursor-pointer transition 
                    duration-100 transform hover:scale-125 hover:text-white
                    active:text-red-500"
                >
                    {title}
                </h2>
            ))}  
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-
        [#06202a]  h-10 w-1/12" />
    </nav>
   ); 
}

export default Nav