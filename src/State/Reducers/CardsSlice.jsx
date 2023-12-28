import { createSlice, current } from "@reduxjs/toolkit"

const initialState={
    cards:[
        {name:'Bane',src:'https://romaleks.github.io/Memory-Card-Game/static/media/bane.7697ed350ed52bfcbab7.png',id:1},
        {name:'Lina',src:'https://romaleks.github.io/Memory-Card-Game/static/media/lina.a1b4ecd1ad6b5ea60e5c.png',id:2},
        {name:'Chaos Knight',src:'https://romaleks.github.io/Memory-Card-Game/static/media/chaos_knight.3a0a1500405cea5d3ead.png',id:3},
        {name:'Ember Spirit',src:'https://romaleks.github.io/Memory-Card-Game/static/media/ember_spirit.80113a4dd7a28b25133f.png',id:4},
        {name:'Necrophos',src:'https://romaleks.github.io/Memory-Card-Game/static/media/necrophos.c2a63a3cd69d26de1c0b.png',id:5},
        {name:'Wraith King',src:'https://romaleks.github.io/Memory-Card-Game/static/media/wraith_king.a889b2b27f2867ecd15e.png',id:6},
        {name:'Lion',src:'https://romaleks.github.io/Memory-Card-Game/static/media/lion.fa554fbf33aa4ce7d289.png',id:7},
        {name:'Faceless Void',src:'https://romaleks.github.io/Memory-Card-Game/static/media/faceless_void.30a6b3e8a2838f9c20dc.png',id:8},
        {name:'Obsidian Destroyer',src:'https://romaleks.github.io/Memory-Card-Game/static/media/obsidian_destroyer.e916993814e6356618ab.png',id:9},
        {name:'Abaddon',src:'https://romaleks.github.io/Memory-Card-Game/static/media/abaddon.f22c29baee37901c042a.png',id:10},
    ],
    clickedCards: [
    ],
    currentScore:0,
    bestScore:0
}

const CardsSlice=createSlice({
    name:'cards',
    initialState,
    reducers:{
        ReRender:(state)=>{
            let rand_num=~~(Math.random()*10)
            for (let index = 0; index < state.cards.length; index++){
                (rand_num===index?~~(Math.random()*(10-index+1)):rand_num);
                let temp=state.cards[rand_num];
                state.cards[rand_num]=state.cards[index];
                state.cards[index]=temp;
            }
        },
        choseCard: (state,action) => {
            state.clickedCards.push(action.payload);
        },
        handleCurrentScore:(state)=>{
            const newClicked=new Set(state.clickedCards);
            let temp=state.currentScore;
            if(newClicked.size===state.clickedCards.length){
                state.currentScore+=1;
                temp=state.currentScore;
            }
            else{
                if(state.bestScore>=temp);
                else
                    state.bestScore=temp;
                state.currentScore=0;
                state.clickedCards=[];
            }
        }
    }
})

export const {ReRender,choseCard,handleCurrentScore} =CardsSlice.actions;

export default CardsSlice.reducer;