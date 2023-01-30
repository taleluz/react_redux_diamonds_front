import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import Diamond from '../models/Diamonds';
import { getDiamondsAsync, selectDiamonds, addDiamondAsync, updDiamondAsync, deleteDiamondAsync, selectUpdate } from './diamondSlice';



export function ShowQus() {
    const diamonds = useAppSelector(selectDiamonds);
    const updFlag = useAppSelector(selectUpdate);

    const dispatch = useAppDispatch();
    const [carat, setCarat] = useState(0);
    const [cut, setCut] = useState("");
    const [clarity, setClarity] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState(0);
    const [depth, setDepth] = useState(0);
    const [table, setTable] = useState(0);
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [z, setz] = useState(0);
    const [search, setSearch] = useState("");
    const [newPrice, setnewPrice] = useState(0)


    const buildDiamond = () => {
        const temp_diamond: Diamond = {
            carat: carat,
            clarity: clarity,
            color: color,
            cut: cut,
            depth: depth,
            price: price,
            table: table,
            x: x,
            y: y,
            z: z
        }
        dispatch(addDiamondAsync(temp_diamond))
    }

    const upd_diamond = (
        oldID: Number,
        oldcarat: Number,
        oldclarity: string,
        oldcolor: string,
        oldcut: string,
        olddepth: Number,
        oldtable: Number,
        oldx: Number,
        oldy: Number,
        oldz: Number) => {

        const temp_diamond: Diamond = {
            id: oldID,
            clarity: oldclarity,
            color: oldcolor,
            carat: oldcarat,
            cut: oldcut,
            depth: olddepth,
            table: oldtable,
            x: oldx,
            y: oldy,
            z: oldz,
            price: newPrice
        }
        dispatch(updDiamondAsync(temp_diamond))
    }
    // const updDiamond = (id: string) => {
    //     const tempDiamond: DiamondModel = {
    //         id,
    //         carat: carat,
    //         cut: cut,
    //         color: color,
    //         clarity: clarity,
    //         price: price,
    //         depth: depth,
    //         table: table,
    //         x: x,
    //         y: y,
    //         z: z
    //     };
    //     dispatch(updDiamondAsync(tempDiamond));
    // };
    // const deleteDiamond = (id: string) => {
    //     dispatch(deleteDiamondAsync(Number(id)));
    // };


    useEffect(() => {

    }, [updFlag, diamonds.length])

    useEffect(() => {
        console.table(diamonds)
    }, [diamonds.length])

    // useEffect(() => {
    //     dispatch(getDiamondsAsync());
    // }, [updFlag]);


    return (
        <div>
            <h3 style={{ backgroundColor: "red" }}>Diamonds</h3>
            Search: <input onChange={(e) => setSearch(e.target.value)} placeholder="search by cut" />
            <br></br>
            Update the price: <input onChange={(e) => setnewPrice(+ e.target.value)}></input>
            <br></br>

            carat: <input onChange={(e) => setCarat(+e.target.value)} type="number" />
            {" "}
            cut: <input onChange={(e) => setCut(e.target.value)} />
            <br></br>
            clarity: <input onChange={(e) => setClarity(e.target.value)} />
            {" "}
            color: <input onChange={(e) => setColor(e.target.value)} />
            <br></br>
            depth: <input onChange={(e) => setDepth(+e.target.value)} type="number" />
            {" "}
            table: <input onChange={(e) => setTable(+e.target.value)} type="number" />
            <br></br>
            price: <input onChange={(e) => setPrice(+e.target.value)} type="number" />
            {" "}
            x: <input onChange={(e) => setx(+e.target.value)} type="number" />
            <br></br>
            y: <input onChange={(e) => sety(+e.target.value)} type="number" />
            {" "}
            z: <input onChange={(e) => setz(+e.target.value)} type="number" />
            <br></br>
            <button onClick={() => buildDiamond()}>Add A New Diamond</button>
            {diamonds.filter(d => d.cut.includes(search)).map((diam, i) =>
                <div key={i}>
                    <>
                        carat: {diam.carat}, {" "} cut:{diam.cut}, {" "}color:{diam.color}<br />
                        clarity:{diam.clarity}, {" "}depth:{diam.depth}<br />
                        table:{diam.table}, {" "} price:{diam.price}<br />
                        x:{diam.x},
                        y:{diam.y},
                        z:{diam.z}<br />
                        id : {diam.id}
                        <button onClick={() => upd_diamond(
                            diam.id || -1,
                            diam.carat,
                            diam.clarity,
                            diam.color,
                            diam.cut,
                            diam.depth,
                            diam.table,
                            diam.x,
                            diam.y,
                            diam.z)}>Update</button>
                        <button onClick={() => dispatch(deleteDiamondAsync(diam.id || -1))}>Delete</button>
                        {/* <button onClick={() => console.log(diam.id )}>Delete</button> */}
                    </>
                </div>)}

            {/* <button onClick={() => dispatch(getDiamondsAsync())}> Show me all the diamonds </button> */}


            <hr></hr>
            {/* {diamonds.filter(diamond => diamond.cut.includes(search)).map((diamond, i) =>
                <div key={i}>
                    <>


                        Cut: {diamond.cut},
                        Carat: {diamond.carat},
                        Clarity: {diamond.clarity},
                        Color: {diamond.color},
                        Depth: {diamond.depth},
                        Table: {diamond.table},
                        Price: {diamond.price},
                        X: {diamond.x},
                        Y: {diamond.y},
                        Z:{diamond.z}

                    </>
                    <button onClick={() => deleteDiamond(diamond.id!)}>Delete</button> */}

            {/* <button onClick={() => {
                        setCurrentId(diamond.id!);
                        updDiamond(diamond.id!);
                    }}>Update</button> */}

            {/* </div>)} */}
        </div>
    );
}


