import api from "@forge/api";
import ForgeUI, {
  render,
  Fragment,
  Text,
  Macro,
  useProductContext,
  useState,
} from "@forge/ui";
import { parse } from "node-html-parser";

import { extractKeywords, wikiLink } from "./helper";

process.cwd = () => "."; // to avoid undefined error on forge vm.

const fetchKeywordsForContent = async (contentId) => {
  const res = await api
    .asApp()
    .requestConfluence(
      `/wiki/rest/api/content/${contentId}?expand=body.storage`
    );

  const data = await res.json();

  const htmlContent = data.body.storage.value;
  const root = parse(htmlContent);
  const text = root.querySelector("p").text;

  console.log("extracted text", text);
  return await extractKeywords(text);
};

const App = () => {
  const context = useProductContext();
  const [data] = useState<any>(
    async () => await fetchKeywordsForContent(context.contentId)
  );

  console.log("fetch keywords", data);
  const { keywords, keyphrases } = data;
  return (
    <Fragment>
      <Text>**Additional Content**</Text>
      {!keywords && !keyphrases && <Text>No References found.</Text>}
      {keywords && <Text>**Keywords:** {keywords.join(", ")}</Text>}
      {keyphrases && <Text>**Links to Content:**</Text>}
      {keyphrases.map((phrase) => {
        return (
          <Text>
            [{phrase}]({wikiLink(phrase)})
          </Text>
        );
      })}
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
