module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("component", {
    description: "create a new component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "component type",
        choices: [
          { name: "client component", value: "cc" },
          { name: "server component", value: "sc" },
          { name: "page", value: "page" },
          { name: "page component", value: "pc" },
        ],
      },
      {
        type: "input",
        name: "path",
        message: "Where is the path to create components? (e.g. components)",
      },
      {
        type: "input",
        name: "name",
        message: "What is the component name? (e.g. button)",
      },
    ],
    actions: (data) => {
      const actions = [];
      if (typeof data !== "undefined") {
        if (data.type === "sc") {
          actions.push(
            {
              type: "add",
              path: "components/{{path}}/{{name}}/index.tsx",
              templateFile: "generators/component/index.ts.hbs",
            },
            {
              type: "add",
              path: "components/{{path}}/{{name}}/{{name}}.tsx",
              templateFile: "generators/component/sc.tsx.hbs",
            },
          );
        } else if (data.type === "cc") {
          actions.push(
            {
              type: "add",
              path: "components/{{path}}/{{name}}/index.tsx",
              templateFile: "generators/component/index.ts.hbs",
            },
            {
              type: "add",
              path: "components/{{path}}/{{name}}/{{name}}.tsx",
              templateFile: "generators/component/cc.tsx.hbs",
            },
          );
        } else if (data.type === "page") {
          actions.push({
            type: "add",
            path: "app/{{path}}/page.tsx",
            templateFile: "generators/component/page.tsx.hbs",
          });
        } else if (data.type === "pc") {
          actions.push(
            {
              type: "add",
              path: "app/{{path}}/_components/{{name}}/index.tsx",
              templateFile: "generators/component/index.ts.hbs",
            },
            {
              type: "add",
              path: "app/{{path}}/_components/{{name}}/{{name}}.tsx",
              templateFile: "generators/component/cc.tsx.hbs",
            },
          );
        }
      }

      return actions;
    },
  });
};
