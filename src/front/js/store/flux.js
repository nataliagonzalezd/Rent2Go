let url = "https://3001-nataliagonzalez-rent2go-6ffcmgc37rt.ws-us86.gitpod.io";

const getState = ({
        getStore,
        getActions,
        setStore
    }) => {
        return {
            store: {
                message: null,
                demo: [{
                        title: "FIRST",
                        background: "white",
                        initial: "white",
                    },
                    {
                        title: "SECOND",
                        background: "white",
                        initial: "white",
                    },
                ],
                products: [],
            },
            actions: {
                getProductsDetails: () => {
                    fetch(url + "/products", {
                            method: "GET",
                        })
                        .then((res) => res.json())
                        .then((data) =>
                            setStore({
                                products: data,
                            })
                        )

                        .catch((err) => console.error(err));
                },

                register: (email, username, password) => {
                    fetch(
                            "https://3001-nataliagonzalez-rent2go-6ffcmgc37rt.ws-us86.gitpod.io/register", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    username: username,
                                    email: email,
                                    password: password,
                                }),
                            }
                        )
                        .then((response) => {
                            console.log(response.status);
                            if (response.status === 200) {
                                setStore({
                                    auth: true,
                                });
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((err) => console.log(err));
                },
                login: (email, password) => {
                    fetch(
                            "https://3001-nataliagonzalez-rent2go-6ffcmgc37rt.ws-us86.gitpod.io/login", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: email,
                                    password: password,
                                }),
                            }
                        )
                        .then((response) => {
                            console.log(response.status);
                            if (response.status === 200) {
                                setStore({
                                    auth: true,
                                });
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data);
                            if (data.msg === "Bad email or password") {
                                alert(data.msg);
                            }
                            localStorage.setItem("token", data.access_token);
                        })
                        .catch((err) => console.log(err));
                },
                logout: () => {
                    localStorage.removeItem("token");
                    setStore({
                        auth: false,
                    });
                },
                addUser: (productName, description, price, url) => {
                    fetch(
                            `https://3001-nataliagonzalez-rent2go-6ffcmgc37rt.ws-us86.gitpod.io/product`, {
                                process.env.BACKEND_URL + "/api/product",
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        name: productName,
                                        sku: 122,
                                        description: description,
                                        image: url,
                                        price: parseInt(price),
                                        costumer_id: 1,
                                        category_id: 1,
                                    }),
                                }
                            )
                            .then((response) => response.json())
                            .then((data) => console.log(data));
                        },
                        getMessage: async () => {
                                try {
                                    // fetching data from the backend
                                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                                    const data = await resp.json();
                                    setStore({
                                        message: data.message,
                                    });
                                    // don't forget to return something, that is how the async resolves
                                    return data;
                                } catch (error) {
                                    console.log("Error loading message from backend", error);
                                }
                            },
                            changeColor: (index, color) => {
                                //get the store
                                const store = getStore();

                                //we have to loop the entire demo array to look for the respective index
                                //and change its color
                                const demo = store.demo.map((elm, i) => {
                                    if (i === index) elm.background = color;
                                    return elm;
                                });

                                //reset the global store
                                setStore({
                                    demo: demo,
                                });
                            },
                },
            };
        };

        export default getState;