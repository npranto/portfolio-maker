/* eslint-disable react/no-unescaped-entities */
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-h-[415px] p-8 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
          PortfolioMaker
        </h1>

        <div className="min-h-[300px]">
          <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            forceRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
