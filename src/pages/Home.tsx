import Craving from "../components/Craving";
import NewItems from "../components/NewItems";
import Offers from "../components/Offers";
import OurFavorites from "../components/OurFavorites";
import PopularVarieties from "../components/PopularVarieties";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
     <>
     <SearchBox/>
     <Offers/>
     <Craving/>
     <PopularVarieties/>
     <NewItems/>
     <OurFavorites/>
     </>
  )
}

