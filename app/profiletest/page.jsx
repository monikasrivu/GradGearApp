"use client";
import { useState } from "react";

export default function ProfileTestPage() {
  const [profile, setProfile] = useState(null);

  const addProfile = async () => {
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "testuser@example.com",
          phone: "9876543210",
          dob: "2000-01-01",
          department: "AI & DS",
          year: 3,
          profilePicture: "https://via.placeholder.com/150",
          personalDescription: "I am an AI & DS student interested in machine learning.",
        }),
      });

      if (!res.ok) {
        console.error("POST failed with status:", res.status);
        alert("Failed to add profile.");
        return;
      }

      const data = await res.json();
      console.log("POST Response:", data);
      alert("Profile added!");
    } catch (error) {
      console.error("POST error:", error);
      alert("An error occurred while adding profile.");
    }
  };

  const getProfiles = async () => {
    try {
      const res = await fetch("/api/profile");

      if (!res.ok) {
        console.error("GET failed with status:", res.status);
        alert("Failed to get profiles.");
        return;
      }

      const data = await res.json();
      console.log("GET Response:", data);
      setProfile(data);
    } catch (error) {
      console.error("GET error:", error);
      alert("An error occurred while fetching profiles.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Profile Test Page</h1>
      <button
        onClick={addProfile}
        className="bg-green-500 text-white px-4 py-2 rounded mr-4"
      >
        Add Profile
      </button>
      <button
        onClick={getProfiles}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Profiles
      </button>
      {profile && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(profile, null, 2)}
        </pre>
      )}
    </div>
  );
}
