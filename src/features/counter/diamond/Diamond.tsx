import {selectDiamonds,
    selectUpdate,
    selectColorPriceAvg,
    selectMeanPrice,
    selectColorCount,
    selectMedianCarat,
    selectCutCaratAvg,
    getMaxPriceAsync, 
    getMeanPriceAsync, 
    getIdealCountAsync, 
    getColorCountAsync, 
    getMedianCaratAsync, 
    getCutCaratAvgAsync, 
    getColorPriceAvgAsync,
    getDiamondsAsync,
    selectMaxPrice,
    selectIdealCount
} from '../diamond/diamondSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import React, { useEffect} from 'react';

export function Diamond() {
    const diamonds = useAppSelector(selectDiamonds);
    const updateFlag = useAppSelector(selectUpdate);
    const colorPriceAvg = useAppSelector(selectColorPriceAvg);
    const idealCount = useAppSelector(selectIdealCount);
    const maxPrice = useAppSelector(selectMaxPrice);
    const meanPrice = useAppSelector(selectMeanPrice);
    const colorCount = useAppSelector(selectColorCount);
    const medianCarat = useAppSelector(selectMedianCarat);
    const cutCaratAvg = useAppSelector(selectCutCaratAvg);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((getDiamondsAsync()))
    }, [updateFlag])

    useEffect(() => {
        console.table(diamonds)
      }, [diamonds.length])

    return (
        <div>
            <h3 style={{backgroundColor:"blue"}}>Diamonds Facts </h3>
            <button onClick={() => dispatch(getMaxPriceAsync())}>Show max price </button>
            {maxPrice.map((maxPrice, i) => <div>{maxPrice}</div>)}
            <br></br>
            <button onClick={() => dispatch(getMeanPriceAsync())}>Show Mean price </button>
            {meanPrice.map((meanPrice, i) => <div>{meanPrice}</div>)}
            <br></br>
            <button onClick={() => dispatch(getIdealCountAsync())}>Show Ideal Count </button>
            {idealCount.map((idealCount, i) => <div>{idealCount}</div>)}
            <br></br>
            <button onClick={() => dispatch(getColorCountAsync())}>Show Color Count </button>
            {colorCount.map((colorCount, i) => <div>{colorCount}</div>)}
            <br></br>
            <button onClick={() => dispatch(getMedianCaratAsync())}>Show Median Carat </button>
            {medianCarat.map((medianCarat, i) => <div>{medianCarat}</div>)}
            <br></br>
            <button onClick={() => dispatch(getCutCaratAvgAsync())}>Show Carat Average</button>
            {cutCaratAvg.map((cutCaratAvg, i) => <div>{cutCaratAvg}</div>)}
            <br></br>
            <button onClick={() => dispatch(getColorPriceAvgAsync())}>Show Color Price Avg</button>
            {colorPriceAvg.map((colorPriceAvg, i) => <div>{colorPriceAvg}</div>)}
            <hr></hr>
        </div>
    );
}
