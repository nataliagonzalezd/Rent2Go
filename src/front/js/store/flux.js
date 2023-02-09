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
            obtenerInfoProducts: () => {
                fetch(
                        "https://3001-nataliagonzalez-rent2go-bm7suybvi6c.ws-us86.gitpod.io/products"
                    )
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            products: data.results,
                        })
                    )
                    .catch((err) => console.error(err));
            },

            login: (email, password) => {
                fetch(
                        "https://3001-nataliagonzalez-rent2go-rh8igutux9n.ws-us85.gitpod.io/login", {
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
                        console.log(data.access_token);
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },
            addUser: (productName, description, price, url) => {
                fetch(
                        `https://3001-nataliagonzalez-rent2go-osfxu9dfdfb.ws-us85.gitpod.io/product`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: 2,
                                name: productName,
                                sku: 122,
                                description: description,
                                image: url,
                                price: price,
                                costumer_id: null,
                                category_id: null,
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