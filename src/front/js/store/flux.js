import axios from "axios";
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            products: [],
            profile: [],
            productsCart: [],
            productsDetail: [],
            productsFavorites: [],
            categoryproducts: [],
            orderitem: [],
            category: [],
            mercadoPago: {},
            costoTotalStore: null,
            auth: false,
        },
        actions: {
            // costo total para el precio
            costoTotalFlux: (costoTotal) => {
                setStore({
                    costoTotalStore: costoTotal,
                });
                console.log("funciona ");
            },

            getProductsDetails: () => {
                fetch(process.env.BACKEND_URL + "/api/products", {
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

            getProductsDetail: (costumer_id, id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/product/detail/" +
                        id, {
                            method: "GET",
                        }
                    )
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            productsDetail: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            getOrderItem: (order_item_id) => {
                fetch(process.env.BACKEND_URL + "/api/order_item/" + order_item_id, {
                        method: "GET",
                    })
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            orderitem: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },

            delProduct: (costumer_id, id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/product/" +
                        id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            delAllProducts: (costumer_id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/products", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            //////////////////////////////// CARRITO//////////////////////////////////
            getCart: (costumer_id) => {
                fetch(process.env.BACKEND_URL + "/api/cart/" + costumer_id, {
                        method: "GET",
                    })
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            productsCart: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },

            addCart: (costumer_id, id, quantity) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/cart/" +
                        id, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                quantity: quantity,
                            }),
                        }
                    )
                    .then((response) => {
                        // if (response.status === 200) {
                        //     alert("Producto agregado al carrito");
                        // } else if (response.status === 400) {
                        //     console.log("Este producto ya existe");
                        // }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            delCart: (costumer_id, id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/cart/" +
                        id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            delAllCart: (costumer_id) => {
                fetch(
                        process.env.BACKEND_URL + "/api/costumer/" + costumer_id + "/cart", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },
            //////////////////////////////////// Costumer ///////////////////////////////////////////////
            register: (email, username, password) => {
                fetch(process.env.BACKEND_URL + "/api/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password,
                        }),
                    })
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
                fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    })
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
                        localStorage.setItem("costumer_id", data.costumer_id);
                    })
                    .catch((err) => console.log(err));
            },

            logout: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false,
                });
            },

            validToken: async () => {
                console.log("funciona");
                let tokenAcceso = localStorage.getItem("token");
                console.log(tokenAcceso);
                try {
                    const response = await fetch(
                        process.env.BACKEND_URL + "/api/valid-token", {
                            headers: {
                                Authorization: "Bearer " + tokenAcceso,
                            },
                        }
                    );
                    const data = await response.json();
                    console.log(response);
                    // console.log(response.status);
                    console.log(data);
                    setStore({
                        auth: data.status,
                    });
                    return;
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        setStore({
                            auth: false,
                        });
                    }
                    return false;
                }
            },

            addProduct: (productName, description, price, urls, url2, url3, url4) => {
                fetch(process.env.BACKEND_URL + "/api/product", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: productName,
                            description: description,
                            images: urls,
                            price: parseInt(price),
                            costumer_id: 1,
                            category_id: 1,
                        }),
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data));
            },
            addInfo: (
                id,
                name,
                lastName,
                address,
                role,
                phone,
                email,
                username,
                image,
                password
            ) => {
                fetch(process.env.BACKEND_URL + "/api/editprofile/" + id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: name,
                            email: email,
                            username: username,
                            password: "password",
                            lastName: lastName,
                            address: address,
                            role: role,
                            phone: phone,
                            image: image,
                        }),
                    })
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

            getProfile: () => {
                fetch(process.env.BACKEND_URL + "/api/editprofile", {
                        method: "GET",
                    })
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            profile: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            ////////////////////////////////////// FAVORITOS /////////////////////////////////////
            getFavorites: (costumer_id) => {
                fetch(process.env.BACKEND_URL + "/api/favorites/" + costumer_id, {
                        method: "GET",
                    })
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            productsFavorites: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },

            addFavorites: (costumer_id, id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/favorites/" +
                        id, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        // if (response.status === 200) {
                        //     alert("Producto agregado a favoritos");
                        // } else if (response.status === 400) {
                        //     console.log("Este producto ya existe");
                        // }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            delFavorites: (costumer_id, id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/favorites/" +
                        id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            delAllFavorites: (costumer_id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/costumer/" +
                        costumer_id +
                        "/favorites", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },
            /////////////////////////////////////////////////////////////////////////////////////////////
            // Precio productos ---------------------------------------------
            PrecioTotal: async (total) => {},
            // MERCADO PAGO ---------------------------------------------
            pagoMercadoPago: async (total) => {
                try {
                    const response = await axios.post(
                        process.env.BACKEND_URL + "/api/preference", {
                            total: total,
                        }
                    );
                    console.log(response.data);
                    setStore({
                        mercadoPago: response.data,
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            updateProduct: (id, name, description, price) => {
                fetch(process.env.BACKEND_URL + "/api/product/" + id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: name,
                            description: description,
                            price: price,
                        }),
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("Error al actualizar el producto.");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        return data;
                    })
                    .catch((error) => {
                        console.log(error.message);
                        throw error;
                    });
            },

            getProductsCategory: (category_id) => {
                fetch(
                        process.env.BACKEND_URL +
                        "/api/category/" +
                        category_id +
                        "/products/", {
                            method: "GET",
                        }
                    )
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            categoryproducts: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            getCategory: () => {
                fetch(process.env.BACKEND_URL + "/api/category/", {
                        method: "GET",
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setStore({
                            category: data,
                        });
                    })
                    .catch((err) => console.error(err));
            },
        },
    };
};
export default getState;