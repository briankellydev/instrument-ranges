import { FAMILIES } from "../consts/families";

export interface Instrument {
    name: string;
    imgUrl: string;
    family: string;
    rangeBottom: string;
    rangeTop: string;
    key: string;
}