import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to the NeedCoolerShoes Wiki</h1>
      <p className="text-fd-muted-foreground">
        You can click{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          here
        </Link>{' '}
        to start browsing the wiki.
      </p>
    </main>
  );
}
