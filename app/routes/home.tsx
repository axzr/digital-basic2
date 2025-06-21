import Editor from "~/components/editor";

export function meta() {
  return [{ title: "Basic English Spellchecker" }];
}

const Home = () => {
  return (
    <div
      suppressHydrationWarning={true} // this is not ideal, should be fixed @@@@
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Basic English Spellchecker</h1>
      <Editor />
    </div>
  );
};

export default Home;
