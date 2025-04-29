import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";
import { PhotoProvider } from "react-photo-view";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PhotoProvider>
      <Provider store={store}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </Provider>
    </PhotoProvider>
  </StrictMode>
  //
);
