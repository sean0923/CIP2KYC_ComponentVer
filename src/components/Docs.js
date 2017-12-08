import React, { Component } from 'react';
import _ from 'lodash';

export default class Docs extends Component {

  constructor(props) {
    super(props);
    this.generateDocOptions = this.generateDocOptions.bind(this);
    this.printSubDocs = this.printSubDocs.bind(this);
  }

  generateDocOptions(docOptions) {
	  return docOptions.map((option, idx) => {
	    return this.printSubDocs(option, idx);
	  })
  }

	printSubDocs(option, idx) {
	  let subDocs = [];
	  let list;
	  option.physical_docs.forEach((doc) => {
	    subDocs.push(doc);
	  });
	  option.virtual_docs.forEach((doc) => {
	    subDocs.push(doc);
	  });
	  option.social_docs.forEach((doc) => {
	    subDocs.push(doc);
	  });
	  console.log(subDocs, 'subDocs');
	  if (subDocs.length > 0) {
	    return (
	    	<div key={idx}>
	    	<p>Possible KYC Combination</p>
	      <ul>
	        {subDocs.map((doc, liIndex) => {
	          return (
	            <li key={liIndex}>{doc}</li>
	          )
	        })}
	      </ul>
	      </div>
	    )
	  } else {
	    return <p key={idx}>No sub-documents required</p>
	  }
	}

  render() {
    let baseDocs;
    this.props.obj ? baseDocs = this.props.obj : baseDocs = null;
    return (
      <div>
      	{_.map(baseDocs, (doc, idx) => {
          let docOptions, subDocs = [];
          Array.isArray(doc) ? docOptions = doc : docOptions = doc.doc_options;
	      		return (
	      			<div key={idx}>
	            <p>{idx}. Base Document</p>
	            	{this.generateDocOptions(docOptions)}
	            </div>
	      		)
      	})}
      </div>
    )
  }
}
