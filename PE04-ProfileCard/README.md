# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Input

The program takes an array of profile data as its primary input. Each profile object in this array contains information such as a unique ID, name, occupation, a brief description, and a reference to an image file. This data is defined directly within the `App.js` component. When the application starts, this array is used to generate the initial set of profile cards displayed on the screen.

# Process

The core of the application lies in rendering these profile data items as interactive cards using React Native's `FlatList` component for efficient display in a grid layout. Each card is initially rendered in a thumbnail format, showing a smaller image and basic information. The `useState` hook is used to manage the expanded state of each individual card. When a thumbnail is touched, the `handleCardPress` function updates the `expandedCardId`, triggering a re-render of the `ProfileCard` component. The styling of the `ProfileCard` changes based on the `isExpanded` prop it receives, displaying more details and a larger image for the expanded card.

# Output

The output of the program is a user interface displaying a gallery of profile cards. Initially, these cards are presented as a grid of thumbnails. When a user interacts with a thumbnail by clicking it, that specific card expands to show the full profile information, including the description, while the other cards remain as thumbnails. This provides a way to view a summary of multiple profiles and then delve into the details of a specific one upon interaction.

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
