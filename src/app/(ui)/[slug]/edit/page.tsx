"use client";

import { useState } from "react";
import { GeneralHeader } from "@/components/ui/General-header";
import { Input } from "@/components/ui/Input";
import { user } from "@/data/user";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

export default function EditProfile() {
  const [nameField, setNameField] = useState(user.name);
  const [bioField, setBioField] = useState(user.bio);
  const [linkField, setLinkField] = useState(user.link);

  return (
    <div>
      <GeneralHeader path="/home">
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900 mx-4 md:mx-0">
        <div
          className="flex items-center justify-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + user.conver + ")" }}
        >
          <div className="flex items-center justify-center size-12 rounded-full cursor-pointer bg-black/80">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="flex items-center justify-center size-12 rounded-full cursor-pointer bg-black/80">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>

        <div className="-mt-12 mx-10 md:mx-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="flex items-center justify-center size-24 -mt-24">
            <div className="flex items-center justify-center size-12 rounded-full cursor-pointer bg-black/80">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 p-6">
        <label htmlFor="">
          <p className="text-lg text-gray-500 mb-2">Nome</p>
        </label>

        <Input
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />

        <TextArea
          placeholder="Digite sua bio"
          name="bio"
          value={bioField}
          onChange={(e) => setBioField(e.target.value)}
        />

        <Input
          name="link"
          label="Link"
          placeholder="Digite seu link"
          value={linkField}
          onChange={(e) => setLinkField(e.target.value)}
        />

        <Button
          size="lg"
          className="bg-white text-gray-900 hover:bg-gray-300 mt-6"
        >
          Salvar alterações
        </Button>
      </section>
    </div>
  );
}
