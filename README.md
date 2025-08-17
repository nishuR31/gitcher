# GitHub User Fetcher

A modern, responsive web application for fetching and visualizing GitHub user information with beautiful charts and comprehensive insights.

![GitHub User Fetcher](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

### Core Functionality
- **GitHub User Search**: Enter any GitHub username to fetch comprehensive profile information
- **Repository Analysis**: View detailed repository data including stars, forks, languages, and descriptions
- **Data Visualization**: Beautiful charts showing language usage, repository popularity, and activity patterns
- **Real-time Data**: Fresh data fetched directly from GitHub's REST API v3

### Advanced Features
- **Smart Caching**: Local storage caching reduces API calls and improves performance
- **Rate Limit Handling**: Intelligent rate limit detection with cooldown timers
- **Theme Support**: Light, dark, and system theme modes with smooth transitions
- **User Bookmarks**: Save and manage favorite GitHub users locally
- **Data Export**: Export fetched data in JSON or CSV formats
- **Toast Notifications**: Real-time feedback for user actions and errors
- **Mobile Responsive**: Optimized for all device sizes and screen orientations

### User Experience
- **Skeleton Loading**: Smooth loading states while fetching data
- **Error Handling**: Comprehensive error messages and recovery suggestions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with efficient data management

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components

### Data Visualization
- **Recharts**: Responsive chart library for React
- **Lucide Icons**: Beautiful, customizable icons

### API Integration
- **GitHub REST API v3**: Official GitHub API for user and repository data
- **Rate Limiting**: Built-in handling for API constraints
- **Caching Strategy**: Local storage for performance optimization

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/github-user-fetcher.git
   cd github-user-fetcher
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

No environment variables are required for basic functionality. The application uses GitHub's public API without authentication, which provides 60 requests per hour per IP address.

For higher rate limits, you can optionally add a GitHub personal access token:

\`\`\`env
GITHUB_TOKEN=your_github_personal_access_token
\`\`\`

## Usage

### Basic Search
1. Enter a GitHub username in the search field
2. Click the search button or press Enter
3. View the user's profile information and repositories

### Data Visualization
1. After searching for a user, click "Data Insights"
2. Explore charts showing:
   - Programming language distribution
   - Repository popularity (stars and forks)
   - Recent activity timeline
   - Repository size distribution

### Bookmarking Users
1. Search for a user you want to bookmark
2. Click the "Bookmark User" button
3. Access bookmarked users anytime from the Bookmarks tab

### Exporting Data
1. After fetching user data, scroll to the Export section
2. Choose between JSON (complete data) or CSV (repository data)
3. Files are automatically downloaded to your device

## API Rate Limits

This application respects GitHub's API rate limits:

- **Unauthenticated requests**: 60 per hour per IP address
- **Rate limit detection**: Automatic detection and user notification
- **Cooldown timers**: Visual countdown when limits are exceeded
- **Smart caching**: 10-minute cache reduces redundant API calls

## Contributing

We welcome contributions from the community! Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Add tests for new features when applicable
- Update documentation for any new functionality
- Ensure all existing tests pass
- Write clear, descriptive commit messages

## Project Structure

\`\`\`
github-user-fetcher/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── conduct/           # Code of Conduct page
│   ├── contact/           # Contact page
│   ├── disclaimer/        # Disclaimer page
│   ├── privacy/           # Privacy Policy page
│   ├── search/            # Main search functionality
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Landing page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── data-export.tsx   # Data export functionality
│   ├── github-charts.tsx # Data visualization charts
│   ├── theme-toggle.tsx  # Theme switching component
│   └── user-bookmarks.tsx # User bookmarking system
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Privacy & Data Usage

- **No personal data collection**: Only displays publicly available GitHub information
- **Local storage only**: Bookmarks and cache stored locally on your device
- **No tracking**: No analytics, cookies, or third-party tracking
- **Transparent**: Full source code available for review

See our [Privacy Policy](https://your-domain.com/privacy) for complete details.

## Support

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/your-username/github-user-fetcher/issues)
- **Discussions**: Join community discussions for questions and ideas
- **Documentation**: Comprehensive guides available in the `/docs` folder

## Acknowledgments

- **GitHub API**: For providing comprehensive developer data
- **Vercel**: For excellent hosting and deployment platform
- **shadcn/ui**: For beautiful, accessible UI components
- **Recharts**: For powerful data visualization capabilities
- **Next.js Team**: For the amazing React framework

## Roadmap

### Planned Features
- [ ] GitHub OAuth integration for higher rate limits
- [ ] Contribution calendar visualization
- [ ] Repository comparison tools
- [ ] Advanced filtering and search options
- [ ] Team and organization analysis
- [ ] API endpoint for programmatic access

### Version History
- **v1.0.0**: Initial release with core functionality
- **v1.1.0**: Added data visualization and charts
- **v1.2.0**: Implemented bookmarking and export features
- **v1.3.0**: Enhanced UI/UX with themes and notifications

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

For more information, visit our [website](https://your-domain.com) or check out the [live demo](https://your-domain.com/search).
