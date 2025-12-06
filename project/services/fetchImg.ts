import { getResource } from "@/api/resourses/getResource";
import { createBlob } from "@/services/blobCreation";
import { objURLCreation } from "@/services/objURLCreation";

export const fetchImg = async (imgPath: string) => {
  const config = useRuntimeConfig();
  const FRONT_URL = config.public.FRONT_URL;
  const response = await getResource(FRONT_URL + imgPath, { responseType: 'blob' });

  if (response && response.data) {
    const blob = createBlob(response.data);
    const url = objURLCreation(blob);
    return url;
  }

  return null;
}