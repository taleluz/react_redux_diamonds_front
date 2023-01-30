import Diamond from '../models/Diamonds';
import axios from "axios";
const MY_SERVER = "http://127.0.0.1:5000/"

export function getDiamonds() {
    return new Promise<{ data: Diamond[] }>((resolve) =>
        axios.get(MY_SERVER+ "diamonds").then(res => resolve({ data: res.data }))
    );
}

export function getMaxPrice() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "max").then(res => resolve({ data: res.data }))
    );
    }
    
    export function getMeanPrice() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "mean").then(res => resolve({ data: res.data}))
    );
    }
    
    export function getIdealCount() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "ideal").then(res => resolve({ data: res.data}))
    );
    }
    
    export function getColorCount() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "color").then(res => resolve({ data: res.data}))
    );
    }
    
    export function getMedianCarat() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "median").then(res => resolve({ data: res.data}))
    );
    }
    
    export function getCutCaratAvg() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "cut_avg").then(res => resolve({ data: res.data}))
    );
    }
    
    export function getColorPriceAvg() {
    return new Promise<{ data: [] }>((resolve) =>
    axios.get(MY_SERVER + "color_avg").then(res => resolve({ data: res.data}))
    );
    }

export function addDiamond(new_diamond: Diamond) {
    return new Promise<{ data: Diamond }>((resolve) =>
        axios.post(MY_SERVER + "diamonds" , new_diamond).then(res => resolve({ data: new_diamond }))
    );
}


export function updDiamond(updated_diamond: Diamond) {
    return new Promise<{ data: Diamond }>((resolve) =>
        axios.put(MY_SERVER +"dia",updated_diamond).then(res => resolve({ data:updated_diamond }))
    );
}



export function deleteDiamond(id: Number) {
    return new Promise<{ data: Number }>((resolve) =>
        axios.delete(MY_SERVER + "diam/"+id).then(res => resolve({ data: id }))
    );
}