export function CompareDates(d1: Date, d2: Date, withinDays: number) {
  let d1NoTime = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let d2NoTime = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return d1NoTime.getTime() === d2NoTime.getTime();
}
