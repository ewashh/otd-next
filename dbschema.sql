CREATE TABLE category(
  id UUID NOT NULL,
  name VARCHAR(30) NOT NULL,
  color VARCHAR(30),
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id)
);

CREATE TABLE person(
  id UUID NOT NULL,
  name VARCHAR(30) NOT NULL,
  external_ref VARCHAR(30) NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id)
);

CREATE TABLE tool(
  id UUID NOT NULL,
  name VARCHAR(30) NOT NULL,
  description TEXT NOT NULL,
  link VARCHAR(255) NOT NULL,
  icon VARCHAR(255),
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id),
  CONSTRAINT fk_person FOREIGN KEY(created_by) REFERENCES person(id)
);

CREATE TABLE tool_category(
  tool_id UUID NOT NULL,
  category_id UUID NOT NULL,
  PRIMARY KEY(tool_id, category_id),
  CONSTRAINT fk_tool FOREIGN KEY(tool_id) REFERENCES tool(id),
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
);
