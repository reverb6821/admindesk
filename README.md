# AdminDesk

AdminDesk is a free and open-sourced pure css themed Angular 12 starter project, focused on management for WebApp and E-Commerce.

### Project Structure

```
.
├── src                             # Main root file
│   ├── app                         # App core files
│   │    ├── components             # All Angular components for the template
|   |    |    ├── home-components   # Components for home page
│   │    │    ├── partials          # Partials components 
│   │    │    └── shared            # Shared components
│   │    ├── layouts                # Where define to find all pages that renderize components
│   │    │    ├── main              # Dashboard Page
│   │    │    └── login             # Login Page
│   │    ├── views                  # Where all pages was mounted
│   │    │    └── dashboard         # Dashboard home page
│   │    ├── app-routing.module.ts  # All routes
│   │    └── app.module.ts          # Modules imported
│   ├── assets                      # All assets file
│   │    └── scss                   # scss custom class
│   └── style.scss                  # core scss file (import all scss custom here)
├── browserlistrc
├── eslintignore
├── eslintrc.json                   # Eslint file for rules
├── .gitignore
├── .prettierrc.json                # Prettier file to define style rules
├── angular.json                    # The core of angular, set here all your package and dependencies
├── karma.conf.js
├── package.json
├── tailwind.js                     # Tailwind config file
├── tsconfig.app.json
├── tsconfig.json                   # TypeScript Config File
└── tsconfig.spec.json
```

### Custom SCSS Class
- Glassmorphism
- Gradient Colors
- Custom Shadow Box Property

### Documentation/What I've used
- [TailwindCSS](https://tailwindcss.com/docs)
- [Tailwind Starter Kit By Creative Tim](https://github.com/creativetimofficial/tailwind-starter-kit)
- [Tailwind UI Kit](https://app.tailwinduikit.com/)
- [Tailwind-Kit](https://www.tailwind-kit.com/)
- [ChartJS](https://www.chartjs.org/docs/latest/)


### Feature
Using this template you will be able to leverage lots of built-in components and thus focus on building features that set you apart from competitors rather than bulding everything from scratch. 

- TailwindCSS
- Respondive Layout
- Tables (builded with datatables)
- Charts (builded with Chart.js)
- Notification
- Icons
- Maps
- 404 & 500 page errors

### How to start
You can start by cloning the latest version of AdminDesk on your local machine by running:

1. Clone it on your Folder
```$ git clone git@github.com:reverb6821/admindesk.git ```
2. Move on project's folder and install all dependencies you need
```$ npm install ```
3. Launch it with npm commands.

### npm commands:
###### Angular defaults commands
```
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
```
###### Eslint + Prettier 
