import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { backendUrl } from "../../../admin/src/App";
import axios from "axios";
import Title from "./Title";
import { assets } from "../assets/frontend_assets/assets";

const Profile = () => {
  const { token } = useContext(ShopContext);

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [avatarFile, setAvatarFile] = useState(null); // new state for avatar

  // Fetch user data
  const fetchUser = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/getUser", {
        headers: { token },
      });

      if (response.data.success) {
        setUser(response.data.user);
        setFormData({
          name: response.data.user.name,
          email: response.data.user.email,
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) fetchUser();
  }, [token]);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarFile(file);

    // Optional: show preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setUser((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Update profile
  const updateProfile = async () => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      if (avatarFile) data.append("avatar", avatarFile);

      const response = await axios.put(backendUrl + "/api/user/update", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      });

      if (response.data.success) {
        setUser(response.data.user);
        setEditMode(false);
        setAvatarFile(null);
        toast.success("Profile updated successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-1 max-w-xl mx-auto">
      <div className="px-2 py-8 text-3xl">
        <Title text1={"User"} text2={"Profile"} />
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-6 space-y-4 border border-gray-400">
        <div
          className={`flex items-center justify-between gap-3 mb-6 ${
            editMode ? "flex-col items-start" : "flex-row"
          }`}
        >
          <div>
            <p className="font-medium flex sm:flex-col">
              <span className="text-gray-500">User ID</span>
              <span> #{user._id?.slice(-6).toUpperCase()}</span>
            </p>

            <div>
              <label className="block font-medium text-gray-500 mt-2">
                Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              ) : (
                <p>{user.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-500 mt-2">
                Email
              </label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <img
              src={user.avatar ? user.avatar : assets.user_avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border border-gray-400"
            />

            {editMode && (
              <label className="mt-2 text-sm text-blue-600 cursor-pointer">
                Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          {editMode ? (
            <>
              <button
                onClick={updateProfile}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  setFormData({ name: user.name, email: user.email });
                  setAvatarFile(null);
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
