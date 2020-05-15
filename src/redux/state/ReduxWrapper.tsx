import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/sagas'

//const createStore = () => createStore(reducers);
//const middleware = createSagaMiddleware()
//const store = createStore(reducers, applyMiddleware(middleware))
//middleware.run(rootSaga)

export default ({ element }) => {
    const middleware = createSagaMiddleware()
    const store = createStore(reducers, applyMiddleware(middleware))

    middleware.run(rootSaga)

    return (
        <Provider store={store}>
            <DndProvider backend={Backend}>{element}</DndProvider>
        </Provider>
    )
};