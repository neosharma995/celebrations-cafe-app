import Craving from "../../components/home/Craving";
import NewItems from "../../components/home/NewItems";
import Offers from "../../components/home/Offers";
import OurFavorites from "../../components/home/OurFavorites";
import PopularVarieties from "../../components/home/PopularVarieties";
import SearchBox from "../../components/home/SearchBox";

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

