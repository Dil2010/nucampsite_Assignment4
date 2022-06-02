// import { CAMPSITES } from "../../app/shared/CAMPSITES";
// import { createSlice } from "@reduxjs/toolkit";



// const initialState = {
//     campsitesArray: CAMPSITES,
// };

// const campsitesSlice = createSlice({
//     name: 'campsites',
//     initialState
// });

// export const campsitesReducer = campsitesSlice.reducer;


// export const selectAllCampsites = (state) => {
//     return state.campsites.campsitesArray;
// };

// export const selectCampsiteById = (id) => (state) => {
//     return state.campsites.campsitesArray.find(
//         (campsite) => campsite.id === parseInt(id)
//     );
// };

// export const selectFeaturedCampsite = (state) => {
//     return state.campsites.campsitesArray.find((campsite) => campsite.featured);
// };

import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

// export const fetchCampsites = createAsyncThunk(
//   'campsites/fetchCampsites',
//   async () => {
//       const response = await fetch(baseUrl + 'campsites');
//       if (!response.ok) {
//           return Promise.reject('Unable to fetch, status: ' + response.status);
//       }
//       const data = await response.json();
//       return data;
//   }
// );

const initialState = {
  campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random()*CAMPSITES.length)];
// }

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
      (campsite) => campsite.id === parseInt(id)
      );
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
