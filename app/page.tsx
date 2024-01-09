import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import TextLogo from '@/components/logo/textLogo';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-600">
      <div className="space-y-4">
        <TextLogo />
        <div className="flex justify-center">
          <LoginButton>
            <Button size="lg">Login</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};
