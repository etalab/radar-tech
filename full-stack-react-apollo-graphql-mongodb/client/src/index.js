import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from './App'
// connect with backend
const client = new ApolloClient({
	uri: "http://localhost:3001/graphql"
});

const app = (<ApolloProvider client={client}>
		<App />
	</ApolloProvider>);

ReactDOM.render(app, document.getElementById("root"));