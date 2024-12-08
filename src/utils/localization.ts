import _ from 'lodash';
import * as Content from '../locales';

type ContentType = {
  [key: string]: string | string[] | ContentType;
};

const contentData: ContentType = Content.default as ContentType;

const translate = (contentPath: string, values?: Record<string, string>) => {

  const content = _.get(contentData, contentPath, null);

  if (Array.isArray(content)) {
    return content.map((item) =>
      typeof item === "string" && values ? _.template(item)(values) : item
    );
  }

  if (typeof content === "string") {
    return values ? _.template(content)(values) : content;
  }
  return null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  t: translate,
};
