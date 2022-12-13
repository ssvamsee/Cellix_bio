import Desc from "./Desc";
import SearchPatents from "./Years/SearchPatents";
import Years from "./Years/Years";

function Patents(){
    return(
        <>
            <Desc></Desc>
            <SearchPatents></SearchPatents>
            <Years></Years>
        </>
    );
}
export default Patents;