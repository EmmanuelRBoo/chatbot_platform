import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

function format(date: string) {
  return dayjs(date).format("L LTS");
}

export default {
  format,
};
