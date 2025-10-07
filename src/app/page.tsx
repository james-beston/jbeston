
import PageLayout from "@/components/global/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <main className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4">
        <h1 className="text-6xl font-black">James Beston</h1>
        <p className="text-2xl text-center">
          Full-Stack Developer and Procrastinator.
        </p>
      </main>
    </PageLayout>
  );
}
