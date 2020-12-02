import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import './displayAnswers.css';

const GET_USER_INFO = gql`
	{
		answer {
			id
			age
			gender
			pro_domain
		}
	}`;

const DisplayAnswers = props => {
	return (
		<div className="list-type5">
			<ol>
			{props.data?.answer?.map(p => (
				<li key={ p.id }>
					<p>{ p.age } { p.gender } { p.pro_domain }</p>
				</li>
			))}
			</ol>
		</div>
	);
};

export default graphql(GET_USER_INFO)(DisplayAnswers);
