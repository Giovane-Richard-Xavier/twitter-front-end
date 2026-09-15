import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/General-header";
import { SearchInput } from "@/components/ui/Search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default function SearchPage({ searchParams }: Props) {
  if (!searchParams) redirect("/");

  return (
    <div>
      <GeneralHeader path="/">
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>

      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
      </div>
    </div>
  );
}
