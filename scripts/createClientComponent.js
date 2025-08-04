const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

const filePath = path.join("src", "components", `${componentName}.tsx`);
const content = `'use client';

import React from 'react';

const ${componentName} = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">${componentName}</h2>
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(filePath, content);
console.log("Created src/components/" + componentName + ".tsx");
