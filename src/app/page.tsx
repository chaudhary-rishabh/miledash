import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              Welcome to Miledash
            </h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}