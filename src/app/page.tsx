import SigninPage from "./(auth)/signin/page";

export default function Page() {
  function onSubmit() {
    // console.log(data);
  }

  return (
    <main className="w-screen min-h-screen">
      <section className="flex items-center justify-center h-screen">
        <SigninPage />
      </section>
    </main>
  );
}
