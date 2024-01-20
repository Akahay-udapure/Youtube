import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import WatchPage from "./components/WatchPage";

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "/watch",
                element: <WatchPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={appStore}>
            <div className="App">
                <Header />
                <RouterProvider router={appRoute} />
            </div>
        </Provider>
    );
}

export default App;
