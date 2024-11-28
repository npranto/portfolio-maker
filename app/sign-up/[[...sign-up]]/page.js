/* eslint-disable react/no-unescaped-entities */
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
          PortfolioMaker
        </h1>
        <div className="min-h-[645px]">
          <SignUp
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            forceRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
