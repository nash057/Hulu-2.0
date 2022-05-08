// import Nav from "./Nav";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
// import Image from "next/dist/client/image";
// import Header from "./Header";


// ---------------------This was the code without FlipMove animation of React------------------------------------------------------------------------------------------
function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center"> {/*Inorder to make our own breakpoints, go to tailwind.config.js and add your own breakpoint screen size, under "extend" */}
        {results.map((result) => (
            <Thumbnail key={result.id} result={result} />
        ))}
    </div> 
  );
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// To use the FlipMove effect, we first install the dependecies, by "yarn add react-flip-move"
// function Results({ results }) {
//     return (
//       <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"> {/*Inorder to make our own breakpoints, go to tailwind.config.js and add your own breakpoint screen size, under "extend" */}
//           {results.map((result) => (
//               <Thumbnail key={result.id} result={result} />
//           ))}
//       </FlipMove> 
//     );
// }
export default Results;