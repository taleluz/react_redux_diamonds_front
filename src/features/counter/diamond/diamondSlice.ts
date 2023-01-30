import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import Diamond from '../models/Diamonds';
import { getDiamonds, 
         addDiamond, 
         updDiamond, 
         deleteDiamond,
         getMaxPrice, 
         getIdealCount, 
         getColorCount, 
         getMedianCarat, 
         getCutCaratAvg, 
         getColorPriceAvg, 
         getMeanPrice} from './diamondAPI';

export interface DiamondState {
    diamonds: Diamond [];
    maxPrice: [];
    meanPrice: [];
    idealCount: [];
    colorCount: [];
    medianCarat: [];
    cutCaratAvg: [];
    colorPriceAvg: [];
    updateFlag : boolean;
}

const initialState: DiamondState = {
    diamonds: [],
    updateFlag : false,
    maxPrice: [],
    meanPrice: [],
    idealCount: [],
    colorCount: [],
    medianCarat: [],
    cutCaratAvg: [],
    colorPriceAvg: []
};


export const getDiamondsAsync = createAsyncThunk(
    'diamond/getDiamonds',
    async () => {
        const response = await getDiamonds();
        return response.data;
    }
);

export const getMaxPriceAsync = createAsyncThunk(
    'diamond/getMaxPrice',
    async () => {
        const response = await getMaxPrice();
        return response.data;
    }
);


export const getMeanPriceAsync = createAsyncThunk(
    'diamond/getMeanPrice',
    async () => {
        const response = await getMeanPrice();
        return response.data;
    }
);

export const getIdealCountAsync = createAsyncThunk(
    'diamond/getIdealCount',
    async () => {
        const response = await getIdealCount ();
        return response.data;
    }
);

export const getColorCountAsync = createAsyncThunk(
    'diamond/getColorCount',
    async () => {
        const response = await getColorCount();
        return response.data;
    }
);

export const getMedianCaratAsync = createAsyncThunk(
    'diamond/getMedianCarat',
    async () => {
        const response = await getMedianCarat();
        return response.data;
    }
);

export const getCutCaratAvgAsync = createAsyncThunk(
    'diamond/getCutCaratAvg',
    async () => {
        const response = await getCutCaratAvg();
        return response.data;
    }
);

export const getColorPriceAvgAsync = createAsyncThunk(
    'diamond/getColorPriceAvg',
    async () => {
        const response = await getColorPriceAvg();
        return response.data;
    }
);



export const addDiamondAsync = createAsyncThunk(
    'diamond/addDiamond',
    async (new_diamond: Diamond) => {
        const response = await addDiamond(new_diamond);
        return response.data;
    }
);

export const updDiamondAsync = createAsyncThunk(
    'diamond/updDiamond',
    async (updated_diamond: Diamond) => {
        const response = await updDiamond(updated_diamond)
        return response.data;

    }
);

export const deleteDiamondAsync = createAsyncThunk(
    'diamond/deleteDiamond',
    async (id: Number) => {
        const response = await deleteDiamond(id);
        return response.data;
    }
);

export const diamondSlice = createSlice({
    name: 'diamond',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDiamondsAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                //   state.status = 'idle';
                  state.diamonds = action.payload;
                //   state.updateFlag = !state.updateFlag;
            }) .addCase(addDiamondAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                //   state.status = 'idle';
                  state.diamonds.push( action.payload);
                  state.updateFlag = !state.updateFlag;
            }) .addCase(updDiamondAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                //   state.status = 'idle';
                  state.updateFlag =! state.updateFlag;
            }).addCase(deleteDiamondAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                //   state.status = 'idle';
                  state.diamonds.filter(d => d.id != action.payload);
                  state.updateFlag =! state.updateFlag;
            }).addCase(getMaxPriceAsync.fulfilled, (state, action) => {
                state.maxPrice = action.payload;
            })
            .addCase(getMeanPriceAsync.fulfilled, (state, action) => {
                state.meanPrice = action.payload;
            })
            .addCase(getIdealCountAsync.fulfilled, (state, action) => {
                state.idealCount = action.payload;
            })
            .addCase(getColorCountAsync.fulfilled, (state, action) => {
                state.colorCount = action.payload;
            })
            .addCase(getMedianCaratAsync.fulfilled, (state, action) => {
                state.medianCarat = action.payload;
            })
            .addCase(getCutCaratAvgAsync.fulfilled, (state, action) => {
                state.cutCaratAvg = action.payload;
            })
            .addCase(getColorPriceAvgAsync.fulfilled, (state, action) => {
                state.colorPriceAvg = action.payload;
            });
    }
});
export const { } = diamondSlice.actions;
export const selectDiamonds = (state: RootState) => state.diamond.diamonds;
export const selectMaxPrice = (state: RootState) => state.diamond.maxPrice;
export const selectUpdate = (state: RootState) => state.diamond.updateFlag;
export const selectMeanPrice = (state: RootState) => state.diamond.meanPrice;
export const selectIdealCount = (state: RootState) => state.diamond.idealCount;
export const selectColorCount = (state: RootState) => state.diamond.colorCount;
export const selectMedianCarat = (state: RootState) => state.diamond.medianCarat;
export const selectCutCaratAvg = (state: RootState) => state.diamond.cutCaratAvg;
export const selectColorPriceAvg = (state: RootState) => state.diamond.colorPriceAvg
export default diamondSlice.reducer;
