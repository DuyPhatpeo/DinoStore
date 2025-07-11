function MainLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 w-full px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
