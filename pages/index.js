import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router"; // ✅ Import useRouter

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter(); // ✅ Initialize router

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl text-center font-sans">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🎓 GradGear</h1>
        <p className="text-gray-600 text-sm mb-6">Your personalized student dashboard</p>

        {!session ? (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full"
          >
            Sign in with Google
          </button>
        ) : (
          <>
            <p className="text-gray-700 mb-4">
              Signed in as <span className="font-semibold">{session.user.name}</span>
            </p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full mb-4"
            >
              Sign out
            </button>
            <button
              onClick={() => router.push("/dashboard")} // ✅ Go to Dashboard
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full"
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}
