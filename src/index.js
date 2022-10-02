import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store , persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews , useInitial } from "./dev";

const root = ReactDOM.createRoot ( document.getElementById ( "root" ) );
root.render (
    <Provider store={ store }>
        <PersistGate persistor={ persistor }>
            <DevSupport ComponentPreviews={ ComponentPreviews }
                        useInitialHook={ useInitial }
            >
                <App/>
            </DevSupport>
        </PersistGate>
    </Provider>
);
