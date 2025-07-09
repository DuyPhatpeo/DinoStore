function MainLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen bg-secondary text-primary">
      <div className="container flex-1 px-4 py-6 mx-auto sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
