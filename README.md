# Frontend Clean Architecture Essence Consideration

## Directory
```
pagas           # as [external interface] via useing next.js
src
 ┣ business     # as [business rule] layer
 ┃ ┣ entities   # enterprise business rules
 ┃ ┗ usecases   # application business rules
 ┣ adapters     # as [interface adaptors] layer
 ┣ web          # as [external interfaces] layer
 ┃ ┣ api        # web api
 ┃ ┗ view       # user interface
 ┣ utils        # utility module for application
 ┗ __tests__    # unit, integration testing
```

## Spec
- Language: TypeScript
- Web Framework: Next.js
- DI Container: Awilix
- Testing: Jest

### Reference
Thank you for consideration and reference code project :)

- [@prosikick/twitter-like-app-clean-architecture](https://github.com/pirosikick/twitter-like-app-clean-architecture)
- [@t-tiger/React-CleanArchitecture-Example](https://github.com/t-tiger/React-CleanArchitecture-Example)