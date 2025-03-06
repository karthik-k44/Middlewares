# Express Server

This is a simple Express server with basic routing.

## Routes

- `GET /` - Home page
- `GET /user` - User page
- `GET *` - Catch-all route for 404 errors

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Server

Start the server with the following command:

```sh
npm start
```

The server will run on port `3000` by default. You can change the port by setting the `PORT` environment variable.

## Dependencies

- [express](https://www.npmjs.com/package/express)
