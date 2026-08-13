import AboutPage from './AboutPage';

// The Portfolio page has been merged into About Us.
// Rendering AboutPage ensures backward compatibility for /portfolio route.
export default function PortfolioPage() {
  return <AboutPage />;
}
