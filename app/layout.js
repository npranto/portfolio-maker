import PropTypes from 'prop-types'; // ES6
import localFont from 'next/font/local';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'PortfolioMaker',
  description: 'Build your portfolio in 15 minutes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider
          appearance={{
            variables: { colorPrimary: '#000000' },
            elements: {
              formButtonPrimary:
                'bg-black border border-black border-solid hover:bg-white hover:text-black',
              socialButtonsBlockButton:
                'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
              socialButtonsBlockButtonText: 'font-semibold',
              formButtonReset:
                'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
              membersPageInviteButton:
                'bg-black border border-black border-solid hover:bg-white hover:text-black',
              card: 'bg-[#fafafa]',
            },
          }}
        >
          <Navigation />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
