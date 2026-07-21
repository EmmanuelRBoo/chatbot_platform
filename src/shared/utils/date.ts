import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

function format(date: string) {
  return dayjs(date).format("LTS");
}

export default {
  format,
};
