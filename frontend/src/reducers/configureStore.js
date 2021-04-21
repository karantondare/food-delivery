import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { store, persistor };
