import { responseAdd } from "./actions";
import { MeTypes } from "./constants";
import "../../helpers/api/"

function* getAddNews ({payload: {params}}){
    console.log(params);
}