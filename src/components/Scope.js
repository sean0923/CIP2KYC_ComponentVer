import React, { Component } from 'react';

import _ from 'lodash';

import Flows from './Flows';
import Docs from './Docs';
import ModeNode from './ModeNode';

const DOCS = 'docs';
const FLOWS = 'flows';
const PERM_TITL = 'permission_title';
const PERM_TEXT = 'permission_description';
const MORE_NODE = 'more_node';

export default class Scope extends Component {
	// parent component: UserType ('BUISINESS' or 'PERSONAL')

	// this.props.str: ex)
	// SEND|RECEIVE|2000|DAILY
	// SEND|RECEIVE|10000|DAILY
	// ...

	// this.props.obj keys are listed above

	renderPermTitl(title) {
		return (
			<div key={title}>
				<p>{title}</p>
			</div>
		);
	}

	renderPermText(text) {
		return (
			<div key={text}>
				<p>{text}</p>
			</div>
		);
	}

	render() {
		let scopeObj;
		let scopeProps = [];
		if (this.props.obj) {
			scopeObj = this.props.obj;
			scopeProps = Object.keys(scopeObj);
		}
		return (
			<div>
				<h2>{this.props.str}</h2>
				{scopeProps.map((scopeProp, idx) => {
					switch (scopeProp) {
						case DOCS:
              return <Docs key={idx} str={DOCS} obj={scopeObj[DOCS]} />;
						case FLOWS:
              return <Flows key={idx} str={FLOWS} obj={scopeObj[FLOWS]} />;
						case PERM_TITL:
              return this.renderPermTitl(scopeObj[PERM_TITL]);
						case PERM_TEXT:
              return this.renderPermText(scopeObj[PERM_TEXT]);
						case MORE_NODE:
              return <ModeNode key={idx} str={MORE_NODE} obj={scopeObj[MORE_NODE]} />;
						default:
							break;
					}
				})}
			</div>
		);
	}
}
