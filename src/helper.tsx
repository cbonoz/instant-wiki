import retext from "retext";
import pos from "retext-pos";
import keywords from "retext-keywords";
import toString from "nlcst-to-string";

export interface KeywordResult {
  keywords: Array<string>;
  keyphrases: Array<string>;
}

export const extractKeywords = (text) => {
  return new Promise((resolve, reject) => {
    function done(err, file) {
      if (err) {
        reject(err);
      }

      const kwords = file.data.keywords.map(function (keyword) {
        return toString(keyword.matches[0].node);
      });

      const keyphrases = file.data.keyphrases.map(function (phrase) {
        return phrase.matches[0].nodes.map(toString).join("");
      });

      resolve({
        keywords: kwords,
        keyphrases,
      });
    }
    retext().use(pos).use(keywords).process(text, done);
  });
};

export const wikiLink = (text: string) => {
  return `https://en.wikipedia.org/wiki/Special:Search/${escape(text)}`;
};
