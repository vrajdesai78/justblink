/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { Container, Input, Upload } from "@/components";

export default function CreateCollection() {
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  const uploadFile = async (fileToUpload: File) => {
    try {
      setIsImageUploading(true);
      const data = new FormData();
      data.append("file", fileToUpload);
      const response = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await response.json();
      setImageUrl(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`);
      setIsImageUploading(false);
    } catch (e) {
      console.log(e);
      setIsImageUploading(false);
      toast.error("Failed to upload image, please try again later.", {
        icon: "🚧",
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  return (
    <Container>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[900px] mx-auto pt-32 pb-10 lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[40px] gap-10 px-20 overflow-hidden shadow-2xl">
          <div className="hidden md:flex mx-auto justify-center">
            <Image src="/nft.png" width="120" height="120" alt="Icon" />
          </div>
          <div className="py-8 text-white text-right">
            <div className="font-semibold text-2xl mb-2">Create a Collection</div>
            <div className="font-medium text-md mb-2 text-neutral-100">
              Monetize your community to grant access and benefits. <br /> Specially designed for
              creators and guilds.
            </div>
          </div>
        </div>
        <form className="flex flex-col space-y-4 w-[90%] md:max-w-[600px] mx-auto">
          <img
            className="mx-auto w-[14rem] h-[14rem] bg-gradient-to-tr from-[#ADE1FF] to-sky-400 rounded-xl object-fill"
            src={image ? image : "/preview.png"}
            alt="preview"
            width={200}
            height={200}
          />
          <div className="mx-auto">
            <Upload
              id="image"
              name="image"
              type="file"
              label="Upload Image"
              accept="image/*"
              onChange={async (e) => {
                const image = URL.createObjectURL(e.target.files[0]);
                setImage(image);
                await uploadFile(e.target.files[0]);
              }}
            />
          </div>
          <Input
            id="name"
            name="name"
            label="Name"
            type="text"
            placeholder="Send storms"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            value={name}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            type="text"
            placeholder="Send storm is a collection of 10,000 unique NFTs."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            value={description}
            helper="Write Something About This NFT or Features"
          />
          {/* <Input
            id="price"
            name="price"
            label="Price"
            type="number"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
            helper="Recommend initial NFT Price - 0.01 SOL, without token ticker"
          /> */}
          <button
            onClick={async (e) => {
              e.preventDefault();
              if (name && description && imageUrl) {
                console.log("Image: 🎒", imageUrl);
              } else {
                toast("Please fill all the fields", {
                  icon: "🚧",
                  style: {
                    borderRadius: "10px",
                  },
                });
              }
            }}
            className="mx-auto w-full bg-indigo-500 hover:bg-indigo-600 text-white leading-8 tracking-wide items-center justify-center focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-xl shadow-lg px-5 py-2.5 text-center disabled:opacity-75 disabled:cursor-progress"
            disabled={isImageUploading || isLoading}
          >
            {isImageUploading
              ? "Uploading Image..."
              : isLoading
                ? "Cookin collection..."
                : "Create collection 🚀"}
          </button>
        </form>
      </div>
    </Container>
  );
}
