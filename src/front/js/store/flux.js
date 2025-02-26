const getState = ({ getStore, getActions, setStore }) => {
	const host = "https://playground.4geeks.com/contact";
	const user = "Rubenet8";

	return {
		store: {
			message: null,
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getContacts: async () => {
				const uri = `${host}/agendas/${user}/contacts`
				const options = { method: "GET" }
				const response = await fetch(uri, options)
				if (!response.ok) {
					console.log("Error", response.status, response.statusText)
					return
				}
				const data = await response.json()
				setStore({ contacts: data.contacts })
			},
			/* 
			Hacer el action postContact 
			Hacer el action putContact
			Hacer el action deleteContact
			*/
			exampleFunction: () => {getActions().changeColor(0, "green");},
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
