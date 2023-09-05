import { configureStore } from "@reduxjs/toolkit";
import { NetflixSlice } from "./netflixSlice"; // Import the NetflixSlice from the other file

export const store = configureStore({
  reducer: { netflix: NetflixSlice.reducer },
});
