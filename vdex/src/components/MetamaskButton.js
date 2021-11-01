import { useMoralis } from 'react-moralis';

function MetamaskButton() {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();

    if (!isAuthenticated) {
        return(
            <div>
                <button
                    className="tip-button"
                    href={"https://metamask.io/"}
                    onClick={() =>
                        authenticate({
                            signingMessage: "Signed in!",
                            onSuccess: () => console.log("Success on metamask button"),
                            onError: () => console.log("Error signing in, please try again"),
                        })
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="/metamask_button.png"
                    alt="Metamask"
                    style={{ width: "200px" }}
                    />
                </button>
            </div>
        );
    }

    return(
        <div>
            <h1>Welcome {user.get("username")}</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default MetamaskButton