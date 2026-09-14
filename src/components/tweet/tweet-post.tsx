"use client";

import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/Button";

export const TweetPost = () => {
  const handleImageUpload = () => {};

  const handlePostButton = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <div>
        <img
          src={user.avatar}
          alt="foto usuário"
          className="size-12 rounded-full"
        />
      </div>
      <div className="flex-1">
        <div
          className="min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>

        <div className="flex items-center justify-between mt-2">
          <div className="cursor-pointer" onClick={handleImageUpload}>
            <FontAwesomeIcon icon={faImage} className="size-8" />
          </div>
          <div className="w-28">
            <Button
              size="sm"
              className="bg-white text-gray-700 hover:bg-gray-300"
              onClick={handlePostButton}
            >
              Postar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
