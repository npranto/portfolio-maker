import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen px-4 py-4">
          <h2 className="text-2xl font-bold  mb-6">Settings</h2>
          {/* <h1>Welcome, {user?.firstName}!</h1> */}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default SettingsPage;
