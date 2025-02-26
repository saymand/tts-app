# TTS Application

This is a Text-to-Speech (TTS) application that utilizes the Eleven Labs API or a free alternative to convert text into speech. The application is styled using Tailwind CSS for a modern and responsive design.

## Project Structure

```
tts-app
├── index.html          # Main HTML document for the TTS application
├── src
│   ├── js
│   │   ├── app.js     # Main application logic for handling TTS functionality
│   │   └── tts-service.js # Service functions for interacting with the TTS API
│   └── css
│       └── styles.css # Custom styles utilizing Tailwind CSS
├── assets
│   └── audio          # Directory for storing generated audio files
├── tailwind.config.js  # Configuration file for Tailwind CSS
├── package.json        # npm configuration file listing dependencies and scripts
└── README.md           # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tts-app
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**:
   To generate the CSS file from Tailwind, run:
   ```bash
   npx tailwindcss -i ./src/css/styles.css -o ./dist/styles.css --watch
   ```

4. **Open the application**:
   Open `index.html` in your web browser to use the TTS application.

## Usage

- The application provides buttons to read predefined text lines.
- Click the "Read" button to start the speech synthesis.
- Use the "Stop" button to halt the speech at any time.

## API Integration

This application integrates with the Eleven Labs API (or a free alternative) to perform text-to-speech operations. Ensure you have the necessary API keys and configurations set up in `src/js/tts-service.js`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.