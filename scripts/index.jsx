const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Profile />
                <Navigator />
            </div>
        </div>
    )
};

root.render(<App />);