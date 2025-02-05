/**
 * @generated SignedSource<<a7a7c6e5732b4adfba4b4d68897275c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type srcIndexQuery$variables = Record<PropertyKey, never>;
export type srcIndexQuery$data = {
  readonly viewer: {
    readonly name: string;
  };
};
export type srcIndexQuery = {
  response: srcIndexQuery$data;
  variables: srcIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcIndexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcIndexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "03b2a5de95462594a53c42c88dc34957",
    "id": null,
    "metadata": {},
    "name": "srcIndexQuery",
    "operationKind": "query",
    "text": "query srcIndexQuery {\n  viewer {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "fcbc333b6c23d7678c1c915a70fec1c1";

export default node;
