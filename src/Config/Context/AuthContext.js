import React from "react";

const RootContext = React.createContext();
const Provider = RootContext.Provider;

export const GlobalProvider = (Children) => {
	return (
		class ParentComp extends React.Component {
			state = {
				isLogged: false,
				dataUser: undefined,
				nama: undefined,
				nim: undefined,
				prodi: undefined,
				link: undefined,
				token: undefined,
				registered: false,
				status: undefined,
				loading: true,
				kondisi: "filafest",
			};
			constructor() {
				super();
				this.login = this.login.bind(this);
				this.logout = this.logout.bind(this);
				this.setStatus = this.setStatus.bind(this);
				this.setLoading = this.setLoading.bind(this);
				this.setKondisi = this.setKondisi.bind(this);
			}
			//   setInfo(){
			//       this.setState({nama:nama});
			//       this.setState({nim:nim});
			//       this.setState({prodi:prodi});
			//       console.log(this.state)
			//   }

			logout() {
				this.setState({ isLogged: false });
				this.setState({ dataUser: undefined });
				this.setState({ nim: undefined });
				this.setState({ prodi: undefined });
				this.setState({ link: undefined });
				// this.setState({ token: undefined });
			}
			setStatus = (status) => {
				this.setState({ status: status });
				// console.log(this.state.status)
			}

			setLoading = (loading) => {
				this.setState({ loading: loading });
				// console.log(this.state.loading)
			}

			setKondisi = (x) => {
				this.setState({ kondisi: x })
			}

			login = async (nim, pass) => {
				const body = {
					nim: nim,
					password: pass
				};
				try {
					const res = await fetch("https://cors-anywhere.herokuapp.com/https://bemfilkom.ub.ac.id/secure/api/auth/", {
						method: "POST",
						headers: {
							"content-type": "application/json"
						},
						body: JSON.stringify(body)
					});
					const result = res;
					const data = await res.json();
					console.log(data);
					if (!result.ok) {
						return false;
					} else {
						this.setState({ isLogged: true });
						this.setState({ nim: data.data.nim });
						this.setState({ nama: data.data.nama });
						this.setState({ prodi: data.data.prodi });
						// this.setState({ token: data.token });
						// console.log(this.state)
						// return { "status": true, "token": data.token };
						return { "status": true };
					}

				} catch (error) {
					console.log("Konsol error : ", error);
				}
			};

			render() {
				return (
					<Provider
						value={{
							isLogged: this.state.isLogged,
							dataUser: this.state.dataUser,
							nama: this.state.nama,
							nim: this.state.nim,
							prodi: this.state.prodi,
							login: this.login,
							link: this.state.link,
							logout: this.logout,
							token: this.state.token,
							status: this.state.status,
							setStatus: this.setStatus,
							setLoading: this.setLoading,
							kondisi: this.state.kondisi,
							setKondisi: this.setKondisi
						}}
					>
						<Children {...this.props} />
					</Provider>
				);
			}
		}
	);
}

//Consumer
const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children1) => {
	return (
		class ParentConsumer extends React.Component {
			render() {
				return (
					<Consumer>
						{
							value => {
								return (
									<Children1 {...this.props} {...value} />
								)
							}
						}
					</Consumer>
				)
			}
		}
	);
}

export function GlobalConsumerFunction(Children2) {
	return function ParentConsumer1(props) {
		return (
			<Consumer>
				{ value => <Children2 {...props} {...value} /> }
			</Consumer>
		)
	}
}