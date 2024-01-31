import axios from "axios";

const client = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get("word");
  try {
    const { data } = await client.get(`/${word}`);
    const result = data.map((res: any, index: number) => {
      return { ...res, id: index };
    });
    return Response.json({ exist: true, result });
  } catch (error: any) {
    return Response.json({ exist: false, result: error.response.data });
  }
}
