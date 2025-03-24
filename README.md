# Spam Words Detector

A modern web application to detect and highlight potential spam words in text. This tool helps identify suspicious language often found in spam emails, phishing attempts, and other unwanted communications.

## Features

- Paste any text to analyze for spam words
- Highlights detected spam words with color-coding by category
- Shows a list of all detected spam words grouped by category
- Displays an overall spam score based on the severity of detected words
- Responsive design that works on all devices

## Categories of Spam Words

The application detects words in five main categories:

- **Urgency**: Words creating a false sense of urgency (e.g., "act now", "limited time")
- **Shady**: Suspicious or questionable phrases (e.g., "risk free", "no obligation")
- **Overpromise**: Unrealistic claims or promises (e.g., "guaranteed", "100% free")
- **Money**: Financial terms often used in scams (e.g., "cash", "credit card")
- **Unnatural**: Phrases that sound unnatural in normal communication (e.g., "work from home")

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd spamwords-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Paste your text in the input field
2. The app will automatically analyze the text and highlight any spam words
3. The right panel will show details about detected words, including:
   - Overall spam score
   - Categorized list of detected spam words
   - Individual word scores

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by the need to quickly identify suspicious language in communications
- Word list compiled from various spam detection resources
