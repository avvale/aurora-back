Analyze the semantics of the schema: $ARGUMENTS

Use the aurora-schema-manager agent to:

1. If $ARGUMENTS is a module (e.g., “library/book”), analyze that YAML
2. If $ARGUMENTS is empty, list the available YAMLs and ask which one to review
3. If $ARGUMENTS is “all,” analyze all YAMLs in the project

Generate a report with:

- Fields without descriptions
- Names that could be improved
- Suggestions for improved YAML