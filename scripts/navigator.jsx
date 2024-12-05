function Navigator() {
    const [active, setActive] = React.useState(0);

    const options = [
        <><i className="bi bi-substack"></i> Blog</>,
        <><i className="bi bi-boombox-fill"></i> Projects</>,
        <><i className="bi bi-chat-left-heart-fill"></i> My cats</>,
    ];

    const navMap = [
        <Blog />,
        <Projects />,
        <Cats />,
    ];

    return (
        <div className="col-lg-6 pb-5 right-bar">
            <div className="navigator mt-4">
                <ul className="nav h5 d-flex justify-content-center flex-wrap">
                    {
                        options.map((name, index) => (
                            <li key={index} className="nav-item" onClick={() => setActive(index)} >
                                <a
                                    className={"nav-link text-black" + (index === active ? " active" : "")}
                                    role="button"
                                >
                                    { name }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="container mt-5">
                { navMap[active] }
            </div>
        </div>
    )
}
