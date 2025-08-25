import { Heading, BodyText } from '@/shared-components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <Heading variant="h1" color="primary" gutterBottom>
          Welcome to My App
        </Heading>
        <BodyText variant="body1" color="inherit" paragraph>
          This text uses the shared typography components from the submodule.
        </BodyText>
      </div>
    </main>
  );
}
