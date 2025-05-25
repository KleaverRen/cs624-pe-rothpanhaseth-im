# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# CS624 PE05 - Cities with Countries and Currency

This project enhances the existing Cities App by adding functionality to manage a list of countries and their respective currencies through a bottom tab navigator.

## Input

The primary inputs for this application occur on the "AddCountry" screen. Users provide two pieces of information:
* **Country Name**: Text input for the name of the country.
* **Currency**: Text input for the currency associated with that country (e.g., USD, EUR).

These inputs are captured via `TextInput` components and managed using React's `useState` hooks within the `AddCountryScreen` component.

## Process

The application's processing involves several key steps:
1.  **Data Capture**: When a user enters text into the input fields on the "AddCountry" screen, the component's local state is updated in real-time.
2.  **Data Validation**: Upon pressing the "Add Country" button, a basic validation check ensures that both the country name and currency fields are not empty.
3.  **State Update**: If validation passes, a new country object (containing the name and currency) is created. This object is then passed via a callback function (`addCountryToList`) to the main `App.js` component.
4.  **Global State Management**: `App.js` maintains a central list of all added countries in its `countries` state. When `addCountryToList` is called, the new country is appended to this list, triggering a re-render of components that depend on this state.
5.  **Navigation**: After successfully adding a country, the user is programmatically navigated to the "Countries" tab for immediate viewing of the updated list.

## Output

The main output of the application is the dynamically updated list of countries and their currencies, displayed on the "Countries" screen.
* **List Display**: The "Countries" screen receives the `countries` list from `App.js` as a prop. It uses a `FlatList` component to efficiently render each country item.
* **Country Item**: Each item in the list shows the country name and its associated currency, clearly presenting the entered data to the user.
* **User Feedback**: Alerts are used on the "AddCountry" screen to confirm successful addition or notify of missing input.
* **Navigation**: The bottom tab navigator itself is an output, providing a clear and intuitive way for users to switch between the "Cities", "AddCountry", and "Countries" functionalities.
## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
