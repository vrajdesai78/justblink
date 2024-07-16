export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-[100vh] justify-center items-center gap-5 px-5 sm:px-20 md:px-32 lg:px-44 xl:px-64 2xl:px-80 py-5">
      {children}
    </main>
  );
}
