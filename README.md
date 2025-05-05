# Cushon interview

This project uses the following:

* React - version `19.1.0`
* React Router - version `7.5.3` for the framework and routing
* Material UI - version `7.0.2` for components and icons
* Tailwind - version `4.1.4` for styling
* Jest and React Testing Library - version `29.7.0` and `16.3.0` for testing

## Getting Started

### Prerequisites

Node version `v22.15.0`

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```
Your application will be available at `http://localhost:5173`.

### Testing

The tests use Jest and React Testing Library. Start the tests with:
```bash
npm run test
```
or to run them in watch mode:
```bash
npm run test -- --watch
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

## Notes:

This project uses IndexDB as a mock database. On first startup in dev mode the script `setup.ts` will run. This will populate IndexDB with the mock funds in `mockFunds.ts` and a mock user.

## Assumptions:
* Cushons app would have a middleware for error handling when querying APIs.

## Future Work:
* Add a config file for constants.
* Allow a user to setup monthley investments.
* Add a graph showing the predicted growth of a fund.
* Display a snackbar on user submission for conformation.