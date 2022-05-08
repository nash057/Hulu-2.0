import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image"
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto">
        {/* <h1>This is a Header</h1> */}
        <div className="flex flex-grow justify-evenly max-w-2xl ">
            <HeaderItem title='HOME' Icon={HomeIcon}/> 
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/> 
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/> 
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/> 
            <HeaderItem title='SEARCH' Icon={SearchIcon}/> 
            <HeaderItem title='ACCOUNT' Icon={UserIcon}/> 

        </div>
        <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6" 
            width={200} 
            height={100} 
        />
    </header>
  )

}

export default Header

//Lazy loading: Loading of images when they are scrolled onto, i.e do not load all the images at once, but load them when scrolled to their position.

//This design is mobile first responsive, i.e by default the styles are going to be for the small screen and then they are going to respond to respective screen size and their applied styles.