import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

function format(date: string) {
  return dayjs(date).format("L LTS");
}

function sortDates(dates: Date[]) {
  return dates.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
}

export default {
  format,
  sortDates,
};
