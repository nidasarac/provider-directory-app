# provider-directory-app

A React Native provider directory application that allows users to browse, search, filter and view provider details.

## Features

- Provider listing screen
- Search providers by name, category, city, country or biography
- Filter providers by country, city and category
- Provider detail screen
- Loading state simulation
- Empty state handling
- Retry functionality
- Reusable filter component
- TypeScript support

## Project Structure

text src/ ├── components/ │   └── FilterComponent.tsx ├── data/ │   └── providerData.ts ├── screens/ │   ├── ProviderList.tsx │   ├── Filter.tsx │   └── ProviderDetail.tsx └── types.ts 

## Technical Decisions

### Mock Data

Provider data is stored locally in providerData.ts to keep the application simple and focused on the user interface and filtering experience.

### Reusable Components

The filter form was implemented as a reusable component (FilterComponent) to improve maintainability and allow future reuse in different screens.

### State Management

The application uses React's built-in state management (useState and useEffect) since the project requirements are relatively small and do not require a global state solution.

### User Experience

The application includes:

- Loading state while applying filters
- Empty state when no results are found
- Quick reset option for search and filters
- Basic null handling for missing provider information

## Installation

bash npm install 

## Run the Project

bash npx expo start 

## Technologies

- React Native
- Expo
- TypeScript
- React Navigation
