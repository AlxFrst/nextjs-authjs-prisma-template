import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Template Ready!</h1>
        <p className="text-xl mb-4">
          Your Next.js, Auth.js, and Prisma template is successfully set up.
        </p>
        {session ? (
          <div>
            <p className="text-lg mb-2">You are signed in as:</p>
            <p className="text-2xl font-semibold">{session.user?.email}</p>
          </div>
        ) : (
          <p className="text-lg text-red-500">Not signed in</p>
        )}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Features:</h2>
          <ul className="list-disc list-inside text-left">
            <li className="mb-2">Next.js for fast and scalable web applications</li>
            <li className="mb-2">Auth.js for secure authentication</li>
            <li className="mb-2">Prisma for easy database access</li>
            <li className="mb-2">Tailwind CSS for utility-first styling</li>
            <li>MagicUI components for a better UI experience</li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300 ease-in-out">
            Explore Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
