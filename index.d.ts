export type Document = {
  kind: 'Document';
  definitions: (OperationDefinition | FragmentDefinition)[];
};

export type Name = {
  kind: 'Name';
  value: 'String' | 'Float' | 'Int' | string;
};

export type Variable = {
  kind: 'Variable';
  name: Name;
};

export type NonNullType = {
  kind: 'NonNullType';
  type: NamedType;
};

export type NamedType = {
  kind: 'NamedType';
  name: Name;
}

export type FragmentDefinition = {
  kind: 'FragmentDefinition';
  name: Name;
  typeCondition: NamedType;
  directives: Directive[];
  selectionSet: SelectionSet[];
};

export type OperationDefinition = {
  kind: 'OperationDefinition',
  name?: string;
  operation: 'query' | 'mutation',
  variableDefinitions: VariableDefinition[],
  directives: Directive[],
  selectionSet: SelectionSet[],
};

export type Value = {
  kind: 'FloatValue' | 'IntValue' | 'StringValue' | 'Variable';
  value: number | string;
  block?: boolean;
}

export type VariableDefinition = {
  kind: 'VariableDefinition';
  variable: Variable;
  type: NamedType | NonNullType;
  defaultValue?: Value;
  directive: Directive[];
};

export type Argument = {
  kind: 'Argument';
  name: Name;
  value: Value;
}

export type Directive = {
  kind: 'Directive';
  name: Name;
  arguments: Argument[];
};

export type SelectionSet = {
  kind: 'SelectionSet';
  selections: Field | InlineFragment[];
};

export type Field = {
  kind: 'Field';
  alias?: string;
  name: Name;
  arguments: Argument[];
  selectionSet?: SelectionSet;
};

export type InlineFragment = {
  kind: 'InlineFragment';
  name: Name;
  typeCondition: NamedType;
  directives: Directive[];
  selectionSet: SelectionSet[];
}