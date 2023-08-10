import { getContactList } from "@/api/userApi";
import { ApiResponse } from "@/types";
import SearchList from "@/components/SearchList/SearchList";
export default async function Home() {
  const data: ApiResponse = await getContactList();
  return (
    <>
      <SearchList data={data.data.Data} />
    </>
  );
}
