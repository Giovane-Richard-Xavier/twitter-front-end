import { Button } from "@/components/ui/Button";
import { GeneralHeader } from "@/components/ui/General-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SlugPage() {
  const isMe = true;

  return (
    <div>
      <GeneralHeader path="/home">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + user.conver + ")" }}
        ></div>

        <div className="flex items-end justify-between -mt-12">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />

          {isMe && (
            <div className="w-32">
              <Link href={`/${user.slug}/edit`}>
                <Button
                  size="sm"
                  className="bg-white text-gray-900 hover:bg-gray-300"
                >
                  Editar Perfil
                </Button>
              </Link>
            </div>
          )}

          {!isMe && (
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-300"
            >
              Seguir
            </Button>
          )}
        </div>

        <div className="px-6 mt-4">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-sm text-gray-500">@{user.slug}</div>
          <div className="py-5 text-gray-500">{user.bio}</div>
          {user.link && (
            <div className="flex items-center gap-2 truncate">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link href={user.link} target="_blank" className="text-blue-300">
                {user.link}
              </Link>
            </div>
          )}
          <div className="flex gap-6 my-5">
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
